import React, { useState } from 'react'
import styled from 'styled-components'
import { Text, StyleSheet } from 'react-native'

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  bottom: 0;
  width: 100%;
  justify-content: space-evenly;
  align-items: flex-end;
`
const Item = styled.div`
  height: 60%;
  line-height: 60px;
  text-align: center;
  background-color: #424242;
  flex: 1;
  cursor: pointer;
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

const Footer = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <Wrapper>
      {Array(5)
        .fill({})
        .map((_, index) => (
          <Item active={currentIndex === index} onClick={() => setCurrentIndex(index)}>
            <Text style={styles.itemText}>Item {index + 1}</Text>
          </Item>
        ))}
    </Wrapper>
  )
}

const styles = StyleSheet.create({
  itemText: {
    fontSize: '18px',
    color: 'white',
    fontWeight: 'bold'
  }
})

export default Footer
