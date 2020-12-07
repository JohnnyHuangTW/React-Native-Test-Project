import { createSlice } from '@reduxjs/toolkit'
import { DataService, Keys } from '../services/dataService'

const { USER_PROFILE } = Keys

// Slice
const profileSlice = createSlice({
  name: 'profile',
  initialState: {},
  reducers: {
    setProfile: (state, action) => {
      state = {...action.payload}
    },
    setAge: (state, action) => {
      state.age = action.payload
    }
  }
})

const { actions, reducer } = profileSlice

// Actions
export const { setProfile, setAge } = actions
export const saveProfileAge = age => async (dispatch, getState) => {
  try {
      dispatch(setAge(age))
      const profile = getState().profile
      DataService.saveData(USER_PROFILE, profile)
  } catch (error) {
    return console.error(error)
  }
}

export default reducer
