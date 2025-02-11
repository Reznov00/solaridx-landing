import React, { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  FlatList,
  Image,
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
import { CrossIcon, EmptyBoxIcon, MicrophoneIcon, PaperClipIcon, SendIcon } from 'src/assets'
import { BackButton, FullScreenView, ImageBottomSheet, TextArea, TextMedium, TextRegular, Touchable, VoiceRecorderBottomSheet } from 'src/components'
import { chatHeaderData } from 'src/constants'
import { SCREENS_ENUM } from 'src/enums'
import { ChatRoomInterface, GenericRouteProps, MessageItemInterface } from 'src/interfaces'
import { useGetChatHistoryService } from 'src/services'
import { Colors } from 'src/themes'
import { dissmissKeyBoard, isIOS } from 'src/utilities'
import { MessageItem } from './components'

const ChatRoomScreen = ({ route }: GenericRouteProps<SCREENS_ENUM.CHAT_ROOM_SCREEN>) => {
  const roomDetails = route?.params?.roomDetails as ChatRoomInterface;
  const isImageBottomSheetOpen = useSharedValue(false);
  const { data, isPending, } = useGetChatHistoryService()
  const isRecorderOpen = useSharedValue(false);
  const [prompt, setPrompt] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [imageData, setImageData] = useState<{
    formData: FormData;
    imageUri: string;
  } | null>()
  const isNewChat = !roomDetails
  const [chats, setChats] = useState<MessageItemInterface[]>(data)

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

  const handleRecorderMode = () => {
    dissmissKeyBoard()
    isRecorderOpen.value = true
  }

  const handleSendMessage = async (prompt: string) => {
    if (!prompt.trim()) return;
    setLoading(true)

    const newMessage: MessageItemInterface = {
      _id: String(new Date().getTime()),
      prompt: prompt.trim(),
      answer: '',
      // chatRoom: roomDetails,
      createdAt: new Date().toISOString(),
      image: imageData?.imageUri
    };
    setChats((prevChats) => [newMessage, ...prevChats]);
    setPrompt('')
    setImageData(null)

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
      setImageData(null)
    }
  };
  console.log({ data, isNewChat })
  useEffect(() => {
    setChats(isNewChat ? [] : data)
  }, [isPending])

  const handleUpload = (formData: FormData, imageUri: string) => {
    setImageData({ formData, imageUri })
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
                {roomDetails ? `${roomDetails.header}` : 'New Chat'}
              </TextMedium>
            </View>
            <View style={styles.lineSeperator} />
            {!isPending ? <View style={styles.subContainer}>
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
                {imageData && <View style={styles.sendButtonStyle}>
                  <Touchable onPress={() => setImageData(null)} style={styles.imageDeleteButtonStyle}>
                    <CrossIcon size={2} />
                  </Touchable>
                  <Image source={{ uri: imageData.imageUri }} style={styles.imageStyle} />
                </View>}
                <TextArea
                  setTextData={setPrompt}
                  textData={prompt}
                  style={{ flex: 1, elevation: 5 }}
                  placeholder='Ask me anything....'
                  rightIcon={
                    <Touchable onPress={() => {
                      dissmissKeyBoard()
                      isImageBottomSheetOpen.value = true
                    }} >
                      <PaperClipIcon size={3.5} />
                    </Touchable>
                  }
                />
                <Touchable onPress={() => {
                  prompt ? handleSendMessage(prompt) : handleRecorderMode()
                }} style={styles.sendButtonStyle}>
                  {prompt ? <SendIcon size={3.5} /> :
                    <MicrophoneIcon size={3.5} />}
                </Touchable>
              </View>
            </View>
              : <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size={'large'} color={Colors.gray_900} />
              </View>
            }
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
    marginTop: heightPercentageToDP(1),
    marginBottom: heightPercentageToDP(2),
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
  noChatsFoundContainer: {
    height: heightPercentageToDP(60),
    justifyContent: 'center',
    alignItems: 'center',
    gap: heightPercentageToDP(3)
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: widthPercentageToDP(3)
  },
  sendButtonStyle: {
    backgroundColor: Colors.primary_500,
    borderRadius: widthPercentageToDP(3),
    height: heightPercentageToDP(6.5),
    width: heightPercentageToDP(6.5),
    // overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10
  },
  imageDeleteButtonStyle: {
    position: 'absolute',
    backgroundColor: Colors.white,
    top: -heightPercentageToDP(1),
    zIndex: 1,
    right: -widthPercentageToDP(1),
    borderRadius: 100,
    padding: heightPercentageToDP(0.3)

  }
})