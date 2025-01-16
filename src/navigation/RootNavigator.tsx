import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import Toast from 'react-native-toast-message';
import { DeleteDataBottomSheet, LogoutBottomSheet } from 'src/components';
import { STACKS_ENUM } from 'src/enums';
import { useAuthTokenAtom } from 'src/store';
import { toastConfig } from 'src/themes';
import { hasAndroidPermission, NavigationService } from 'src/utilities';
import { AuthStack, MainStack, OnboardingStack } from './stacks';

const Stack = createStackNavigator();
const RootNavigator = () => {
  const { authToken } = useAuthTokenAtom();
  const initialRoute =
    authToken === null ? STACKS_ENUM.ONBOARDING_STACK : STACKS_ENUM.AUTH_STACK;



  useEffect(() => {
    checkPermissions()
  }, [])

  const checkPermissions = async () => {
    const hasPermission = await hasAndroidPermission();
    if (hasPermission) {
      console.log('All required permissions granted!');
    } else {
      console.log('Permissions denied!');
    }
  };


  return (
    <>
      <StatusBar
        animated
        barStyle={'dark-content'}
        backgroundColor={'white'}
      />
      <NavigationContainer
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}>
        <Stack.Navigator screenOptions={{
          headerShown: false,
          ...TransitionPresets.ModalFadeTransition
        }}
        // initialRouteName={initialRoute}
        >

          <Stack.Screen
            name={STACKS_ENUM.ONBOARDING_STACK}
            component={OnboardingStack}
          />
          <Stack.Screen name={STACKS_ENUM.AUTH_STACK} component={AuthStack} />
          <Stack.Screen name={STACKS_ENUM.MAIN_STACK} component={MainStack} />
        </Stack.Navigator>
      </NavigationContainer>
      <DeleteDataBottomSheet />
      <LogoutBottomSheet />
      <Toast config={toastConfig} />
    </>
  );
};

export { RootNavigator };
