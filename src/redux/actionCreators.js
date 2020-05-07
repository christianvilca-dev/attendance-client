import axios from 'axios'
import {
  GET_ALL_CONFIRMANTES,
  GET_ALL_GROUPS,
  GET_ALL_ATTENDANCES,
  GET_ALL_CATEQUISTAS,
  GET_CONFIRMANTE,
  GET_GROUP,
  GET_CATEQUISTA,
  GET_ATTENDANCE
} from "./actions"

const API_URL = process.env.REACT_APP_URL_API

export const getAllConfirmantes = () => dispatch => {
  axios.get(`${API_URL}/confirmantes`)
  .then(
    resp => {
      return dispatch({
        type: GET_ALL_CONFIRMANTES,
        confirmantes: resp.data
      })
    }
  )
}

export const getAllGroups = () => dispatch => {
  axios.get(`${API_URL}/groups`)
  .then(
    resp => {
      return dispatch({
        type: GET_ALL_GROUPS,
        groups: resp.data
      })
    }
  )
}

export const getAllAttendances = () => dispatch => {
  axios.get(`${API_URL}/attendances`)
  .then(
    resp => {
      return dispatch({
        type: GET_ALL_ATTENDANCES,
        attendances: resp.data
      })
    }
  )
}

export const getAllCatequistas = () => dispatch => {
  axios.get(`${API_URL}/catequistas`)
  .then(
    resp => {
      return dispatch({
        type: GET_ALL_CATEQUISTAS,
        catequistas: resp.data
      })
    }
  )
}

export const getConfirmante = id => dispatch => {
  axios.get(`${API_URL}/confirmantes/${id}`)
  .then(
    resp => {
      return dispatch({
        type: GET_CONFIRMANTE,
        confirmante: resp.data
      })
    }
  )
}

export const getGroup = id => dispatch => {
  axios.get(`${API_URL}/groups/${id}`)
  .then(
    resp => {
      return dispatch({
        type: GET_GROUP,
        group: resp.data
      })
    }
  )
}

export const getAttendance = id => dispatch => {
  axios.get(`${API_URL}/attendances/${id}`)
  .then(
    resp => {
      return dispatch({
        type: GET_ATTENDANCE,
        attendance: resp.data
      })
    }
  )
}

export const getCatequista = id => dispatch => {
  axios.get(`${API_URL}/catequistas/${id}`)
  .then(
    resp => {
      return dispatch({
        type: GET_CATEQUISTA,
        catequista: resp.data
      })
    }
  )
}


