import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React, { Fragment } from 'react';
import { SCREENS_ENUM } from 'src/enums';
import { BottomTabParamList } from 'src/interfaces';
import { LearningScreen, HomeScreen, ProfileScreen } from 'src/screens';
import { CustomBottomTab } from './CustomBottomTab';

const CustomBottomTabs = (props: BottomTabBarProps) => {
  return <CustomBottomTab {...props} />;
};

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator<BottomTabParamList>();
  return (
    <Fragment>
      <Tab.Navigator
        tabBar={CustomBottomTabs}
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          name={SCREENS_ENUM.HOME_MAIN_SCREEN}
          component={HomeScreen}
        // options={{ unmountOnBlur: true }}
        />
        <Tab.Screen
          name={SCREENS_ENUM.LEARNING_MAIN_SCREEN}
          component={LearningScreen}
        // options={{ unmountOnBlur: true }}
        />
        <Tab.Screen
          name={SCREENS_ENUM.PROFILE_MAIN_SCREEN}
          component={ProfileScreen}
        // options={{ unmountOnBlur: true }}
        />
      </Tab.Navigator>
    </Fragment>
  );
};

export { BottomTabNavigator };
