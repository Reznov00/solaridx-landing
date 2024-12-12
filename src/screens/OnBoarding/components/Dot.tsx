import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP } from 'react-native-responsive-screen';

interface DotProps {
  index: number;
  activeDotIndex: SharedValue<number>;
}
const WIDTH_BEFORE = widthPercentageToDP(2.5);
const WIDTH_AFTER = widthPercentageToDP(7);

const Dot = ({ activeDotIndex, index }: DotProps) => {
  const rDotStyle = useAnimatedStyle(() => {
    const isActive = activeDotIndex.value === index;
    return {
      backgroundColor: withTiming('white', {
        duration: 200,
      }),
      width: withTiming(isActive ? WIDTH_AFTER : WIDTH_BEFORE, {
        duration: 200,
      }),
    };
  });

  return (
    <Animated.View style={[styles.dot, rDotStyle]} />
  );
};

const styles = StyleSheet.create({
  dot: {
    width: widthPercentageToDP(2.5),
    height: widthPercentageToDP(2.5),
    marginHorizontal: widthPercentageToDP(1),
    borderRadius: RFValue(100),
    padding: widthPercentageToDP(0.8),
    borderWidth: 1,
    overflow: 'hidden',
  },
});

export { Dot };
