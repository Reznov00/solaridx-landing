import React from 'react';
import { FlatList, View } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { ChatRoomItemShimmer } from './ChatRoomItemShimmer';

const ChatListShimmer = () => {
  return (
    <FlatList
      data={[1, 2, 3, 4, 5, 6, 7, 8]}
      renderItem={() => <ChatRoomItemShimmer />}
      keyExtractor={item => item.toString()}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={() => (
        <View style={{ height: heightPercentageToDP(1) }} />
      )}
      ListFooterComponentStyle={{ height: heightPercentageToDP(15) }}
      style={{ marginTop: heightPercentageToDP(2) }}
    />
  );
};

export { ChatListShimmer };
