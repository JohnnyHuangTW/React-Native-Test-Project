import React, { useEffect } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { View, Text, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/native'
import { bottomSheetModels } from '../services/bottomSheetModels'
import Animated from 'react-native-reanimated'
import BottomSheet from 'reanimated-bottom-sheet'
// Reducers
import { hideBottomSheet } from '../reducers/bottomSheetReducer'


const MyBottomSheet = () => {
  const dispatch = useDispatch()
  const { visible, modelName } = useSelector(state => state.bottomSheet)
  const content = bottomSheetModels[modelName]
  const snapPoints = [300, 0]
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
          <View style={styles.panelHandle} />
        </View>
      </View>
    )
  }
  const renderContent = () => {
    return content && <View style={styles.panel}>{content}</View>
  }
  return (
    <BottomSheet
      ref={bs}
      snapPoints={snapPoints}
      initialSnap={0}
      enabledGestureInteraction={true}
      renderHeader={renderHeader}
      renderContent={renderContent}
      onCloseEnd={() => dispatch(hideBottomSheet())}
    />
  )
}

export default MyBottomSheet

const styles = StyleSheet.create({
  panel: {
    height: 300,
    padding: 20,
    backgroundColor: '#f7f5eee8'
  },
  header: {
    backgroundColor: '#f7f5eee8',
    shadowColor: '#000000',
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -8 },
    shadowRadius: 5,
    shadowOpacity: 0.1
  },
  panelHeader: {
    alignItems: 'center'
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
