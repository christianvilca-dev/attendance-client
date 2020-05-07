import {GET_ALL_CONFIRMANTES, GET_CONFIRMANTE, GET_ALL_GROUPS, GET_GROUP, GET_ALL_ATTENDANCES, GET_ATTENDANCE, GET_ALL_CATEQUISTAS, GET_CATEQUISTA} from "./actions"

export const confirmanteReducer = (state = {}, action) => {
  if (action.type === GET_ALL_CONFIRMANTES) {
    return {
      ...state,
      confirmantes: action.confirmantes
    }
  }

  if (action.type === GET_CONFIRMANTE) {
    return {
      ...state,
      confirmante: action.confirmante
    }
  }
  return state
}

export const groupReducer = (state = {}, action) => {
  if (action.type === GET_ALL_GROUPS) {
    return {
      ...state,
      groups: action.groups
    }
  }

  if (action.type === GET_GROUP) {
    return {
      ...state,
      group: action.group
    }
  }
  return state
}

export const attendanceReducer = (state = {}, action) => {
  if (action.type === GET_ALL_ATTENDANCES) {
    return {
      ...state,
      attendances: action.attendances
    }
  }

  if (action.type === GET_ATTENDANCE) {
    return {
      ...state,
      attendance: action.attendance
    }
  }
  return state
}

export const catequistaReducer = (state = {}, action) => {
  if (action.type === GET_ALL_CATEQUISTAS) {
    return {
      ...state,
      catequistas: action.catequistas
    }
  }

  if (action.type === GET_CATEQUISTA) {
    return {
      ...state,
      catequista: action.catequista
    }
  }
  return state
}

