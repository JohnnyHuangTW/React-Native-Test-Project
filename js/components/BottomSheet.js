import React from 'react'
import { BottomSheet, ListItem } from 'react-native-elements'

// issues: doesn't support SafeAreaView and web

const MyButtonSheet = ({ visible, onClose }) => {
  const list = [
    {
      title: 'List Item 1',
      onPress: () => {
        console.log('item 1 clicked')
      }
    },
    {
      title: 'List Item 2',
      onPress: () => {
        console.log('item 2 clicked')
      }
    }
  ]

  console.log('visible', visible)

  return (
    <BottomSheet isVisible={visible} modalProps={{
      transparent: true
    }}>
      {list.map((item, index) => (
        <ListItem
          key={index}
          onPress={() => {
            item.onPress()
            onClose()
          }}
        >
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
      <ListItem onPress={onClose}>
        <ListItem.Content>
          <ListItem.Title>Cancel</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </BottomSheet>
  )
}

export default MyButtonSheet
