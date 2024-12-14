import {createStackNavigator} from '@react-navigation/stack';
import React, {Fragment} from 'react';

import {SCREENS_ENUM} from 'src/enums';
import {OnboardingStackParamList} from 'src/interfaces';
import {OnBoardingScreen} from 'src/screens';

const Stack = createStackNavigator<OnboardingStackParamList>();

const OnboardingStack = () => {
  return (
    <Fragment>
      <Stack.Navigator initialRouteName={SCREENS_ENUM.ONBOARDING_MAIN_SCREEN}>
        <Stack.Group
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen
            name={SCREENS_ENUM.ONBOARDING_MAIN_SCREEN}
            component={OnBoardingScreen}
          />
        </Stack.Group>
      </Stack.Navigator>
    </Fragment>
  );
};
export {OnboardingStack};
