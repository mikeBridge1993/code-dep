import React from "react"
import { render } from "@testing-library/react"
import RepositoryPage from "../pages/repositories/[repositoryName]"
import { repositoryPageMock } from "../mocks/mocks"

it("should render correctly with repository page data", async () => {
  const { getByText } = render(
    <RepositoryPage repository={repositoryPageMock[0].result.data.repository} />
  )

  expect(getByText("Cinch")).toBeTruthy()
  expect(getByText("3")).toBeTruthy()
  expect(getByText("5")).toBeTruthy()
  expect(getByText("16")).toBeTruthy()
  expect(getByText("110")).toBeTruthy()
})
