import { configureStore } from '@reduxjs/toolkit'
// reducers
import profile from './profileModel'



const store = configureStore({
  reducer: {
    // adding all the reducers
    profile
  }
})

export default store
