import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import { FontAwesome5 } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'

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

const CategoryContainer = styled.View`
  padding-bottom: 10px;
`

const CategoryItemWrapper = styled.TouchableHighlight`
  padding: 10px;
  border-radius: 50px;
  margin-left: 5px;
  min-width: 80px;
  background-color: ${({ selected }) => (selected ? 'purple' : '#000')};
`

const CategoryContent = styled.Text`
  text-align: center;
  color: #fff;
`
const GalleryContainer = styled.View`
  flex: 1;
  width: 100%;
`

const Filter = ({ onFilterChange = () => {}, categoryList, children }) => {
  const [searchValue, setSearchValue] = useState('')
  const [selected, setSelected] = useState([])

  useEffect(() => {
    onFilterChange({
      searchText: searchValue,
      selectedCategory: selected
    })
  }, [searchValue, selected])

  const onCategorySelectedHandler = cat => {
    if (selected.includes(cat)) setSelected(selected.filter(category => category !== cat))
    else setSelected([...selected, cat])
  }

  return (
    <React.Fragment>
      {/* Search Filter */}
      <SearchFilterContainer>
        <SearchBarWrapper>
          <SearchBar
            placeholder="Search"
            value={searchValue}
            onChange={event => setSearchValue(event.nativeEvent.text)}
          />
          <SearchIconWrapper onPress={() => {}}>
            <FontAwesome5 name="search" color="#000" size={18} />
          </SearchIconWrapper>
        </SearchBarWrapper>
        <FilterIconWrapper>
          <FontAwesome5 name="bars" color="#000" size={18} />
        </FilterIconWrapper>
      </SearchFilterContainer>

      {/* Cateogories */}
      <CategoryContainer>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 10 }}
        >
          {categoryList.map((category, index) => (
            <CategoryItemWrapper
              key={index}
              onPress={() => onCategorySelectedHandler(category.value)}
              selected={selected.includes(category.value)}
            >
              <CategoryContent>{category.value}</CategoryContent>
            </CategoryItemWrapper>
          ))}
        </ScrollView>
      </CategoryContainer>

      {/* Gallery */}
      <GalleryContainer>{children}</GalleryContainer>
    </React.Fragment>
  )
}

export default Filter
