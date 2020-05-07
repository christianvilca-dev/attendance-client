import React from 'react';
import { Query } from 'react-apollo';
import Spinner from './Spinner.jsx'
import { gql, useQuery } from '@apollo/client';

/* ({ children, ...props }) => (
  <Query {...props}>
    {({ loading, error, data }) => {
      if (loading) { return <Spinner />; }
      if (error) return `Error!: ${error}`;
      return children(data);
    }}
  </Query>
);
 */
export default ({ children, ...props }) => {
  const { loading, error, data } = useQuery(...props);

  if (loading) return <Spinner />;
  if (error) return `Error! ${error.message}`;

  return children(data);
}
