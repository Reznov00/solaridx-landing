import { LoginKit } from '@snapchat/snap-kit-react-native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FullScreenView, TextMedium, Touchable } from 'src/components'

const LearningScreen = () => {

  const handleval = async () => {
    LoginKit.login()
      .then((success) => {
        console.log('first', success)
      })
      .catch((error) => {
        console.log({ error })
      });
  }
  return (
    <FullScreenView>
      <View style={styles.container}>
        <Text>LearningScreen</Text>
        <Touchable onPress={handleval}>
          <TextMedium>hhhhhh</TextMedium>
        </Touchable>
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