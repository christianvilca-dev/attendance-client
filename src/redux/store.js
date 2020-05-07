import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {
  confirmanteReducer,
  attendanceReducer,
  groupReducer,
  catequistaReducer
} from './reducers'


export default createStore(
  combineReducers({
    confirmanteReducer,
    attendanceReducer,
    groupReducer,
    catequistaReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)
