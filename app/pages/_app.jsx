import React from "react"
import { ApolloProvider } from "@apollo/client"
import client from "../utils/apollo-client"
import "./global/styles.scss"

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
