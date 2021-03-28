import {
  LOGGED_IN_USER, LOGOUT
} from '../constants/auth'

const initialState = {
  userInfo: {},
}

export const authReducer = (state=initialState, action) => {
  switch(action.type){
    case LOGGED_IN_USER:
      return {
        ...state,
        userInfo: action.payload
      } 
    case LOGOUT:
      return {
        userInfo: {}
      }
    default:
      return state    
  }
    
}