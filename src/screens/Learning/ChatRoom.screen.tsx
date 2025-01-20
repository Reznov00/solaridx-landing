import React from 'react'
import { StyleSheet, View } from 'react-native'
import { FullScreenView, TextMedium } from 'src/components'

const ChatRoomScreen = () => {
  return (
    <FullScreenView>
      <View style={styles.container}>
        <TextMedium>ChatRoomScreen</TextMedium>
      </View>
    </FullScreenView>
  )
}

export { ChatRoomScreen }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})