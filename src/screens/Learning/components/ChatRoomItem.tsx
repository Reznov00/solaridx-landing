import React from 'react'
import { StyleSheet, ViewToken } from 'react-native'
import Animated, { SharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { TextMedium, Touchable } from 'src/components'
import { ChatRoomInterface } from 'src/interfaces'
import { Colors } from 'src/themes'

type ChatRoomProps = {
    viewableItems: SharedValue<ViewToken<ChatRoomInterface>[]>;
    item: ChatRoomInterface;
};

const ChatRoomItem = ({ item, viewableItems }: ChatRoomProps) => {
    const { createdAt, id, name } = item

    const rStyle = useAnimatedStyle(() => {
        const isVisible = Boolean(
            viewableItems.value
                .filter(item => item.isViewable)
                .find(viewableItem => viewableItem.item.id === id),
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

    const handleChatPress = () => { }
    return (
        <Animated.View style={rStyle}>
            <Touchable onPress={handleChatPress} scaleValue={0.95} style={styles.container}>
                <TextMedium numberOfLines={1} fontSize='st'>{name}</TextMedium>
            </Touchable>
        </Animated.View>
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
        elevation: 10,
        backgroundColor: Colors.white,
    },
})