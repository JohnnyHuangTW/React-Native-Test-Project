import React from 'react'
import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'
import { Text } from 'react-native'

const Wrapper = styled.View`
  border-radius: 12px;
  min-height: 250px;
  width: 50%;
  padding: 5px 10px;
`

const StyledImageBackground = styled.ImageBackground`
  flex: 1;
  flex-direction: column-reverse;
`

const InfoBlock = styled.View`
  height: 100px;
  justify-content: space-evenly;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: #00000099;
  padding: 6px 10px;
`

const InfoText = styled.Text`
  color: white;
  height: 25px;
  font-size: 16px;
  font-weight: bold;
`
const Detail = styled.View`
  flex-direction: column;
`

const InfoFeeText = styled.Text`
  color: #b8b7ba;
  height: 25px;
  font-size: 12px;
  font-weight: bold;
`

const CategoryGalleryItem = ({ image, name, price, fee, callback = () => {} }) => {
  return (
    <Wrapper>
      <StyledImageBackground
        source={{ uri: image }}
        imageStyle={{ borderRadius: 12, resizeMode: 'cover' }}
        onPress={callback}
      >
        <InfoBlock>
          <Detail>
            <InfoText>{name}</InfoText>
            <InfoText>
              WIN
              <MaterialIcons name="attach-money" size={16} color="#fff067" />
              {price}
            </InfoText>
          </Detail>
          <InfoFeeText>
            Entry Fee <Text style={{ color: 'white' }}>{fee}</Text>
          </InfoFeeText>
        </InfoBlock>
      </StyledImageBackground>
    </Wrapper>
  )
}

export default CategoryGalleryItem
