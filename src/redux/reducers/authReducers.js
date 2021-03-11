import {
  LOGGED_IN_USER, LOGOUT
} from '../constants/auth'

const initialState = {
  
}

export const authReducer = (state=initialState, action) => {
  switch(action.type){
    case LOGGED_IN_USER:
      return {
        ...state,
      } 
    case LOGOUT:
      return {
        ...state,
      }
    default:
      return state    
  }
    
}