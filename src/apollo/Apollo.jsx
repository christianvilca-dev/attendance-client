import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client'
import App from '../App.jsx'
import { defaults, resolvers } from './resolvers'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql',
  }),
  clientState:{
    defaults,
    resolvers
  },
  request: operation => {
    operation.setContext(context => ({
      headers: {
        ...context.headers,
        authorization: localStorage.getItem('token')
      }
    }));
  },
})

const Apollo = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

export default Apollo
