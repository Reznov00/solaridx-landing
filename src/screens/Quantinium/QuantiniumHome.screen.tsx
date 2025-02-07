import React from 'react'
import { StyleSheet, View } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { FullScreenView, TextMedium } from 'src/components'

const QuantiniumHomeScreen = () => {
  return (
    <FullScreenView>
      <View style={styles.container}>
        <TextMedium style={{ textAlign: 'center' }} fontSize='sh2'>Unlocking the future: Quantum-powered energy predictions are coming soon! ⚡🔮</TextMedium>
      </View>
    </FullScreenView>
  )
}

export { QuantiniumHomeScreen }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: heightPercentageToDP(2),
    paddingHorizontal: widthPercentageToDP(5),
  }
})