import React, { useEffect, useRef, useState } from 'react';
import { Animated, Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Tts from 'react-native-tts';
import { BrokenImageIcon, ChatBotIcon } from 'src/assets';
import { TextMedium, TextRegular } from 'src/components';
import { MessageItemInterface, MessageType } from 'src/interfaces';
import { useUserAtom } from 'src/store';
import { Colors } from 'src/themes';
import { getInitials } from 'src/utilities';

type ChatRoomProps = {
    item: MessageItemInterface;
    isNewChat?: boolean;
    type: MessageType;
    loading?: boolean;
};

const MessageItem = React.memo(
    ({ item, type, loading }: ChatRoomProps) => {
        const [brokenImage, setBrokenImage] = useState(false);
        const { user } = useUserAtom();
        const dot1 = useRef(new Animated.Value(0)).current;
        const dot2 = useRef(new Animated.Value(0)).current;
        const dot3 = useRef(new Animated.Value(0)).current;
        const animationRef = useRef<Animated.CompositeAnimation | null>(null);
        const isPrompt = type === 'prompt';
        const animateAnswer = !!loading && !isPrompt;
        const dangerMessage = !isPrompt && item?.answer?.startsWith('Failed to');

        useEffect(() => {
            Tts.addEventListener('tts-start', () => { });
            Tts.addEventListener('tts-cancel', () => { });
            Tts.addEventListener('tts-progress', () => { });
            Tts.addEventListener('tts-finish', () => { });
            return () => {
                Tts.removeAllListeners('tts-finish');
                Tts.removeAllListeners('tts-cancel');
                Tts.removeAllListeners('tts-start');
                Tts.removeAllListeners('tts-progress');
            };
        }, []);

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

                animationRef.current = animationSequence;
                animationSequence.start();

                return () => {
                    if (animationRef.current) {
                        animationRef.current.stop();
                        animationRef.current = null;
                    }
                };
            }
        }, [animateAnswer, dot1, dot2, dot3]);

        useEffect(() => {
            if (!animateAnswer && animationRef.current) {
                animationRef.current.stop();
                animationRef.current = null;
                dot1.setValue(0);
                dot2.setValue(0);
                dot3.setValue(0);
            }
        }, [animateAnswer, dot1, dot2, dot3]);

        const speakChat = () => {
            !isPrompt &&
                Tts.getInitStatus().then(() => {
                    Tts.speak(item.answer, {
                        androidParams: {
                            KEY_PARAM_PAN: -1,
                            KEY_PARAM_VOLUME: 0.5,
                            KEY_PARAM_STREAM: 'STREAM_MUSIC',
                        },
                        iosVoiceId: 'com.apple.voice.compact.en-US.Samantha',
                        rate: 0.5,
                    });
                });
        };

        return (
            <View style={[styles.container, { flexDirection: isPrompt ? 'row-reverse' : 'row' }]}>
                <View style={[styles.avatarContainer, { backgroundColor: !isPrompt ? Colors.primary_100 : Colors.primary_400 }]}>
                    {isPrompt ? (
                        <TextRegular color={'white'} fontSize="bt">
                            {getInitials(user?.name as string)}
                        </TextRegular>
                    ) : (
                        <ChatBotIcon size={3.5} />
                    )}
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
                                {item.image && isPrompt && (
                                    <View style={styles.imageContainerStyle}>
                                        <Image
                                            onError={() => setBrokenImage(true)}
                                            resizeMode="contain"
                                            source={{ uri: item.image }}
                                            fadeDuration={500}
                                            style={{ width: '100%', height: '100%' }}
                                        />
                                        {brokenImage && (
                                            <View style={styles.brokenImage}>
                                                <BrokenImageIcon size={8} />
                                                <TextMedium fontSize="st">Image expired</TextMedium>
                                            </View>
                                        )}
                                    </View>
                                )}
                                <TextRegular fontSize="st" color={dangerMessage ? 'danger' : 'gray_900'}>
                                    {isPrompt ? item.prompt : item.answer}
                                </TextRegular>
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
            prevProps.item.answer === nextProps.item.answer &&
            prevProps.loading === nextProps.loading
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
        backgroundColor: Colors.success,
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
        backgroundColor: Colors.gray_200,

    },
    brokenImage: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        gap: heightPercentageToDP(2),
    },
    messageDetailsContainer: {
        gap: heightPercentageToDP(1),
    },
});