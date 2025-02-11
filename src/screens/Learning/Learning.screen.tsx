import React from 'react'
import { FlatList, ListRenderItemInfo, RefreshControl, StyleSheet, View, ViewToken } from 'react-native'
import { useSharedValue } from 'react-native-reanimated'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { ChatIcon, EmptyBoxIcon } from 'src/assets'
import { ChatListShimmer, FullScreenView, PrimaryButton, TextMedium, TextRegular } from 'src/components'
import { SCREENS_ENUM, STACKS_ENUM } from 'src/enums'
import { ChatRoomInterface } from 'src/interfaces'
import { useGetChatRoomsService } from 'src/services'
import { FontSizes, LineHeight } from 'src/themes'
import { isIOS, NavigationService } from 'src/utilities'
import { ChatRoomItem } from './components'

const NoChatFound = () => {
  return <View style={styles.noChatsFoundContainer}>
    <EmptyBoxIcon size={20} />
    <TextRegular>No Chats Found</TextRegular>
  </View>
}

const LearningScreen = () => {
  const viewableItems = useSharedValue<ViewToken<ChatRoomInterface>[]>([]);
  const { data, isPending, refetch } = useGetChatRoomsService()

  const renderChatRooms = ({ item, index }: ListRenderItemInfo<ChatRoomInterface>) => {
    return <ChatRoomItem
      key={index}
      item={item}
      viewableItems={viewableItems}
    />
  }


  return (
    <FullScreenView>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TextMedium fontSize='sh1'>My Chats</TextMedium>
          <PrimaryButton
            title='New'
            onPress={() => NavigationService.nestedNavigate(STACKS_ENUM.CHAT_STACK, SCREENS_ENUM.CHAT_ROOM_SCREEN)}
            rightIcon={<ChatIcon size={2.5} />}
            buttonStyle={styles.newChatButton}
            textStyle={styles.newChatTextStyle}
            disabled={isPending}
          />
        </View>
        <View style={styles.chatsListContainer}>
          {!isPending ? (
            <FlatList
              data={data}
              style={styles.listStyle}
              renderItem={renderChatRooms}
              ListFooterComponent={<View />}
              refreshControl={
                <RefreshControl refreshing={isPending} onRefresh={refetch} />
              }
              keyExtractor={(item) => item.chatRoomId}
              ListEmptyComponent={<NoChatFound />}
              showsVerticalScrollIndicator={false}
              ListFooterComponentStyle={styles.listFooterStyle}
              onViewableItemsChanged={({ viewableItems: vItems }) => {
                viewableItems.value = vItems;
              }}
            />
          )
            : <ChatListShimmer />
          }

        </View>
      </View>
    </FullScreenView>
  )
}

export { LearningScreen }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: heightPercentageToDP(isIOS ? 2 : 3)
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: widthPercentageToDP(5)
  },
  newChatButton: {
    width: '30%',
    marginVertical: 0,
    paddingVertical: heightPercentageToDP(0),
    height: heightPercentageToDP(4)
  },
  newChatTextStyle: {
    fontSize: FontSizes.st,
    lineHeight: LineHeight.st
  },
  chatsListContainer: {
    paddingVertical: heightPercentageToDP(2),
  },
  listFooterStyle: {
    height: heightPercentageToDP(4)
  },
  listStyle: {
    paddingTop: heightPercentageToDP(2),
    paddingHorizontal: widthPercentageToDP(5),
  },
  noChatsFoundContainer: {
    height: heightPercentageToDP(60),
    justifyContent: 'center',
    alignItems: 'center',
    gap: heightPercentageToDP(3)
  },
})