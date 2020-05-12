import React from 'react';
//import { Query } from 'react-apollo';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const USUARIO_ACTUAL = gql`
	query getUser {
    getUser{
      id
      usuario
      nombre
      roles
    }
  }
`;

/* const Session = (Component) => (props) => {
  console.log("props: ", props)
	return (
		<Query query={USUARIO_ACTUAL}>
			{({ loading, error, data, refetch }) => {
        console.log("data: ", data)
        console.log("refetch: ", refetch)
        if (loading) return null;
				return <Component {...props} refetch={refetch} session={data} />;
			}}
		</Query>
  );
};

export default Session; */
export default () => {

  const { loading, error, data } = useQuery( USUARIO_ACTUAL );
  console.log("data: ", data)

  if (loading) return null;
  if (error) return `Error! ${error.message}`;

  return data // <Component {...props} session={data} />;
};

