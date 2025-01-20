import React from 'react'
import { FlatList, ListRenderItemInfo, StyleSheet, View, ViewToken } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { ChatIcon } from 'src/assets'
import { FullScreenView, PrimaryButton, TextMedium } from 'src/components'
import { chatRooms } from 'src/constants'
import { ChatRoomInterface } from 'src/interfaces'
import { FontSizes, LineHeight } from 'src/themes'
import { ChatRoomItem } from './components'
import { useSharedValue } from 'react-native-reanimated'

const LearningScreen = () => {
  const viewableItems = useSharedValue<ViewToken<ChatRoomInterface>[]>([]);

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
            onPress={() => { }}
            rightIcon={<ChatIcon size={2.5} />}
            buttonStyle={styles.newChatButton}
            textStyle={styles.newChatTextStyle}
          />
        </View>
        <View style={styles.chatsListContainer}>
          <FlatList
            data={chatRooms}
            renderItem={renderChatRooms}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<View />}
            ListFooterComponentStyle={styles.listFooterStyle}
            onViewableItemsChanged={({ viewableItems: vItems }) => {
              viewableItems.value = vItems;
            }}
            style={{
              paddingTop: heightPercentageToDP(2),
              paddingHorizontal: widthPercentageToDP(5),
            }}

          />

        </View>
      </View>
    </FullScreenView>
  )
}

export { LearningScreen }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: heightPercentageToDP(1)
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
  }
})