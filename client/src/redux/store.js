import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import {rootReducer} from './reducers'


const userInfoFromStorage = localStorage.getItem('auth') 
? {userInfo:JSON.parse(localStorage.getItem('auth'))} : {userInfo: {}}

const initialState = {
  auth: userInfoFromStorage
}

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools()
  
)