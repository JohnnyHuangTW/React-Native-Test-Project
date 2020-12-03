import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DataService, Keys } from '../services/dataService'

const Tab2Component = () => {
  const [age, setAge] = useState('')
  useEffect(() => {
    DataService.getData(Keys.USER_PROFILE).then(setAge)
  })
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', margin: 12 }}>
      <Text>Your age is {age}</Text>
    </SafeAreaView>
  )
}

export default Tab2Component
