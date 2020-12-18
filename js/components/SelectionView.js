import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import BottomSheet from 'reanimated-bottom-sheet'
import { Entypo } from '@expo/vector-icons'

const SelectionView = ({ visible, onClose, height, children }) => {
  const snapPoints = height ? [height, 0] : [300, 0]
  const bs = React.createRef()

  useEffect(() => {
    if (visible) {
      bs.current.snapTo(0) // snapPoints[0]
    } else {
      bs.current.snapTo(1) // snapPoints[1]
    }
  }, [visible])

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.panelHeader}>
          <Entypo name="circle-with-cross" size={24} color="#9e9e9e" onPress={onClose} />
        </View>
      </View>
    )
  }
  const renderContent = () => {
    return children && <View style={styles.panel}>{children}</View>
  }
  return (
    <BottomSheet
      ref={bs}
      snapPoints={snapPoints}
      initialSnap={0}
      enabledGestureInteraction={false}
      renderHeader={renderHeader}
      renderContent={renderContent}
      onClose={onClose}
    />
  )
}

export default SelectionView

const styles = StyleSheet.create({
  panel: {
    height: 300,
    padding: 20,
    paddingTop: 0,
    backgroundColor: '#f7f5ee'
  },
  header: {
    backgroundColor: '#f7f5ee',
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -7 },
    shadowRadius: 5,
    shadowOpacity: 0.1
  },
  panelHeader: {
    paddingRight: 20,
    alignItems: 'flex-end'
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10
  },
  panelTitle: {
    fontSize: 27,
    height: 35
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10
  },
  panelButton: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#318bfb',
    alignItems: 'center',
    marginVertical: 10
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white'
  }
})
