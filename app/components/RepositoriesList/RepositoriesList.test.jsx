import React from "react"
import { render, fireEvent, act } from "@testing-library/react"
import { MockedProvider } from "@apollo/client/testing"
import RepositoriesList from "./index"
import { NUMBER_OF_ITEMS_PER_PAGE } from "../../utils/constants"
import { queryPageMock, firstPageMock, mockUseContext } from "../../mocks/mocks"

const firstPageData = firstPageMock.data.organization.repositories

it("should render correctly with first page data, coming from the page ssr", async () => {
  const { getByText } = render(
    <MockedProvider mocks={queryPageMock} addTypename={false}>
      <RepositoriesList
        repositories={firstPageData.repos}
        endCursor={firstPageData.pageInfo.endCursor}
      />
    </MockedProvider>
  )

  expect(getByText(NUMBER_OF_ITEMS_PER_PAGE)).toBeTruthy()
})

it("should render correctly with second page data, from the client side query", async () => {
  const { getByText } = render(
    <MockedProvider mocks={queryPageMock} addTypename={false}>
      <RepositoriesList
        repositories={firstPageData.repos}
        endCursor={firstPageData.pageInfo.endCursor}
        totalCount={firstPageData.totalCount}
      />
    </MockedProvider>
  )

  act(() => {
    fireEvent.scroll(window, { target: { scrollY: 5000 } })
  })
  await new Promise(resolve => setTimeout(resolve, 5000))
  expect(getByText(NUMBER_OF_ITEMS_PER_PAGE * 2)).toBeTruthy()
})

it("repositories should be filtered based on the search term (coming from react context)", async () => {
  React.useContext = mockUseContext("sys")

  const { getByText } = render(
    <MockedProvider mocks={queryPageMock} addTypename={false}>
      <RepositoriesList
        repositories={firstPageData.repos}
        endCursor={firstPageData.pageInfo.endCursor}
      />
    </MockedProvider>
  )

  expect(getByText("1")).toBeTruthy()
})

it("should not show results if search term is not found in any repository name", async () => {
  React.useContext = mockUseContext("repository-wrong-search-term")

  const { getByText } = render(
    <MockedProvider mocks={queryPageMock} addTypename={false}>
      <RepositoriesList
        repositories={firstPageData.repos}
        endCursor={firstPageData.pageInfo.endCursor}
      />
    </MockedProvider>
  )
  expect(getByText("0")).toBeTruthy()
})
