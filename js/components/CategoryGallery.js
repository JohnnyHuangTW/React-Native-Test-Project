import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

import CategoryGalleryItem from './CategoryGalleryItem'

const Container = styled.View`
  padding: 10px 10px;
`

const CategoryGallery = ({ gameList }) => {
  return (
    <Container>
      <ScrollView
        contentContainerStyle={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}
      >
        {gameList.map((game, index) => (
          <CategoryGalleryItem key={index} {...game} />
        ))}
      </ScrollView>
    </Container>
  )
}

export default CategoryGallery
