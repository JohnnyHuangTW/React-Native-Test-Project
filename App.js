import React from 'react'
import { Text } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import * as Device from 'expo-device'

// components
import TabMenu from './Components/TapMenu'
import Tab1Component from './Components/Tab1Component'
import Tab2Component from './Components/Tab2Component'

const Demo = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
      <Text>This is top text.</Text>
      <Text>This is bottom text.</Text>
    </SafeAreaView>
  )
}

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Tab1" tabBar={props => <TabMenu {...props} />}>
          <Tab.Screen name="Tab1" component={Tab1Component} />
          <Tab.Screen name="Tab2" component={Tab2Component} />
          <Tab.Screen name="Tab3" component={Demo} />
          <Tab.Screen name="Tab4" component={Demo} />
          <Tab.Screen name="Tab5" component={Demo} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
