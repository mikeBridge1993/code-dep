import React from "react"
import { render, fireEvent, act } from "@testing-library/react"
import { mockUseContext, wrapper, mockSaveSearch } from "../../mocks/mocks"
import FilterBar from "./index"

it("In the filter bar any input change should change the react context search text", async () => {
  React.useContext = mockUseContext()
  const { getByTestId } = render(<FilterBar />)
  const textarea = getByTestId("filter-input")

  act(() => {
    fireEvent.change(textarea, { target: { value: "sys" } })
  })

  expect(mockSaveSearch).toHaveBeenCalledWith("sys")
})
