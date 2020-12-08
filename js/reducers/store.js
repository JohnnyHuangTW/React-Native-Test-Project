import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
// reducers
import profileReducer from './profileReducer'
import bottomSheetReducer from './bottomSheetReducer'

const rootReducer = combineReducers({
  // add all the reducers here
  profile: profileReducer,
  bottomSheet: bottomSheetReducer
})


const store = configureStore({
  reducer: rootReducer
})

export default store
