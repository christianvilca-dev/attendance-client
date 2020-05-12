import React from 'react';
import Spinner from '../Atoms/Spinner.jsx'
import { useQuery } from '@apollo/client';

export default ({ children, ...props }) => {
  const { query, ...rest } = props;
  const { loading, error, data } = useQuery( query, { ...rest } );

  if (loading) return <Spinner />;
  if (error) return `Error! ${error.message}`;

  return children(data);
}
