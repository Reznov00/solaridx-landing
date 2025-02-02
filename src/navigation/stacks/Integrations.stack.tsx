import { createStackNavigator } from '@react-navigation/stack';
import React, { Fragment } from 'react';
import { SCREENS_ENUM } from 'src/enums';
import { IntegrationsStackParamList } from 'src/interfaces';

import { IntegrationsScreen, SpectaclesManageScreen } from 'src/screens';

const Stack = createStackNavigator<IntegrationsStackParamList>();

const IntegrationsStack = () => {
  return (
    <Fragment>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={SCREENS_ENUM.INTEGRATIONS_MAIN_SCREEN}>
        <Stack.Screen
          name={SCREENS_ENUM.INTEGRATIONS_MAIN_SCREEN}
          component={IntegrationsScreen}
        />
        <Stack.Screen
          name={SCREENS_ENUM.SPECTACLES_MANAGE_SCREEN}
          component={SpectaclesManageScreen}
        />
      </Stack.Navigator>
    </Fragment>
  );
};
export { IntegrationsStack };
