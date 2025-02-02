import { createStackNavigator } from '@react-navigation/stack';
import React, { Fragment } from 'react';
import { SCREENS_ENUM } from 'src/enums';
import { ChatStackParamList } from 'src/interfaces';

import { ChatRoomScreen } from 'src/screens';

const Stack = createStackNavigator<ChatStackParamList>();

const ChatStack = () => {
  return (
    <Fragment>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={SCREENS_ENUM.CHAT_ROOM_SCREEN}>
        <Stack.Screen
          name={SCREENS_ENUM.CHAT_ROOM_SCREEN}
          component={ChatRoomScreen}
        />
      </Stack.Navigator>
    </Fragment>
  );
};
export { ChatStack };
