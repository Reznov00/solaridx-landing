import { createStackNavigator } from '@react-navigation/stack';
import React, { Fragment } from 'react';
import { SCREENS_ENUM } from 'src/enums';
import { HomeStackParamList } from 'src/interfaces';

import { StatisticsHomeScreen } from 'src/screens';

const Stack = createStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Fragment>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={SCREENS_ENUM.STAISTICS_SCREEN}>
        <Stack.Screen
          name={SCREENS_ENUM.STAISTICS_SCREEN}
          component={StatisticsHomeScreen}
        />
      </Stack.Navigator>
    </Fragment>
  );
};
export { HomeStack };
