import React from 'react'
import styled from 'styled-components/native'
import { FontAwesome5 } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

const Wrapper = styled.View`
  background-color: #333;
  width: 32%;
  height: 30px;
  padding: 3px;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 15px;
`
const RoundIcon = styled.View`
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  border: 1px solid ${({ color }) => color};
  border-radius: ${({ size }) => size}px;
  padding: 1px;
  position: relative;
`
const StyledText = styled.Text`
  flex: 1;
  text-align: right;
  font-weight: bold;
  font-size: 15px;
  letter-spacing: -1px;
  padding: 3px;
  color: white;
`

const TokenItem = ({ color = '#ffee58', callback }) => {
  return (
    <Wrapper>
      <RoundIcon color={color} size={24}>
        <FontAwesome5
          name="dollar-sign"
          color={color}
          size={18}
          style={{ position: 'relative', left: 5 }}
        />
      </RoundIcon>
      <StyledText style={{ marginRight: callback ? 2 : 10 }}>99,999</StyledText>
      {callback && (
        <RoundIcon color={color} size={22} style={{ borderStyle: 'dashed' }}>
          <TouchableOpacity onPress={callback}>
            <FontAwesome5
              name="plus"
              color={color}
              size={14}
              style={{ position: 'relative', left: 3, bottom: -2 }}
            />
          </TouchableOpacity>
        </RoundIcon>
      )}
    </Wrapper>
  )
}

export default TokenItem
