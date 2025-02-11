import React from 'react'
import { StyleSheet, ViewToken } from 'react-native'
import Animated, { SharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { TextMedium, Touchable } from 'src/components'
import { SCREENS_ENUM, STACKS_ENUM } from 'src/enums'
import { ChatRoomInterface } from 'src/interfaces'
import { useChatRoomIDAtom } from 'src/store'
import { Colors } from 'src/themes'
import { NavigationService } from 'src/utilities'

type ChatRoomProps = {
    viewableItems: SharedValue<ViewToken<ChatRoomInterface>[]>;
    item: ChatRoomInterface;
};

const ChatRoomItem = ({ item, viewableItems }: ChatRoomProps) => {
    const { setRoomId } = useChatRoomIDAtom()
    const { chatRoomId, header } = item

    const rStyle = useAnimatedStyle(() => {
        const isVisible = Boolean(
            viewableItems.value
                .filter(item => item.isViewable)
                .find(viewableItem => viewableItem.item.chatRoomId === chatRoomId),
        );

        return {
            opacity: withTiming(isVisible ? 1 : 0, { duration: 500 }),
            transform: [
                {
                    scale: withTiming(isVisible ? 1 : 0.9, { duration: 500 }),
                },
            ],
        };
    }, []);

    const handleChatPress = () => {
        setRoomId(item.chatRoomId)
        NavigationService.nestedNavigate(STACKS_ENUM.CHAT_STACK, SCREENS_ENUM.CHAT_ROOM_SCREEN, { roomDetails: item })
    }
    return (
        <Touchable onPress={handleChatPress} scaleValue={0.95} >
            <Animated.View style={[styles.container, rStyle]}>
                <TextMedium numberOfLines={1} fontSize='st'>{header}</TextMedium>
                {/* <BackArrowIcon size={2} style={{ transform: [{ rotate: '180deg' }] }} color={Colors.gray_900} /> */}
            </Animated.View>
        </Touchable>
    )
}

export { ChatRoomItem }

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: widthPercentageToDP(3),
        paddingVertical: heightPercentageToDP(2),
        borderRadius: widthPercentageToDP(3),
        marginBottom: heightPercentageToDP(1),
        shadowRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 0 },
        elevation: 3,
        backgroundColor: Colors.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
})