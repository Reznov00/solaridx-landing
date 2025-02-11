import React, { useEffect, useRef } from 'react';
import { Animated, Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Tts from 'react-native-tts';
import { TextMedium, TextRegular } from 'src/components';
import { MessageItemInterface, MessageType } from 'src/interfaces';
import { Colors } from 'src/themes';

type ChatRoomProps = {
    item: MessageItemInterface;
    isNewChat?: boolean;
    type: MessageType;
    loading?: boolean;
};

const MessageItem = React.memo(
    ({ item, type, loading }: ChatRoomProps) => {
        const dot1 = useRef(new Animated.Value(0)).current;
        const dot2 = useRef(new Animated.Value(0)).current;
        const dot3 = useRef(new Animated.Value(0)).current;
        const isPrompt = type === 'prompt';
        const animateAnswer = loading && !isPrompt
        const dangerMessage = !isPrompt && item.answer.startsWith('Failed to')

        useEffect(() => {
            Tts.addEventListener('tts-start', (e) => { console.log("tts-start", e) })
            Tts.addEventListener('tts-cancel', (e) => { console.log("tts-cancel", e) })
            Tts.addEventListener('tts-progress', (e) => { console.log("tts-progress", e) })
            Tts.addEventListener('tts-finish', (e) => { console.log("tts-finish", e) })
            return () => {
                Tts.removeAllListeners('tts-finish')
                Tts.removeAllListeners('tts-cancel')
                Tts.removeAllListeners('tts-start')
                Tts.removeAllListeners('tts-progress')
            }
        }, [])



        useEffect(() => {
            if (animateAnswer) {
                const animationSequence = Animated.loop(
                    Animated.stagger(200, [
                        Animated.sequence([
                            Animated.timing(dot1, { toValue: -7, duration: 300, useNativeDriver: true }),
                            Animated.timing(dot1, { toValue: 0, duration: 300, useNativeDriver: true }),
                        ]),
                        Animated.sequence([
                            Animated.timing(dot2, { toValue: -7, duration: 300, useNativeDriver: true }),
                            Animated.timing(dot2, { toValue: 0, duration: 300, useNativeDriver: true }),
                        ]),
                        Animated.sequence([
                            Animated.timing(dot3, { toValue: -7, duration: 300, useNativeDriver: true }),
                            Animated.timing(dot3, { toValue: 0, duration: 300, useNativeDriver: true }),
                        ]),
                    ])
                );

                animationSequence.start();
                return () => animationSequence.stop();
            }
        }, [animateAnswer, dot1, dot2, dot3]);


        const speakChat = () => {
            !isPrompt && Tts.getInitStatus().then(() => {
                Tts.speak(item.answer, {
                    androidParams: {
                        KEY_PARAM_PAN: -1,
                        KEY_PARAM_VOLUME: 0.5,
                        KEY_PARAM_STREAM: 'STREAM_MUSIC',
                    },
                    iosVoiceId:
                        // "com.apple.voice.compact.en-AU.Karen"
                        // "com.apple.voice.compact.en-IE.Moira"
                        "com.apple.voice.compact.en-US.Samantha"
                    ,
                    rate: 0.5,
                })
            });

        }

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
                            backgroundColor: isPrompt ? Colors.gray_200 : Colors.gray_300,
                            borderTopLeftRadius: widthPercentageToDP(isPrompt ? 3 : 0),
                            borderTopRightRadius: widthPercentageToDP(isPrompt ? 0 : 3),
                        },
                    ]}
                >
                    {animateAnswer ? (
                        <View style={styles.loadingContainer}>
                            <Animated.View style={[styles.dot, { transform: [{ translateY: dot1 }] }]} />
                            <Animated.View style={[styles.dot, { transform: [{ translateY: dot2 }] }]} />
                            <Animated.View style={[styles.dot, { transform: [{ translateY: dot3 }] }]} />
                        </View>
                    ) : (
                        <TouchableWithoutFeedback onPress={speakChat}>
                            <View style={styles.messageDetailsContainer}>
                                {item.image && <View style={styles.imageContainerStyle}>
                                    <Image resizeMode='contain' source={{ uri: item.image }} style={{ width: '100%', height: '100%' }} />
                                </View>}
                                <TextMedium fontSize="st" color={dangerMessage ? "danger" : "gray_900"}>
                                    {isPrompt ? item.prompt : item.answer}
                                </TextMedium>
                            </View>
                        </TouchableWithoutFeedback>
                    )}
                </View>
            </View>
        );
    },
    (prevProps, nextProps) => {
        return (
            prevProps.type === nextProps.type &&
            prevProps.isNewChat === nextProps.isNewChat &&
            prevProps.item._id === nextProps.item._id &&
            prevProps.item.prompt === nextProps.item.prompt &&
            prevProps.item.answer === nextProps.item.answer
        );
    }
);

export { MessageItem };

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start',
        width: '100%',
        gap: widthPercentageToDP(2),
        minHeight: heightPercentageToDP(7),
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
        maxWidth: widthPercentageToDP(78),
    },
    loadingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: widthPercentageToDP(7),
        minHeight: heightPercentageToDP(2),
    },
    dot: {
        width: widthPercentageToDP(1.5),
        height: widthPercentageToDP(1.5),
        backgroundColor: Colors.gray_900,
        borderRadius: widthPercentageToDP(2),
    },
    imageContainerStyle: {
        borderRadius: widthPercentageToDP(3),
        height: heightPercentageToDP(20),
        width: heightPercentageToDP(20),
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10
    },
    messageDetailsContainer: {
        gap: heightPercentageToDP(1)
    }
});
