import React, { useState } from "react"
import RepositoriesListItem from "./RepositoriesListItem/index"
import NProgress from "nprogress"
import { useLazyQuery } from "@apollo/client"
import { NUMBER_OF_ITEMS_PER_PAGE, COMPANY_NAME } from "../../utils/constants"
import { Waypoint } from "react-waypoint"
import styles from "./styles.module.scss"
import { useSearch } from "../../utils/useSearch"
import { GET_PAGINATED_REPOSITORIES } from "./queries"

const RepositoriesList = ({ repositories, endCursor, totalCount }) => {
  const [cursor, setCursor] = useState(endCursor)
  const { search: searchTerm = "" } = useSearch() || {}
  const [paginatedRepositories, setPaginatedRepositories] = useState(
    repositories
  )

  const [getRepositories, { error: queryError }] = useLazyQuery(
    GET_PAGINATED_REPOSITORIES,
    {
      onCompleted: res => {
        const repositoryData = res.organization.repositories
        const newCursor = repositoryData.pageInfo.endCursor
        const newPage = repositoryData.repos
        setCursor(newCursor)
        setPaginatedRepositories([...paginatedRepositories, ...newPage])
        NProgress.done()
      }
    }
  )

  if (queryError) {
    //TODO appropriate error handling
    return console.log(queryError)
  }

  const searchTermFilteredRepositories =
    paginatedRepositories?.filter(repository =>
      repository.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) || []

  const numberOfRepositoriesToDisplay = searchTermFilteredRepositories.length
  const enableInfiniteScrolling =
    numberOfRepositoriesToDisplay >= NUMBER_OF_ITEMS_PER_PAGE &&
    paginatedRepositories.length < totalCount
  return (
    <div className={styles["repositories-list"]}>
      <div className={styles["repositories-list__text"]}>
        Showing{" "}
        <span className={styles["repositories-list__amount"]}>
          {searchTermFilteredRepositories.length}
        </span>{" "}
        repositories
      </div>
      {numberOfRepositoriesToDisplay > 0 && (
        <div className={styles["repositories-list__results-wrapper"]}>
          <ul className={styles["repositories-list__results"]}>
            {searchTermFilteredRepositories.map(repository => (
              <RepositoriesListItem key={repository.name} {...repository} />
            ))}
          </ul>
        </div>
      )}
      {enableInfiniteScrolling && (
        <Waypoint
          onEnter={() => {
            getRepositories({
              variables: {
                first: NUMBER_OF_ITEMS_PER_PAGE,
                login: COMPANY_NAME,
                cursor
              }
            })
            NProgress.start()
          }}
        ></Waypoint>
      )}
    </div>
  )
}

export default RepositoriesList
