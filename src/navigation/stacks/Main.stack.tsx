import { createStackNavigator } from '@react-navigation/stack';
import React, { Fragment } from 'react';
import { STACKS_ENUM } from 'src/enums';

import { BottomTabNavigator } from '../BottomTabs';
import { ProfileStack } from './Profile.stack';
import { HomeStack } from './Home.stack';
import { ChatStack } from './Chat.stack';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Fragment>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      // initialRouteName={STACKS_ENUM.BOTTOM_TABS_STACK}
      >
        <Stack.Screen
          name={STACKS_ENUM.BOTTOM_TABS_STACK}
          component={BottomTabNavigator}
        />
        <Stack.Screen
          name={STACKS_ENUM.PROFILE_STACK}
          component={ProfileStack}
        />
        <Stack.Screen
          name={STACKS_ENUM.HOME_STACK}
          component={HomeStack}
        />
        <Stack.Screen
          name={STACKS_ENUM.CHAT_STACK}
          component={ChatStack}
        />
      </Stack.Navigator>
    </Fragment>
  );
};
export { MainStack };
