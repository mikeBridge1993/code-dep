import gql from "graphql-tag"

export const GET_PAGINATED_REPOSITORIES = gql`
  query GET_PAGINATED_REPOSITORIES(
    $first: Int!
    $cursor: String
    $login: String!
  ) {
    organization(login: $login) {
      __typename
      repositories(first: $first, after: $cursor) {
        __typename
        pageInfo {
          endCursor
          startCursor
        }
        repos: nodes {
          url
          name
          description
          id
        }
      }
    }
  }
`
