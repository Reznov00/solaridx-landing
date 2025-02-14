import React from 'react'
import { StyleSheet, View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { OptionsIcon } from 'src/assets'
import { BackButton, TextMedium, Touchable } from 'src/components'
import { ChatRoomInterface } from 'src/interfaces'
import { isIOS } from 'src/utilities'

interface Props {
    roomDetails: ChatRoomInterface
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatHeader = (props: Props) => {
    const { roomDetails, setShowMenu, } = props

    return (
        <View style={styles.headerContainer}>
            <View style={styles.headerSubContainer}>
                <BackButton iconSize={2} style={{ padding: RFValue(7) }} />
                <TextMedium style={{ width: widthPercentageToDP(70) }} fontSize="sh2" numberOfLines={1}>
                    {roomDetails ? `${roomDetails?.header}` : 'New Chat'}
                </TextMedium>
            </View>
            <Touchable onPress={() => setShowMenu(prev => !prev)} style={styles.menuButton}>
                <OptionsIcon size={3} />
            </Touchable>
        </View >
    )
}

export { ChatHeader }

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: heightPercentageToDP(isIOS ? 1 : 2),
        justifyContent: 'space-between',
    },
    headerSubContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: widthPercentageToDP(3),
    },
    menuButton: {
        paddingLeft: widthPercentageToDP(3)
    },
})