import React, { useState } from 'react'
import { ScrollView, Dimensions, StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux'
// Reducers
import { saveProfileAge } from '../reducers/profileReducer'
// Components
import Gallery from '../components/Gallery'
import DailyMission from '../components/DailyMission'
import TokenItem from '../components/TokenItem'

const ImageBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
`

const ImageHeader = styled.View`
  height: 200px;
  background-color: transparent;
`

const ThumbContainer = styled.View`
  flex: 1;
  width: 100%;
  background-color: white;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`

const TokenBarWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0;
  padding: 0 18px;
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
  const windowWidth = Math.round(Dimensions.get('window').width)
  const backgroundImageSrc = { url: `https://picsum.photos/${windowWidth}/400?random=1` }

  const dispatch = useDispatch()
  const [age, setAge] = useState('')

  const save = () => {
    dispatch(saveProfileAge(age))
  }

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <ImageBackground
        source={backgroundImageSrc}
        imageStyle={{
          height: 400,
          width: windowWidth,
          resizeMode: 'cover'
        }}
      >
        {/* Tokens */}
        <TokenBarWrapper>
          <TokenItem color="#ffc107" callback={() => {}} />
          <TokenItem color="#4dd0e1" callback={() => {}} />
          <TokenItem color="#81c784" callback={() => {}} />
        </TokenBarWrapper>

        <ImageHeader />

        <ThumbContainer style={styles.shadow}>
          {/* Daily Missions */}
          <DailyMissionWrapper>
            <DailyMission percentage={'80%'} onPressGift={() => console.log('gift onPress')} />
          </DailyMissionWrapper>
          <ScrollView style={{ flex: 1 }}>
            {/* Gallery Lists */}
            <GalleryWrapper>
              <Gallery title="Recently Played" gameList={gameList} />
            </GalleryWrapper>
            <GalleryWrapper>
              <Gallery title="Related to Games You've Played" gameList={gameList} />
            </GalleryWrapper>
          </ScrollView>
        </ThumbContainer>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Tab1Component

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -6 },
    shadowRadius: 5,
    shadowOpacity: 0.1
  }
})
