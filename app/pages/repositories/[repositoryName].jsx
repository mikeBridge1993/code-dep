import React from "react"
import client from "../../utils/apollo-client.js"
import { COMPANY_NAME } from "../../utils/constants"
import styles from "./styles.module.scss"
import Link from "next/link"
import { REPOSITORY_QUERY } from "../../pagesQueries/queries"

const RepositoryPage = ({
  repository: {
    name,
    description,
    issues,
    pullRequests,
    forks,
    stargazerCount,
    url
  } = {}
}) => (
  <div className={styles["repository-page"]}>
    <Link href="/">
      <a className={styles["repository-page__chip"]}>
        Go back to all repositories
      </a>
    </Link>
    <div className={styles["repository-page__hero"]}>
      <a className={styles["repository-page__title"]} href={url}>
        {name}
      </a>
      <div className={styles["repository-page__description"]}>
        {description}
      </div>
      <div className={styles["repository-page__stats"]}>
        <a
          href={`${url}/pulls`}
          className={styles["repository-page__pull-requests"]}
        >
          <span className={styles["repository-page__amount"]}>
            {pullRequests.totalCount}
          </span>
          <i className="fas fa-code-branch"></i>
        </a>
        <a
          href={`${url}/network/members`}
          className={styles["repository-page__forks"]}
        >
          <span className={styles["repository-page__amount"]}>
            {forks.totalCount}
          </span>
          <i className="fa fa-utensils"></i>
        </a>
        <a className={styles["repository-page__issues"]} href={`${url}/issues`}>
          <span className={styles["repository-page__amount"]}>
            {issues.totalCount}
          </span>
          <i className="fas fa-exclamation"></i>
        </a>
        <a
          href={`${url}/stargazers`}
          className={styles["repository-page__stars"]}
        >
          <span className={styles["repository-page__amount"]}>
            {stargazerCount}
          </span>
          <i className="fa fa-star"></i>
        </a>
      </div>
    </div>
  </div>
)

export default RepositoryPage

export async function getServerSideProps({ query }) {
  const name = query.repositoryName

  const { data } = await client
    .query({
      query: REPOSITORY_QUERY,
      variables: {
        name,
        owner: COMPANY_NAME
      }
    })
    .catch(error =>
      //TODO appropriate error handling
      console.log(error)
    )

  return { props: { repository: data.repository } }
}
