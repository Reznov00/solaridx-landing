import React from 'react'
import { StyleSheet, View } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { LogoutIcon, TrashIcon } from 'src/assets'
import { TextMedium, Touchable } from 'src/components'
import { Colors } from 'src/themes'

interface Props {
    handleDelete?: () => void
    handleExit?: () => void
    disableDeletion: boolean
}

const ChatMenu = (props: Props) => {
    const { handleDelete, handleExit, disableDeletion } = props
    return (
        <View style={styles.menuContainer}>
            <Touchable disabled={disableDeletion} onPress={handleDelete} style={[styles.menuItem, {
                opacity: disableDeletion ? 0.6 : 1
            }]}>
                <TextMedium fontSize='bt'>Delete</TextMedium>
                <TrashIcon size={2.5} color={Colors.danger} />
            </Touchable>
            <View style={styles.lineSeperator} />
            <Touchable onPress={handleExit} style={styles.menuItem}>
                <TextMedium fontSize='bt'>Exit</TextMedium>
                <LogoutIcon style={{ transform: [{ rotate: '180deg' }] }} size={2.5} color={Colors.danger} />
            </Touchable>
        </View>
    )
}

export { ChatMenu }

const styles = StyleSheet.create({
    menuContainer: {
        position: 'absolute',
        right: widthPercentageToDP(5),
        top: heightPercentageToDP(6),
        zIndex: 1,
        paddingVertical: widthPercentageToDP(3),
        minWidth: widthPercentageToDP(35),
        maxWidth: widthPercentageToDP(60),
        paddingHorizontal: widthPercentageToDP(3),
        borderRadius: widthPercentageToDP(2),
        justifyContent: 'center',
        shadowRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 0 },
        elevation: 10,
        backgroundColor: Colors.white,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    lineSeperator: {
        width: '100%',
        height: heightPercentageToDP(0.3),
        borderRadius: widthPercentageToDP(5),
        marginTop: heightPercentageToDP(0.7),
        marginBottom: heightPercentageToDP(0.5),
        backgroundColor: Colors.gray_200,
    },
})