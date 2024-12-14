import React from 'react'
import { StyleSheet, View } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { AppleIcon, GoogleIcon } from 'src/assets'
import { Touchable, TextRegular } from 'src/components'
import { Colors } from 'src/themes'
import { isIOS } from 'src/utilities'

const SocialContainer = () => {
    return (
        <View style={styles.container}>
            {isIOS && <Touchable style={styles.socialItem}>
                <AppleIcon size={3} />
                <TextRegular fontSize='sh2'>Apple</TextRegular>
            </Touchable>}
            <Touchable style={styles.socialItem}>
                <GoogleIcon size={3} />
                <TextRegular fontSize='sh2'>Google</TextRegular>
            </Touchable>
        </View>
    )
}

export { SocialContainer }

const styles = StyleSheet.create({
    container: {
        marginVertical: heightPercentageToDP(2),
        flexDirection: 'row',
        gap: widthPercentageToDP(5)
    },
    socialItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.gray_50,
        borderRadius: widthPercentageToDP(3),
        flexDirection: 'row',
        paddingVertical: heightPercentageToDP(1),
        gap: widthPercentageToDP(4),
        paddingHorizontal: widthPercentageToDP(4)
    }
})