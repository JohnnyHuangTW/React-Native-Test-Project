import React, { useState } from 'react'
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
  flex: 1;
  padding: 10px 10px;
`

const NotFoundContainer = styled.View`
  flex: 1;
  margin: auto;
  align-items: center;
  max-width: 400px;
  width: 100%;
`

const NotFoundImage = styled.Image`
  width: 60%;
  height: 400px;
  align-content: center;
`

const NotFoundContent = styled.Text`
  color: purple;
  font-size: 30px;
  font-weight: 900;
  text-shadow: 2px 2px #fff;
`

const sampleGameList = [
  {
    image: 'https://picsum.photos/220/150?random=1',
    name: 'Game1 Name',
    price: 1.2,
    fee: 1,
    category: ['Action'],
    callback: () => {}
  },
  {
    image: 'https://picsum.photos/220/150?random=2',
    name: 'Game2 Name',
    price: 5,
    fee: 1,
    category: ['Card', 'Puzzle'],
    callback: () => {}
  },
  {
    image: 'https://picsum.photos/220/150?random=3',
    name: 'Game3 Name',
    price: 1.7,
    fee: 1,
    category: ['Racing'],
    callback: () => {}
  },
  {
    image: 'https://picsum.photos/220/150?random=4',
    name: 'Game4 Name',
    price: 17,
    fee: 10,
    category: ['Dice', 'Puzzle'],
    callback: () => {}
  },
  {
    image: 'https://picsum.photos/220/150?random=5',
    name: 'Game3 Name',
    price: 16,
    fee: 1,
    category: ['Action'],
    callback: () => {}
  },
  {
    image: 'https://picsum.photos/220/150?random=6',
    name: 'Game4 Name',
    price: 3.2,
    fee: 10,
    category: ['Board', 'Puzzle'],
    callback: () => {}
  }
]

const sampleCategoryList = [
  {
    value: 'Action',
    selected: false
  },
  {
    value: 'Board',
    selected: false
  },
  {
    value: 'Card',
    selected: false
  },
  {
    value: 'Dice',
    selected: false
  },
  {
    value: 'Music',
    selected: false
  },
  {
    value: 'Puzzle',
    selected: false
  },
  {
    value: 'Racing',
    selected: false
  }
]

const Tab2Component = () => {
  const [gameList, setGameList] = useState(sampleGameList)

  const filterChangeHandler = ({ searchText, selectedCategory = [] }) => {
    setGameList(
      sampleGameList.filter(obj => {
        if (!selectedCategory.length)
          return obj.name.toUpperCase().includes(searchText.toUpperCase())
        else
          return (
            obj.name.toUpperCase().includes(searchText.toUpperCase()) &&
            obj.category.some(c => selectedCategory.indexOf(c) >= 0)
          )
      })
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: '#34166C' }}>
      <TokenBarWrapper>
        <TokenItem color="#ffc107" callback={() => {}} />
        <TokenItem color="#4dd0e1" callback={() => {}} />
        <TokenItem color="#81c784" callback={() => {}} />
      </TokenBarWrapper>

      <ThumbContainer>
        <Filter
          onFilterChange={filterChangeHandler}
          onPressSearch={() => {
            alert(value)
          }}
          categoryList={sampleCategoryList}
        >
          <GalleryContainer>
            {gameList && gameList.length > 0 ? (
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
            ) : (
              <NotFoundContainer>
                <NotFoundImage
                  source={{
                    uri:
                      'https://www.nicepng.com/png/full/435-4350235_png-spongebob-mr-krabs-scared-1-by-supercaptainn.png'
                  }}
                  resizeMode="contain"
                />
                <NotFoundContent>No Game Available</NotFoundContent>
              </NotFoundContainer>
            )}
          </GalleryContainer>
        </Filter>
      </ThumbContainer>
    </SafeAreaView>
  )
}

export default Tab2Component
