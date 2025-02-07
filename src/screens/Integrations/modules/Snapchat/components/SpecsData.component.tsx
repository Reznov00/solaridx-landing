import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TextMedium } from 'src/components'

const SpecsDataComponent = () => {
    return (
        <View style={styles.container}>
            <TextMedium>No data found</TextMedium>
        </View>
    )
}

export { SpecsDataComponent }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})