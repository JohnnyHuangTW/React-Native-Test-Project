import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
import { Text } from 'react-native'

// Slice
const bottomSheetSlice = createSlice({
  name: 'bottomSheet',
  initialState: {
    visible: false,
    modelName: ''
  },
  reducers: {
    setVisible: (state, action) => {
      state.visible = action.payload
    },
    setModelName: (state, action) => {
      state.modelName = action.payload
    }
  }
})

const { actions, reducer } = bottomSheetSlice

// Actions
const { setVisible, setModelName } = actions
export const showBottomSheet = name => async dispatch => {
  try {
    dispatch(setModelName(name))
    dispatch(setVisible(true))
  } catch (error) {
    return console.error(error)
  }
}
export const hideBottomSheet = () => async dispatch => {
  dispatch(setVisible(false))
}

export default reducer
