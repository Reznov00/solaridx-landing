import React from 'react'
import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { BackArrowIcon } from 'src/assets'
import { Colors } from 'src/themes'
import { NavigationService } from 'src/utilities'
import { Touchable } from './Touchable'


const BackButton = ({ disabled = false }: { disabled?: boolean }) => {
    return (
        <Touchable
            disabled={disabled}
            style={styles.backButtonContainer}
            onPress={() => NavigationService.goBack()}>
            <BackArrowIcon size={2.5} color={Colors.gray_600} />
        </Touchable>
    )
}

export { BackButton }

const styles = StyleSheet.create({
    backButtonContainer: {
        alignSelf: 'flex-start',
        padding: RFValue(8),
        borderRadius: 50,
        borderWidth: 2,
        borderColor: Colors.gray_600,
    },
})