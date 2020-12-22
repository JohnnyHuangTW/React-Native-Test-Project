import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import CategoryItem from './CategoryItem'

const Container = styled.View`
  margin-left: 10px;
`

const Category = ({ categoryList }) => {
  return (
    <Container>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {categoryList.map((category, index) => (
          <CategoryItem key={index} {...category} />
        ))}
      </ScrollView>
    </Container>
  )
}

export default Category
