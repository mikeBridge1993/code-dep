import { useContext } from "react"
import SearchContext from "./searchContext"

export const useSearch = () => {
  const context = useContext(SearchContext)

  return context
}
