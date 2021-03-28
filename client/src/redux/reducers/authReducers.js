import {
  LOGGED_IN_USER, LOGOUT
} from '../constants/auth'

const initialState = {
  auth: '',
}

export const authReducer = (state=initialState, action) => {
  switch(action.type){
    case LOGGED_IN_USER:
      return {
        ...state,
        auth: action.payload
      } 
    case LOGOUT:
      return {
        ...state,
      }
    default:
      return state    
  }
    
}