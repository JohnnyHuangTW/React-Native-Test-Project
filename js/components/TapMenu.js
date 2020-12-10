import React from 'react'
import styled from 'styled-components/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { MaterialIcons } from '@expo/vector-icons'

const mapIcon = {
  ACCOUNT: 'person',
  GAMES: 'videogame-asset',
  HOME: 'home',
  NEWS: 'send',
  OPTIONS: 'format-list-bulleted'
}

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  align-items: flex-end;
  height: ${({insetBottom}) => 65 - insetBottom}px;
`

const StyledTouchableOpacity = styled.TouchableOpacity`
  flex: 1;
  z-index: 10;
  height: 65px;
  align-items: center;
  background-color: #424242;
  padding: 10px 5px ${({ insetBottom }) => insetBottom}px 5px;
  ${({ isFocused }) =>
    isFocused &&
    `
      flex: 1.5;
      height: 75px;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
    `}
`
const StyledText = styled.Text`
  font-size: ${({ isFocused }) => (isFocused ? 10 : 6)}px;
  text-align: center;
  align-self: stretch;
  color: white;
  font-weight: bold;
  margin-top: 5px;
`

const TapMenu = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options
  const insetBottom = useSafeAreaInsets().bottom

  if (focusedOptions.tabBarVisible === false) {
    return null
  }

  return (
    <Wrapper insetBottom={insetBottom}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const icon = mapIcon[label] || 'error'

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
            key={index}
            activeOpacity="1"
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            insetBottom={insetBottom}
          >
            <MaterialIcons
              name={icon}
              color={isFocused ? '#90caf9' : 'white'}
              size={isFocused ? 28 : 24}
            />
            <StyledText isFocused={isFocused}>{label}</StyledText>
          </StyledTouchableOpacity>
        )
      })}
    </Wrapper>
  )
}

export default TapMenu
