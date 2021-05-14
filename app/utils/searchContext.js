import React, { useState } from "react"

const SearchContext = React.createContext()

const defaultSearch = ""

export const SearchProvider = ({ children, search }) => {
  const [currentSearch, setCurrentsearch] = useState(search || defaultSearch)

  const saveSearch = values => {
    setCurrentsearch(values)
  }

  return (
    <SearchContext.Provider value={{ search: currentSearch, saveSearch }}>
      {children}
    </SearchContext.Provider>
  )
}

export const SearchConsumer = SearchContext.Consumer

export default SearchContext
