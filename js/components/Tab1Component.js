import React, { useState } from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux'
import { saveProfileAge } from '../reducers/profileReducer'

const StyledTextInput = styled.TextInput`
  border: 1px solid #000;
  width: 200px;
  margin: 8px;
  padding: 8px;
`

const Button = styled.Button`
  height: 40px;
  width: 80px;
`

const Tab1Component = () => {
  const dispatch = useDispatch()
  const [age, setAge] = useState('')
  const save = () => {
    dispatch(saveProfileAge(age))
  }
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', margin: 12 }}>
      <Text>Enter your age</Text>
      <StyledTextInput onChangeText={setAge} value={age} />
      <Button title="Save" onPress={save} />
    </SafeAreaView>
  )
}

export default Tab1Component
