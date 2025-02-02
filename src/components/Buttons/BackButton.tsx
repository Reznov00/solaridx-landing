import React from 'react'
import { StyleSheet, ViewStyle } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { BackArrowIcon } from 'src/assets'
import { Colors } from 'src/themes'
import { NavigationService } from 'src/utilities'
import { Touchable } from './Touchable'


interface Props {
    disabled?: boolean
    style?: ViewStyle
    iconSize?: number
}
const BackButton = ({ style, disabled = false, iconSize = 2.5 }: Props) => {
    return (
        <Touchable
            disabled={disabled}
            style={[styles.backButtonContainer, style]}
            onPress={() => NavigationService.goBack()}>
            <BackArrowIcon size={iconSize} color={Colors.gray_600} />
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