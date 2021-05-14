import React from "react"
import styles from "./styles.module.scss"
import { gql } from "@apollo/client"
import client from "../utils/apollo-client.js"
import FilterBar from "../components/FilterBar"
import RepositoriesList from "../components/RepositoriesList"
import { NUMBER_OF_ITEMS_PER_PAGE } from "../utils/constants"
import { SearchProvider } from "../utils/searchContext"
import { COMPANY_NAME } from "../utils/constants"

const MainPage = props => {
  return (
    <div className={styles.main}>
      <SearchProvider>
        <div className={styles["main__header"]}>
          <h2 className={styles["main__title"]}>
            Dashboard of repositories from{" "}
            <span className={styles["main__brand"]}>PALANTIR</span>
          </h2>
          <FilterBar></FilterBar>
        </div>
        <RepositoriesList {...props} />
      </SearchProvider>
    </div>
  )
}

export default MainPage

export async function getServerSideProps() {
  const { data } = await client
    .query({
      query: gql`
        query GET_REPOSITORIES($login: String!, $first: Int!) {
          organization(login: $login) {
            repositories(first: $first) {
              pageInfo {
                endCursor
                startCursor
              }
              totalCount
              repos: nodes {
                url
                name
                description
              }
            }
          }
        }
      `,
      variables: {
        login: COMPANY_NAME,
        first: NUMBER_OF_ITEMS_PER_PAGE
      }
    })
    .catch(error =>
      //TODO appropriate error handling
      console.log(error)
    )

  const repositoryData = data.organization.repositories
  return {
    props: {
      repositories: repositoryData.repos,
      endCursor: repositoryData.pageInfo.endCursor,
      totalCount: repositoryData.totalCount
    }
  }
}
