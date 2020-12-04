import { createSlice } from '@reduxjs/toolkit'
import { DataService, Keys } from '../services/dataService'

const { USER_PROFILE } = Keys

// Slice
const profileSlice = createSlice({
  name: 'profile',
  initialState: {},
  reducers: {
    setProfile: (state, action) => {
      state = action.payload
    },
    setAge: (state, action) => {
      state.age = action.payload
    }
  }
})

export default profileSlice.reducer

// Actions
export const { setProfile, setAge } = profileSlice.actions
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

