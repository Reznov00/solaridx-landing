import React, {Fragment} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Colors} from 'src/themes';

interface Props {
  isOpen: SharedValue<boolean>;
  toggleSheet: () => void;
  duration?: number;
  children: React.ReactElement;
}
const BottomSheet = ({
  isOpen,
  toggleSheet,
  duration = 500,
  children,
}: Props) => {
  const height = useSharedValue(0);
  const progress = useDerivedValue(() =>
    withTiming(isOpen.value ? 0 : 1, {duration}),
  );

  const sheetStyle = useAnimatedStyle(() => ({
    transform: [{translateY: progress.value * 2 * height.value}],
  }));

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: 1 - progress.value,
    zIndex: isOpen.value
      ? 1
      : withDelay(duration, withTiming(-1, {duration: 0})),
  }));

  return (
    <Fragment>
      <Animated.View style={[sheetStyles.backdrop, backdropStyle]}>
        <TouchableOpacity style={{flex: 1}} onPress={toggleSheet} />
      </Animated.View>

      <Animated.View
        onLayout={e => {
          height.value = e.nativeEvent.layout.height;
        }}
        style={[
          sheetStyles.sheet,
          sheetStyle,
          {backgroundColor: Colors.white},
        ]}>
        {children}
      </Animated.View>
    </Fragment>
  );
};

export {BottomSheet};

const sheetStyles = StyleSheet.create({
  sheet: {
    paddingHorizontal: widthPercentageToDP(5),
    paddingVertical: heightPercentageToDP(2),
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: widthPercentageToDP(5),
    borderTopLeftRadius: widthPercentageToDP(5),
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
});
