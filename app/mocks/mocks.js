import React from "react"
import { GET_PAGINATED_REPOSITORIES } from "../components/RepositoriesList/queries"
import SearchContext from "../utils/searchContext"
import { REPOSITORY_QUERY } from "../pagesQueries/queries"

export const routerMock = {
  basePath: "",
  pathname: "/",
  route: "/",
  asPath: "/",
  query: {},
  push: jest.fn().mockResolvedValue(true),
  replace: jest.fn().mockResolvedValue(true),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn().mockResolvedValue(undefined),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn()
  },
  isFallback: false
}

export const SearchContextProvider = ({ children }) => (
  <SearchContext.Provider>{children}</SearchContext.Provider>
)
export const wrapper = ({ children }) => (
  <SearchContextProvider>{children}</SearchContextProvider>
)

export const mockSaveSearch = jest.fn().mockImplementation(search => search)
export const mockUseContext = search =>
  jest.fn().mockImplementation(() => ({
    search: search,
    saveSearch: mockSaveSearch
  }))

export const queryPageMock = [
  {
    request: {
      query: GET_PAGINATED_REPOSITORIES,
      variables: {
        login: "palantir",
        cursor: "Y3Vyc29yOnYyOpHOAXwhnA==",
        first: 16
      }
    },
    result: {
      data: {
        organization: {
          __typename: "Organization",
          repositories: {
            __typename: "RepositoryConnection",
            pageInfo: {
              __typename: "PageInfo",
              endCursor: "Y3Vyc29yOnYyOpHOAmBFzw==",
              startCursor: "Y3Vyc29yOnYyOpHOAXwiwA=="
            },
            repos: [
              {
                __typename: "Repository",
                url: "https://github.com/palantir/stash-codesearch-plugin",
                name: "stash-codesearch-plugin",
                description:
                  "Provides global repository, commit, and file content search for Atlassian Stash instances",
                id: "MDEwOlJlcG9zaXRvcnkyNDkxMjU3Ng=="
              },
              {
                __typename: "Repository",
                url: "https://github.com/palantir/typesettable",
                name: "typesettable",
                description:
                  ":triangular_ruler: A typesetting library for SVG and Canvas",
                id: "MDEwOlJlcG9zaXRvcnkyNTIzODk0Nw=="
              },
              {
                __typename: "Repository",
                url: "https://github.com/palantir/gulp-count",
                name: "gulp-count",
                description: "Counts files in vinyl streams.",
                id: "MDEwOlJlcG9zaXRvcnkyOTc1MDQwOQ=="
              },
              {
                __typename: "Repository",
                url: "https://github.com/palantir/spark",
                name: "spark",
                description: "Palantir Distribution of Apache Spark",
                id: "MDEwOlJlcG9zaXRvcnkzMDkxOTIwMw=="
              },
              {
                __typename: "Repository",
                url: "https://github.com/palantir/gulp-bower-overrides",
                name: "gulp-bower-overrides",
                description: "merge bower overrides into bower.json files",
                id: "MDEwOlJlcG9zaXRvcnkzMTcyMDM5OA=="
              },
              {
                __typename: "Repository",
                url: "https://github.com/palantir/gradle-bowerdeps-plugin",
                name: "gradle-bowerdeps-plugin",
                description:
                  "A Gradle plugin for controlling build order with bower.json files.",
                id: "MDEwOlJlcG9zaXRvcnkzMjI2MjI5MQ=="
              },
              {
                __typename: "Repository",
                url: "https://github.com/palantir/gradle-flexversion",
                name: "gradle-flexversion",
                description: null,
                id: "MDEwOlJlcG9zaXRvcnkzNTIwMDE1NA=="
              },
              {
                __typename: "Repository",
                url: "https://github.com/palantir/giraffe",
                name: "giraffe",
                description:
                  "Gracefully Integrated Remote Access For Files and Execution",
                id: "MDEwOlJlcG9zaXRvcnkzNTI0MDYwMA=="
              },
              {
                __typename: "Repository",
                url: "https://github.com/palantir/gradle-miniconda-plugin",
                name: "gradle-miniconda-plugin",
                description:
                  "Plugin that sets up a Python environment for building and running tests using Miniconda.",
                id: "MDEwOlJlcG9zaXRvcnkzNTUxMjE1Mw=="
              },
              {
                __typename: "Repository",
                url: "https://github.com/palantir/atlasdb",
                name: "atlasdb",
                description: "Transactional Distributed Database Layer",
                id: "MDEwOlJlcG9zaXRvcnkzNjk2MDYzNw=="
              },
              {
                __typename: "Repository",
                url: "https://github.com/palantir/gradle-jacoco-coverage",
                name: "gradle-jacoco-coverage",
                description: null,
                id: "MDEwOlJlcG9zaXRvcnkzNzI4ODA5Mg=="
              },
              {
                __typename: "Repository",
                url: "https://github.com/palantir/gulp-csslint-less-reporter",
                name: "gulp-csslint-less-reporter",
                description:
                  "A console reporter for csslint that maps errors back to the original less files using less source maps.",
                id: "MDEwOlJlcG9zaXRvcnkzNzY4NzQ2MA=="
              },
              {
                __typename: "Repository",
                url: "https://github.com/palantir/typedjsonrpc",
                name: "typedjsonrpc",
                description:
                  "A typed decorator-based JSON-RPC library for Python",
                id: "MDEwOlJlcG9zaXRvcnkzODQ1MDg5NQ=="
              },
              {
                __typename: "Repository",
                url: "https://github.com/palantir/resource-identifier",
                name: "resource-identifier",
                description:
                  "Common resource identifier specification for inter-application object sharing",
                id: "MDEwOlJlcG9zaXRvcnkzOTUzMjE3Mg=="
              },
              {
                __typename: "Repository",
                url: "https://github.com/palantir/nebulous",
                name: "nebulous",
                description: null,
                id: "MDEwOlJlcG9zaXRvcnkzOTY1NDAzNw=="
              },
              {
                __typename: "Repository",
                url: "https://github.com/palantir/gerrit-ci",
                name: "gerrit-ci",
                description:
                  "Plugin for Gerrit enabling self-service continuous integration workflows with Jenkins.",
                id: "MDEwOlJlcG9zaXRvcnkzOTg2Mzc1OQ=="
              }
            ]
          }
        }
      }
    }
  }
]
export const repositoryPageMock = [
  {
    request: {
      query: REPOSITORY_QUERY,
      variables: {
        owner: "palantir",
        name: "Cinch"
      }
    },
    result: {
      data: {
        repository: {
          id: "MDEwOlJlcG9zaXRvcnkyNTE1MTIw",
          name: "Cinch",
          description:
            "A Java library that manages component action/event bindings for MVC patterns",
          pullRequests: {
            totalCount: 3
          },
          issues: {
            totalCount: 5
          },
          forks: {
            totalCount: 16
          },
          stargazerCount: 110
        }
      }
    }
  }
]

