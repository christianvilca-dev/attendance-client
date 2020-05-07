import React, { useState } from 'react'
import { TextField } from '@material-ui/core';
import { useMutation } from '@apollo/client';
import { AUTENTICAR_USUARIO } from '../../apollo/mutations';

const authentication = (e, validateUser) => {
  e.preventDefault()
  const form = e.target[0].value
  //console.log(form)
  //console.log(form.email.value)
  //console.log(validateUser)

  const data = {
    /* "usuario": form.email.value,
    "password": form.password.value */
    "usuario": e.target[0].value,
    "password": e.target[1].value
  }

  validateUser({ variables: data }).then(async ({ data }) => {
    console.log(data.validateUser.token);

    localStorage.setItem('token', data.validateUser.token)

    // Ejecutar el query una vez que se haya iniciado sesion
    //await props.refetch()

    //this.limpiarState()

    // redireccionar
    setTimeout(() => {
      window.location = "/confirmantes"
      //this.props.history.push('/panel')
    }, 500);
  });
}

const Login = () => {

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [validateUser, { error }] = useMutation(AUTENTICAR_USUARIO);

  return (
    <div>
      <form onSubmit={(e) => authentication(e, validateUser)}>
        {error && `${error}` }
        <div><TextField label="email" size="small" value={userEmail} onChange={e => setUserEmail(e.target.value)}/></div>
        <div><TextField label="Contraseña"  value={userPassword} onChange={e => setUserPassword(e.target.value)}/></div>
        <input type="submit" value="Iniciar sesion"/>
      </form>
    </div>
  )
}

export default Login

