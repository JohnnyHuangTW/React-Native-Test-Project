import React from 'react'
import styled from 'styled-components/native'

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  align-items: flex-end;
  height: 60px;
`

const StyledTouchableOpacity = styled.TouchableOpacity`
  z-index: 10;
  height: 60px;
  line-height: 60px;
  background-color: #424242;
  flex: 1;
  ${({ isFocused }) =>
    isFocused &&
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
  text-align: center;
  align-self: stretch;
  color: white;
  font-weight: bold;
  line-height: ${({ isFocused }) => (isFocused ? '80px' : '60px')};
`

const TapMenu = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options

  if (focusedOptions.tabBarVisible === false) {
    return null
  }

  return (
    <Wrapper>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key
          })
        }

        return (
          <StyledTouchableOpacity
            activeOpacity="1"
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
          >
            <StyledText>{label}</StyledText>
          </StyledTouchableOpacity>
        )
      })}
    </Wrapper>
  )
}

export default TapMenu
