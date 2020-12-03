import { createSlice } from '@reduxjs/toolkit'
import { DataService, Keys } from '../services/dataService'

const { USER_PROFILE } = Keys

// Slice
const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: {}
  },
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload
    },
    setAge: (state, action) => {
      state.profile.age = action.payload
    }
  }
})

export default profileSlice.reducer

// Actions
const { setProfile, setAge } = profileSlice.actions

export const getProfile = () => async dispatch => {
  try {
    // call api
    DataService.getData(USER_PROFILE).then(data => {
      console.log('get profile', data)
      if (data) dispatch(setProfile({ payload: data }))
    })
  } catch (e) {
    return console.error(e)
  }
}

export const setProfileAge = age => async dispatch => {
  try {
    dispatch(setAge(age))
  } catch (e) {
    return console.error(e)
  }
}
