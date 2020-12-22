import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import { FontAwesome5 } from '@expo/vector-icons'
import TokenItem from '../components/TokenItem'
import CategoryItem from '../components/CategoryItem'
import Category from '../components/Category'
import CategoryGalleryItem from '../components/CategoryGalleryItem'
import CategoryGallery from '../components/CategoryGallery'
import { ScrollView } from 'react-native-gesture-handler'

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

const SearchFilterContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const SearchBarWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-width: 0.5px;
  border-color: #000;
  height: 40px;
  border-radius: 50px;
  margin: 10px 0px 10px 15px;
  flex-grow: 1;
  background-color: #ebe9ea;
`

const SearchBar = styled.TextInput`
  flex: 1;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 0px;
  color: #424242;
  border-color: black;
  margin: 0px 10px;
`

const SearchIconWrapper = styled.TouchableOpacity`
  position: relative;
  right: 13px;
`

const FilterIconWrapper = styled.TouchableOpacity`
  position: relative;
  margin: auto;
  align-items: center;
  width: 50px;
  margin-right: 15px;
`

const CategoryGalleryWrapper = styled.View`
  width: 100%;
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
  const { age } = useSelector(state => state.profile)
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: '#34166C' }}>
      <TokenBarWrapper>
        <TokenItem color="#ffc107" callback={() => {}} />
        <TokenItem color="#4dd0e1" callback={() => {}} />
        <TokenItem color="#81c784" callback={() => {}} />
      </TokenBarWrapper>

      <ThumbContainer>
        {/* Search Filter */}
        <SearchFilterContainer>
          <SearchBarWrapper>
            <SearchBar placeholder="Search" />
            <SearchIconWrapper>
              <FontAwesome5 name="search" color="#000" size={18} />
            </SearchIconWrapper>
          </SearchBarWrapper>
          <FilterIconWrapper>
            <FontAwesome5 name="filter" color="#000" size={18} />
          </FilterIconWrapper>
        </SearchFilterContainer>

        {/* Category Lists */}
        <Category categoryList={categoryList} />

        <ScrollView style={{ flex: 1 }}>
          <CategoryGalleryWrapper>
            <CategoryGallery gameList={gameList} />
          </CategoryGalleryWrapper>
        </ScrollView>
      </ThumbContainer>
    </SafeAreaView>
  )
}

export default Tab2Component
