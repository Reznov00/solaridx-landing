import { createStackNavigator } from '@react-navigation/stack';
import React, { Fragment } from 'react';
import { SCREENS_ENUM } from 'src/enums';
import { AuthStackParamList } from 'src/interfaces';

import {
  ForgotPasswordScreen,
  OTPInputScreen,
  ResetPassSuccessScreen,
  ResetPasswordScreen,
  SignInScreen,
  SignUpScreen,
} from 'src/screens';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Fragment>
      <Stack.Navigator initialRouteName={SCREENS_ENUM.SIGN_IN_SCREEN}>
        <Stack.Group
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen
            name={SCREENS_ENUM.SIGN_IN_SCREEN}
            component={SignInScreen}
          />
          {/* <Stack.Screen
            name={SCREENS_ENUM.SIGN_UP_SCREEN}
            component={SignUpScreen}
          />
          <Stack.Screen
            name={SCREENS_ENUM.FORGOT_PASSWORD_SCREEN}
            component={ForgotPasswordScreen}
          />
          <Stack.Screen
            name={SCREENS_ENUM.OTP_SCREEN}
            component={OTPInputScreen}
          />
          <Stack.Screen
            name={SCREENS_ENUM.RESET_PASSWORD_SCREEN}
            component={ResetPasswordScreen}
          />
          <Stack.Screen
            name={SCREENS_ENUM.RESET_PASSWORD_SUCCESS_SCREEN}
            component={ResetPassSuccessScreen}
          /> */}
        </Stack.Group>
      </Stack.Navigator>
    </Fragment>
  );
};
export { AuthStack };
