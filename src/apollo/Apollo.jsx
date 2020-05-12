import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider} from '@apollo/react-hooks'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
//import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client'
import App from '../App.jsx'
import AppRoutes from '../AppRoutes.jsx'
import { defaults, resolvers } from './resolvers'

const client = new ApolloClient({
  /* cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql',
  }),
  clientState:{
    defaults,
    resolvers
  }, */
  uri: "http://localhost:4000/graphql",
  request: operation => {
    operation.setContext(context => ({
      headers: {
        ...context.headers,
        authorization: localStorage.getItem('token')
      }
    }));
  },
  cache: new InMemoryCache({
    addTypename: false
  }),
})

const Apollo = () => (
  <ApolloProvider client={client}>
  <ApolloHooksProvider client={client}>
    <App />
  </ApolloHooksProvider>
  </ApolloProvider>
)

export default Apollo
