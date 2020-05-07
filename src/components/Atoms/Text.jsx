import React from 'react'
import TextField from '@material-ui/core/TextField'

const Text = ({placeholder, field}) => {
  return (
    <TextField placeholder={placeholder} {...field}>

    </TextField>

  )
}

export default Text

