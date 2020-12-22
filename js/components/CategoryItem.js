import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

const Wrapper = styled.View`
  padding: 10px;
  background-color: #000;
  border-radius: 50px;
  margin-left: 5px;
  min-width: 80px;
`

const Content = styled.Text`
  text-align: center;
  color: #fff;
`

const CategoryItem = ({ value, callback = () => {} }) => {
  return (
    <Wrapper>
      <TouchableOpacity onPress={callback}>
        <Content>{value}</Content>
      </TouchableOpacity>
    </Wrapper>
  )
}

export default CategoryItem
