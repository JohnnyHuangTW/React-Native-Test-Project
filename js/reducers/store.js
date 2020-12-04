import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
// reducers
import profileReducer from './profileReducer'

const rootReducer = combineReducers({
  // add all the reducers here
  profile: profileReducer
})


const store = configureStore({
  reducer: rootReducer
})

export default store
