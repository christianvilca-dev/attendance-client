import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import Session from '../Molecules/Session.jsx';
import { useQuery } from '@apollo/react-hooks' // '@apollo/client';
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

const Protected = ({ component: Component, ...rest }) => {

  const userLogged = localStorage.getItem('token')

  const { loading, error, data } = useQuery( USUARIO_ACTUAL );
  console.log("data: ", data)

  if (loading) return null;
  if (error) return `Error! ${error.message}`;

  /* console.log("session: ", Session())
  const { getUser } = Session
  console.log("getUser: ", getUser) */

  if ( !userLogged ) {
    /* if (getUser.roles.includes("MASTER")) { return <Redirect to="/intitutions" /> } else
    if (getUser.roles.includes("INSTITUTION")) { return <Redirect to="/managers" /> } else
    if (getUser.roles.includes("MANAGER" )) { return <Redirect to="/catequesisList" /> } else
    if (getUser.roles.includes("CATEQUISTA")) { return <Redirect to="/catequesis" /> } else */
    return <Redirect to="/login" />
  }

  /* return <Route {...rest} render={() => <Component session={Session} /> } /> */
  return <Route {...rest} render={Component} />
}

/* const Protected = Session(Comp)

export { Protected } */

export default Protected

