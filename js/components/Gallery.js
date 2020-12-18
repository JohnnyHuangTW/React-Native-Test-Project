import React from 'react'
import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

import GalleryItem from './GalleryItem'

const Container = styled.View`
  border-radius: 12px;
  width: 100%;
  padding: 10px 0;
`

const Header = styled.View`
  padding: 0 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 24px;
`

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`

const GalleryScrollView = styled.ScrollView`
  padding: 10px 0;
`

const Gallery = ({ title, gameList, onPressMoreInfo }) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Feather name="more-horizontal" size={24} color="black" onPress={onPressMoreInfo} />
      </Header>

      <GalleryScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {gameList.map((game, index) => (
          <GalleryItem key={index} {...game} />
        ))}
      </GalleryScrollView>
    </Container>
  )
}

export default Gallery
