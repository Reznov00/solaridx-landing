import React, { useState } from 'react'
import {
  FlatList,
  KeyboardAvoidingView,
  ListRenderItemInfo,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import { useSharedValue } from 'react-native-reanimated'
import { RFValue } from 'react-native-responsive-fontsize'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { MicrophoneIcon, PaperClipIcon, SendIcon } from 'src/assets'
import { BackButton, FullScreenView, ImageBottomSheet, TextArea, TextMedium, Touchable, VoiceRecorderBottomSheet } from 'src/components'
import { chatHeaderData, dummyChats } from 'src/constants'
import { SCREENS_ENUM } from 'src/enums'
import { ChatRoomInterface, GenericRouteProps, MessageItemInterface } from 'src/interfaces'
import { Colors } from 'src/themes'
import { dissmissKeyBoard, isIOS, useKeyboardVisible } from 'src/utilities'
import { MessageItem } from './components'

const ChatRoomScreen = ({ route }: GenericRouteProps<SCREENS_ENUM.CHAT_ROOM_SCREEN>) => {
  const roomDetails = route?.params?.roomDetails as ChatRoomInterface;
  const isKeyboardVisible = useKeyboardVisible()
  const isImageBottomSheetOpen = useSharedValue(false);
  const isRecorderOpen = useSharedValue(false);
  const [prompt, setPrompt] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const isNewChat = !!roomDetails
  const [chats, setChats] = useState<MessageItemInterface[]>(isNewChat ? dummyChats : [])

  const renderChats = ({ item }: ListRenderItemInfo<MessageItemInterface>) => {
    return (
      <View style={styles.messageContainer}>
        <MessageItem
          item={item}
          isNewChat={isNewChat}
          type='prompt'
        />
        <MessageItem
          item={item}
          isNewChat={isNewChat}
          type='answer'
          loading={loading}
        />
      </View>
    )
  }

  const handleSendMessage = async (prompt: string) => {
    if (!prompt.trim()) return;
    setLoading(true)

    const newMessage: MessageItemInterface = {
      _id: String(new Date().getTime()),
      prompt: prompt.trim(),
      answer: '',
      chatRoom: roomDetails,
      createdAt: new Date().toISOString(),
    };

    setChats((prevChats) => [newMessage, ...prevChats]);
    setPrompt('')

    try {
      const apiAnswer = await fetchAnswerFromAPI(prompt);
      setChats((prevChats) =>
        prevChats.map((chat) =>
          chat._id === newMessage._id ? { ...chat, answer: apiAnswer } : chat
        )
      );
    } catch (error) {
      console.error('Error fetching answer:', error);
      setChats((prevChats) =>
        prevChats.map((chat) =>
          chat._id === newMessage._id
            ? { ...chat, answer: 'Failed to fetch answer.' }
            : chat
        )
      );
    } finally {
      setPrompt('');
    }
  };

  const handleUpload = (formData: FormData) => {
    console.log({ formData: JSON.stringify(formData) })
  }
  const handleSpeech = (speech: string) => {
    handleSendMessage(speech)
  }

  const fetchAnswerFromAPI = async (query: string) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false)
    return `Answer to: ${query}`;
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <TouchableWithoutFeedback onPress={dissmissKeyBoard}>
        <FullScreenView>
          <View style={styles.container}>
            <View style={styles.headerContainer}>
              <BackButton iconSize={1.5} style={{ padding: RFValue(7) }} />
              <TextMedium fontSize='st' numberOfLines={1}>
                {roomDetails ? `${roomDetails.name}` : 'New Chat'}
              </TextMedium>
            </View>
            <View style={styles.lineSeperator} />
            <View style={styles.subContainer}>
              <View style={styles.chatBoxContainer}>
                <FlatList
                  data={chats}
                  renderItem={renderChats}
                  keyExtractor={(item) => item._id}
                  inverted
                  showsVerticalScrollIndicator={false}
                  ListFooterComponent={<MessageItem
                    item={chatHeaderData}
                    isNewChat={isNewChat}
                    type='answer'
                  />}
                  ListFooterComponentStyle={{
                    width: widthPercentageToDP(90)
                  }}
                />
              </View>
              <View style={styles.lineSeperator} />
              <View style={styles.chatSenderContainer}>
                <TextArea
                  setTextData={setPrompt}
                  textData={prompt}
                  style={{ flex: 1, elevation: 5 }}
                  placeholder='Ask me anything....'
                  hideIconOnKeyboard
                  rightIcon={
                    <Touchable onPress={() => (isImageBottomSheetOpen.value = true)} >
                      <PaperClipIcon size={3.5} />
                    </Touchable>
                  }
                />
                <Touchable onPress={() => {
                  isKeyboardVisible ? handleSendMessage(prompt) : isRecorderOpen.value = true
                }} style={styles.sendButtonStyle}>
                  {isKeyboardVisible ? <SendIcon size={3.5} /> :
                    <MicrophoneIcon size={3.5} />}
                </Touchable>
              </View>
            </View>
          </View>
        </FullScreenView>
      </TouchableWithoutFeedback>
      <ImageBottomSheet isOpen={isImageBottomSheetOpen} handlePress={handleUpload} />
      <VoiceRecorderBottomSheet isOpen={isRecorderOpen} handleSpeech={handleSpeech} />
    </KeyboardAvoidingView>
  )
}

export { ChatRoomScreen }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: widthPercentageToDP(5),
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: heightPercentageToDP(isIOS ? 1 : 2)
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: widthPercentageToDP(3),
    marginTop: heightPercentageToDP(isIOS ? 1 : 2)
  },
  lineSeperator: {
    width: "100%",
    height: heightPercentageToDP(0.3),
    borderRadius: widthPercentageToDP(5),
    marginVertical: heightPercentageToDP(1),
    backgroundColor: Colors.gray_200,
  },
  chatBoxContainer: {
    flex: 1,
  },
  messageContainer: {
    marginBottom: heightPercentageToDP(2)
  },
  chatSenderContainer: {
    width: '100%',
    shadowOffset: { width: 0, height: 5 },
    shadowColor: Colors.gray_900,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: widthPercentageToDP(2),
    backgroundColor: 'transparent',
    borderRadius: widthPercentageToDP(2),

  },
  sendButtonStyle: {
    backgroundColor: Colors.primary_500,
    borderRadius: widthPercentageToDP(3),
    height: heightPercentageToDP(6.5),
    width: heightPercentageToDP(6.5),
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10
  }
})
