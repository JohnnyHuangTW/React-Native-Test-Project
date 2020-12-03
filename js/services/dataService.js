import AsyncStorage from '@react-native-community/async-storage'

export const Keys = {
  USER_PROFILE:'@save_user_profile'
}

export const DataService = {
   saveData: (key, value) => {
    try {
      // transfer all kinds of value into an object
      const jsonData = JSON.stringify({ data: value })
      AsyncStorage.setItem(key, jsonData)
      console.log('Data saved successfully', key, value)
    } catch (error) {
      console.warn(`Failed to save the data to the storage - ${key}`, value, error)
    }
  },
  getData: async (key) => {
    try {
      const jsonData = await AsyncStorage.getItem(key)
      return jsonData !== null ? JSON.parse(jsonData).data : null
    } catch (error) {
      console.warn(`Failed to fetch the data from storage - ${key}`, error)
    }
  },
  removeData: (key) => {
    try {
      AsyncStorage.removeItem(key)
    } catch (error) {
      console.warn(`Failed to remove the data from storage - ${key}`, error)
    }
  },
  clear: async () => {
    try {
      await AsyncStorage.clear()
      console.log('Storage successfully cleared')
    } catch (error) {
      console.warn('Failed to clear the async storage')
    }
  }
}