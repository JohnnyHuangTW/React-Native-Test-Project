import React from 'react'
import { Text } from 'react-native'
// Redux setup
import { Provider } from 'react-redux'
import store from './js/reducers/store'
// SafeArea setup
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
// Navigator setup
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
// Device info
import * as Device from 'expo-device'

// components
import TabMenu from './js/components/TapMenu'
import Tab1Component from './js/screens/Tab1Component'
import Tab2Component from './js/screens/Tab2Component'

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
    <Provider store={store}>
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
    </Provider>
  )
}
