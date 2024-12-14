import { createStackNavigator } from '@react-navigation/stack';
import React, { Fragment } from 'react';
import { STACKS_ENUM } from 'src/enums';

import { BottomTabNavigator } from '../BottomTabs';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Fragment>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={STACKS_ENUM.BOTTOM_TABS_STACK}>
        <Stack.Screen
          name={STACKS_ENUM.BOTTOM_TABS_STACK}
          component={BottomTabNavigator}
        />
      </Stack.Navigator>
    </Fragment>
  );
};
export { MainStack };
