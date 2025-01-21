import React from 'react'
import { StyleSheet, View } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { TextMedium, TextRegular } from 'src/components'
import { MessageItemInterface, MessageType } from 'src/interfaces'
import { Colors } from 'src/themes'

type ChatRoomProps = {
    item: MessageItemInterface;
    isNewChat?: boolean
    type: MessageType
};

const MessageItem = ({ item, type }: ChatRoomProps) => {
    const isPrompt = type === 'prompt';

    return (
        <View
            style={[
                styles.container,
                { flexDirection: isPrompt ? 'row-reverse' : 'row' },
            ]}
        >
            <View style={styles.avatarContainer}>
                <TextRegular>{isPrompt ? 'R' : 'B'}</TextRegular>
            </View>
            <View
                style={[
                    styles.messageContainer,
                    {
                        backgroundColor: isPrompt
                            ? Colors.gray_200
                            : Colors.gray_400,
                        borderTopLeftRadius: widthPercentageToDP(isPrompt ? 3 : 0),
                        borderTopRightRadius: widthPercentageToDP(isPrompt ? 0 : 3),

                    },
                ]}
            >
                <TextMedium fontSize="st" color='gray_900'>
                    {isPrompt ? item.prompt : item.answer}
                </TextMedium>
            </View>
        </View>
    )
}

export { MessageItem }

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start',
        width: '100%',
        gap: widthPercentageToDP(2),
    },
    avatarContainer: {
        width: widthPercentageToDP(10),
        height: widthPercentageToDP(10),
        borderRadius: widthPercentageToDP(10),
        backgroundColor: Colors.primary_500,
        justifyContent: 'center',
        alignItems: 'center',
    },
    messageContainer: {
        paddingHorizontal: widthPercentageToDP(3),
        paddingVertical: heightPercentageToDP(2),
        borderBottomEndRadius: widthPercentageToDP(3),
        borderBottomLeftRadius: widthPercentageToDP(3),
        marginBottom: heightPercentageToDP(1),
        backgroundColor: Colors.primary_300,
        maxWidth: widthPercentageToDP(78)
    }
})