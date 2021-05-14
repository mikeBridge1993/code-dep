import React from "react"
import "@testing-library/jest-dom/extend-expect"
import RepositoriesListItem from "./index"
import { render, act, fireEvent } from "@testing-library/react"
import { RouterContext } from "next/dist/next-server/lib/router-context"
import { routerMock } from "../../../mocks/mocks"

it("should navigate correctly to repository item page", async () => {
  const repositoryName = "test-repo-name"
  const { getByTestId } = render(
    <RouterContext.Provider value={routerMock}>
      <RepositoriesListItem
        name={repositoryName}
        description="test-repo-description"
      />
    </RouterContext.Provider>
  )

  const anchor = getByTestId("list-item-link")
  act(() => {
    fireEvent.click(anchor)
  })
  expect(routerMock.push).toHaveBeenCalledWith(
    "/repositories/[name]",
    `/repositories/${repositoryName}`,
    expect.anything()
  )
})
