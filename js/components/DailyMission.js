import React from 'react'
import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

const Wrapper = styled.View`
  background-color: #333;
  height: 60px;
  border-radius: 30px;
  padding: 20px 14px;
  flex-direction: row;
`
const StyledText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 14px;
`
const ProgressBar = styled.View`
  flex: 1;
  background-color: white;
  border-radius: 10px;
  margin: 0 5px;
  padding: 3px;
`
const Progress = styled.View`
  flex: 1;
  background-color: #3f51b5;
  border-radius: 10px;
  width: ${({ width }) => width};
`

const DailyMission = ({ percentage, onPressGift = () => {} }) => {
  return (
    <Wrapper>
      <StyledText>Daily Missions</StyledText>
      <ProgressBar>
        <Progress width={percentage} />
      </ProgressBar>
      <TouchableOpacity onPress={onPressGift}>
        <MaterialIcons name="card-giftcard" size={20} color="white" />
      </TouchableOpacity>
    </Wrapper>
  )
}

export default DailyMission
