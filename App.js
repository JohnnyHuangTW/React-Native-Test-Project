import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Device from 'expo-device'

// components
import Footer from './Components/Footer'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        {Device.manufacturer} : {Device.modelName}
      </Text>
      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
