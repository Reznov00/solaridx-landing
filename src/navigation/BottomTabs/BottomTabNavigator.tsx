import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import { SCREENS_ENUM } from 'src/enums';
import { BottomTabParamList } from 'src/interfaces';
import { HomeScreen, LearningScreen, ProfileScreen, QuantiniumHomeScreen } from 'src/screens';
import { CustomBottomTab } from './CustomBottomTab';
const CustomBottomTabs = (props: BottomTabBarProps) => {
  return <CustomBottomTab {...props} />;
};

const BottomTabNavigator = () => {

  const Tab = createBottomTabNavigator<BottomTabParamList>();
  return (
    <Tab.Navigator
      tabBar={CustomBottomTabs}
      screenOptions={{
        headerShown: false,
        popToTopOnBlur: true,
        tabBarHideOnKeyboard: true
      }}>
      <Tab.Screen
        name={SCREENS_ENUM.HOME_MAIN_SCREEN}
        component={HomeScreen}
      />
      <Tab.Screen
        name={SCREENS_ENUM.LEARNING_MAIN_SCREEN}
        component={LearningScreen}
      />
      <Tab.Screen
        name={SCREENS_ENUM.QUANTINIUM_MAIN_SCREEN}
        component={QuantiniumHomeScreen}
      />
      <Tab.Screen
        name={SCREENS_ENUM.PROFILE_MAIN_SCREEN}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export { BottomTabNavigator };
