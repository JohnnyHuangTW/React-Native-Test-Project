import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'

const Tab2Component = () => {
  const { age } = useSelector(state => state.profile)
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', margin: 12 }}>
      <Text>Your age is {age}</Text>
    </SafeAreaView>
  )
}

export default Tab2Component
