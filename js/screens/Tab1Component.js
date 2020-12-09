import React, { useState } from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux'
// Reducers
import { saveProfileAge } from '../reducers/profileReducer'
// Components
import Gallery from '../components/Gallery'
import DailyMission from '../components/DailyMission'

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

const DailyMissionWrapper = styled.View`
  width: 100%;
  margin: 20px 0;
  padding: 0 18px;
`

const GalleryWrapper = styled.View`
  width: 100%;
`

const gameList = [
  {
    image: 'https://picsum.photos/220/150?random=1',
    name: 'Game1 Name',
    price: 1.2,
    fee: 1,
    callback: () => {}
  },
  {
    image: 'https://picsum.photos/220/150?random=2',
    name: 'Game2 Name',
    price: 5,
    fee: 1,
    callback: () => {}
  },
  {
    image: 'https://picsum.photos/220/150?random=3',
    name: 'Game3 Name',
    price: 1.7,
    fee: 1,
    callback: () => {}
  },
  {
    image: 'https://picsum.photos/220/150?random=4',
    name: 'Game4 Name',
    price: 17,
    fee: 10,
    callback: () => {}
  }
]

const Tab1Component = () => {
  const dispatch = useDispatch()
  const [age, setAge] = useState('')

  const save = () => {
    dispatch(saveProfileAge(age))
  }

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <Text>Enter your age</Text>
      <StyledTextInput onChangeText={setAge} value={age} />
      <Button title="Save" onPress={save} />

      <DailyMissionWrapper>
        <DailyMission
          percentage={'80%'}
          onPressGift={() => console.log('gift onPress')}
        />
      </DailyMissionWrapper>

      <GalleryWrapper>
        <Gallery title="Sample Title" gameList={gameList} />
      </GalleryWrapper>
    </SafeAreaView>
  )
}

export default Tab1Component
