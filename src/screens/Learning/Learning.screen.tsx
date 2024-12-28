import React from 'react'
import { StyleSheet, View } from 'react-native'
import { FullScreenView, TextMedium } from 'src/components'

const LearningScreen = () => {
  return (
    <FullScreenView>
      <View style={styles.container}>
        <TextMedium>hhhhhh</TextMedium>
      </View>
    </FullScreenView>
  )
}

export { LearningScreen }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})