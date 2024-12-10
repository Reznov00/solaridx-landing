/* eslint-disable react-native/no-inline-styles */
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { BottomTabTypes } from 'src/interfaces';
import { Colors } from 'src/themes';
import { BottomTabIcon } from './BottomTabIcon';

const CustomBottomTab = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const TAB_BAR_WIDTH = widthPercentageToDP(70);
  const SelectTabWidth = widthPercentageToDP(35);
  const NotSelectedTabWidth = widthPercentageToDP(17.5);

  const translateAnimation = useAnimatedStyle(() => {
    const translateXValue =
      state.index === 0 ? 0 : SelectTabWidth * state.index * 0.5;

    return {
      transform: [{ translateX: withTiming(translateXValue, { duration: 300 }) }],
    };
  });

  const getRouteName = (type: BottomTabTypes) => {
    switch (type) {
      case 'HOME_MAIN_SCREEN':
        return 'Home';
      case 'PROFILE_MAIN_SCREEN':
        return 'Profile';
      case 'HISTORY_MAIN_SCREEN':
        return 'History';
      default:
        return 'Home';
    }
  };

  return (
    <View style={styles.shadowContainer}>
      <View style={[styles.tabBarContainer, { width: TAB_BAR_WIDTH }]}>
        <Animated.View
          style={[
            styles.slidingTabContainer,
            { width: SelectTabWidth },
            translateAnimation,
          ]}>
          <View style={styles.slidingTab} />
        </Animated.View>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;
          const routeName = route.name as BottomTabTypes;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, { merge: true });
            }
          };

          const tabStyle = useAnimatedStyle(() => {
            return {
              width: withTiming(
                isFocused ? SelectTabWidth : NotSelectedTabWidth,
                { duration: 200 },
              ),
              opacity: withTiming(isFocused ? 1 : 0.8, { duration: 200 }),
            };
          });
          const textstyle = useAnimatedStyle(() => {
            return {
              opacity: withTiming(isFocused ? 1 : 0, { duration: 200 }),
            };
          });

          return (
            <Animated.View key={index} style={[tabStyle]}>
              <Pressable
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                onPress={onPress}
                style={{ flex: 1 }}>
                <Animated.View style={[styles.contentContainer]}>
                  <BottomTabIcon route={routeName} isFocused={isFocused} />
                  {isFocused && (
                    <Animated.Text style={[styles.barTextStyle, textstyle]}>
                      {getRouteName(routeName)}
                    </Animated.Text>
                  )}
                </Animated.View>
              </Pressable>
            </Animated.View>
          );
        })}
      </View>
    </View>
  );
};

export { CustomBottomTab };

const styles = StyleSheet.create({
  shadowContainer: {
    shadowRadius: 20,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 0 },
    elevation: 10,
  },
  tabBarContainer: {
    flex: 1,
    flexDirection: 'row',
    height: heightPercentageToDP(7),
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'space-between',
    bottom: heightPercentageToDP(3),
    overflow: 'hidden',
    elevation: 10,
  },
  slidingTabContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slidingTab: {
    width: '90%',
    height: '80%',
    borderRadius: 100,
    backgroundColor: Colors.designPrimary,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    gap: widthPercentageToDP(3),
  },
  barTextStyle: {
    color: Colors.white,
    fontSize: RFValue(14),
    fontFamily: 'FunnelDisplay-Bold',
  },
});
