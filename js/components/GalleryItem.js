import React from 'react'
import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

const Wrapper = styled.View`
  border-radius: 12px;
  height: 150px;
  width: 220px;
  margin-left: 10px;
`

const StyledImageBackground = styled.ImageBackground`
  flex: 1;
  resize-mode: cover;
  flex-direction: column-reverse;
`

const InfoBlock = styled.View`
  height: 60px;
  justify-content: space-evenly;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: #00000099;
  padding: 6px 10px;
`

const InfoText = styled.Text`
  color: white;
  height: 24px;
  font-size: 16px;
  font-weight: bold;
`
const Detail = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`


const GalleryItem = ({ image, name, price, fee, callback = () => {} }) => {
  return (
    <Wrapper>
      <StyledImageBackground
        source={{ uri: image }}
        imageStyle={{ borderRadius: 12 }}
        onPress={callback}
      >
        <InfoBlock>
          <InfoText>{name}</InfoText>
          <Detail>
            <InfoText>
              WIN
              <MaterialIcons name="attach-money" size={16} color="#fff067" />
              {price}
            </InfoText>
            <InfoText>Entry Fee {fee}</InfoText>
          </Detail>
        </InfoBlock>
      </StyledImageBackground>
    </Wrapper>
  )
}

export default GalleryItem
