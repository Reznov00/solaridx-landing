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
  const TAB_BAR_WIDTH = widthPercentageToDP(100);
  const SelectTabWidth = widthPercentageToDP(33.3);
  const HitSlop = widthPercentageToDP(5);

  const translateAnimation = useAnimatedStyle(() => {
    const translateXValue =
      state.index === 0 ? 0 : SelectTabWidth * state.index;

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


          return (
            <Animated.View key={index} >
              <Pressable
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                onPress={onPress}
                hitSlop={{
                  top: HitSlop,
                  left: HitSlop,
                  right: HitSlop,
                }}
                style={{ flex: 1 }}
              >
                <Animated.View style={[styles.contentContainer]}>
                  <BottomTabIcon route={routeName} isFocused={false} />
                  <Animated.Text style={[styles.barTextStyle]}>
                    {getRouteName(routeName)}
                  </Animated.Text>
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
    flexDirection: 'row',
    height: heightPercentageToDP(12),
    alignSelf: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
    elevation: 10,
    paddingHorizontal: widthPercentageToDP(10),
    // paddingBottom: heightPercentageToDP(3),
    paddingTop: heightPercentageToDP(2)
  },
  slidingTabContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  slidingTab: {
    width: '80%',
    height: '10%',
    borderRadius: widthPercentageToDP(1),
    backgroundColor: Colors.gray_600,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    gap: widthPercentageToDP(2),
    marginTop: heightPercentageToDP(0.5)
  },
  barTextStyle: {
    color: Colors.gray_900,
    fontSize: RFValue(14),
    fontFamily: 'FunnelDisplay-Bold',
  },
});