export const firstPageMock = {
  data: {
    organization: {
      repositories: {
        pageInfo: {
          endCursor: "Y3Vyc29yOnYyOpHOAXwhnA==",
          startCursor: "Y3Vyc29yOnYyOpHOACVZbg=="
        },
        totalCount: 203,
        repos: [
          {
            url: "https://github.com/palantir/Sysmon",
            name: "Sysmon",
            description: "A lightweight platform monitoring tool for Java VMs"
          },
          {
            url: "https://github.com/palantir/Cinch",
            name: "Cinch",
            description:
              "A Java library that manages component action/event bindings for MVC patterns"
          },
          {
            url: "https://github.com/palantir/gradle-gitsemver",
            name: "gradle-gitsemver",
            description: null
          },
          {
            url: "https://github.com/palantir/eclipse-typescript",
            name: "eclipse-typescript",
            description:
              "An Eclipse plug-in for developing in the TypeScript language."
          },
          {
            url:
              "https://github.com/palantir/backbone-typescript-accessor-generator",
            name: "backbone-typescript-accessor-generator",
            description:
              "Generates Backbone models with typed subclasses for using Backbone.js with TypeScript and its type system."
          },
          {
            url: "https://github.com/palantir/reAddComments",
            name: "reAddComments",
            description:
              "Re-adds comments to generated files from their CoffeeScript source files via their corresponding Source Maps."
          },
          {
            url: "https://github.com/palantir/tslint",
            name: "tslint",
            description:
              ":vertical_traffic_light: An extensible linter for the TypeScript language"
          },
          {
            url: "https://github.com/palantir/grunt-tslint",
            name: "grunt-tslint",
            description: "A Grunt plugin for tslint."
          },
          {
            url: "https://github.com/palantir/eclipse-tslint",
            name: "eclipse-tslint",
            description: "An Eclipse plug-in for linting TypeScript code."
          },
          {
            url: "https://github.com/palantir/stashbot",
            name: "stashbot",
            description:
              "A plugin for Atlassian Stash to allow easy, self-service continuous integration with Jenkins"
          },
          {
            url: "https://github.com/palantir/asana_mailer",
            name: "asana_mailer",
            description:
              "A script that uses Asana's RESTful API to generate plaintext and HTML emails."
          },
          {
            url: "https://github.com/palantir/eclipse-less",
            name: "eclipse-less",
            description: "An Eclipse plug-in for compiling LESS files."
          },
          {
            url: "https://github.com/palantir/plottable",
            name: "plottable",
            description:
              ":bar_chart: A library of modular chart components built on D3"
          },
          {
            url: "https://github.com/palantir/curator-test-rule",
            name: "curator-test-rule",
            description:
              "JUnit TestRule for running tests with ZooKeeperServer and CuratorFrameworks"
          },
          {
            url: "https://github.com/palantir/sqlite3worker",
            name: "sqlite3worker",
            description: "A threadsafe sqlite worker for Python"
          },
          {
            url: "https://github.com/palantir/stash-disapproval-plugin",
            name: "stash-disapproval-plugin",
            description:
              'This is the Disapproval Plugin for Atlassian Stash.  It lets you "nack" a pull request so it will not be merged before you are ready.'
          }
        ]
      }
    }
  }
}
