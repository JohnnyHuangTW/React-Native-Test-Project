import React from 'react'
import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TokenItem from '../components/TokenItem'
import { ScrollView } from 'react-native-gesture-handler'
import Filter from '../components/Filter'
import GameInfoCard from '../components/GameInfoCard'

const ThumbContainer = styled.View`
  flex: 1;
  width: 100%;
  background-color: white;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`

const TokenBarWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0;
  padding: 0 18px;
`
const GalleryContainer = styled.View`
  padding: 10px 10px;
`

const categoryList = [
  {
    value: 'Action'
  },
  {
    value: 'Adventure'
  },
  {
    value: 'Board'
  },
  {
    value: 'Card'
  },
  {
    value: 'Casino'
  },
  {
    value: 'Casual'
  },
  {
    value: 'Dice'
  },
  {
    value: 'Music'
  },
  {
    value: 'Puzzle'
  },
  {
    value: 'Racing'
  }
]

const gameList = [
  {
    image: 'https://picsum.photos/220/150?random=1',
    name: 'Game1 Name',
    price: 1.2,
    fee: 1,
    callback: () => {}
  },
  {
    image: 'https://picsum.photos/220/150?random=2',
    name: 'Game2 Name',
    price: 5,
    fee: 1,
    callback: () => {}
  },
  {
    image: 'https://picsum.photos/220/150?random=3',
    name: 'Game3 Name',
    price: 1.7,
    fee: 1,
    callback: () => {}
  },
  {
    image: 'https://picsum.photos/220/150?random=4',
    name: 'Game4 Name',
    price: 17,
    fee: 10,
    callback: () => {}
  },
  {
    image: 'https://picsum.photos/220/150?random=5',
    name: 'Game3 Name',
    price: 16,
    fee: 1,
    callback: () => {}
  },
  {
    image: 'https://picsum.photos/220/150?random=6',
    name: 'Game4 Name',
    price: 3.2,
    fee: 10,
    callback: () => {}
  }
]

const Tab2Component = () => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: '#34166C' }}>
      <TokenBarWrapper>
        <TokenItem color="#ffc107" callback={() => {}} />
        <TokenItem color="#4dd0e1" callback={() => {}} />
        <TokenItem color="#81c784" callback={() => {}} />
      </TokenBarWrapper>

      <ThumbContainer>
        <Filter categoryList={categoryList}>
          <GalleryContainer>
            <ScrollView
              contentContainerStyle={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
              }}
            >
              {gameList.map((game, index) => (
                <GameInfoCard key={index} {...game} />
              ))}
            </ScrollView>
          </GalleryContainer>
        </Filter>
      </ThumbContainer>
    </SafeAreaView>
  )
}

export default Tab2Component
