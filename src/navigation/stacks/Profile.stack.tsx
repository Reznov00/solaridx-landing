import { createStackNavigator } from '@react-navigation/stack';
import React, { Fragment } from 'react';
import { SCREENS_ENUM } from 'src/enums';
import { ProfileStackParamList } from 'src/interfaces';

import { EditProfileScreen } from 'src/screens';

const Stack = createStackNavigator<ProfileStackParamList>();

const ProfileStack = () => {
  return (
    <Fragment>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={SCREENS_ENUM.EDIT_PROFILE_SCREEN}>
        <Stack.Screen
          name={SCREENS_ENUM.EDIT_PROFILE_SCREEN}
          component={EditProfileScreen}
        />
      </Stack.Navigator>
    </Fragment>
  );
};
export { ProfileStack };
