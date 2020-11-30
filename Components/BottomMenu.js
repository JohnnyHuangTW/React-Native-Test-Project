import React, { useState } from 'react'
import styled from 'styled-components/native'

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  align-items: flex-end;
  height: 60px;
`
const Item = styled.TouchableOpacity`
  height: 60px;
  line-height: 60px;
  text-align: center;
  background-color: #424242;
  flex: 1;
  ${({ active }) =>
    active &&
    `
      flex: 1.5;
      height: 80px;
      line-height: 80px;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
    `}
`

const StyledText = styled.Text`
  font-size: 18px;
  color: white;
  font-weight: bold;
  line-height: ${({ active }) => (active ? '80px' : '60px')};
`

const BottomMenu = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <Wrapper>
      {Array(5)
        .fill({})
        .map((_, index) => (
          <Item key={index} active={currentIndex === index} onPress={() => setCurrentIndex(index)}>
            <StyledText active={currentIndex === index}>Item {index + 1}</StyledText>
          </Item>
        ))}
    </Wrapper>
  )
}

// const styles = StyleSheet.create({
//   itemText: {
//     fontSize: '18px',
//     color: 'white',
//     fontWeight: 'bold'
//   }
// })

export default BottomMenu
