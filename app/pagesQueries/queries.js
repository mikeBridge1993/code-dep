import gql from "graphql-tag"

export const REPOSITORY_QUERY = gql`
  query REPOSITORY_QUERY($name: String!, $owner: String!) {
    repository(name: $name, owner: $owner) {
      id
      name
      description
      url
      issues(states: OPEN) {
        totalCount
      }
      pullRequests(states: OPEN) {
        totalCount
      }
      forks {
        totalCount
      }
      stargazerCount
    }
  }
`
