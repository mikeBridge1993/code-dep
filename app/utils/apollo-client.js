import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import fetch from "cross-fetch"

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = process.env.GITHUB_TOKEN
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  }
})

const httpLink = createHttpLink({
  uri: process.env.GITHUB_API,
  fetch
})

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          repositories: {
            merge(existing, incoming) {
              return { ...existing, ...incoming }
            }
          },
          organization: {
            merge(existing, incoming) {
              return { ...existing, ...incoming }
            }
          }
        }
      }
    }
  }),
  link: authLink.concat(httpLink)
})

export default client
