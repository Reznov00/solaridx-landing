import React, { Fragment } from 'react';
import { TouchableOpacity, type StyleProp, type ViewStyle } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type TouchableProps = {
  children?: React.ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean
};

const Touchable: React.FC<TouchableProps> = ({
  children,
  onPress,
  style,
  disabled = false
}) => {
  const scale = useSharedValue(1);

  const gesture = Gesture.Tap()
    .maxDuration(10000)
    .onTouchesDown(() => {
      if (!disabled) scale.value = withTiming(0.8);
    })
    .onTouchesUp(() => {
      if (onPress && !disabled) {
        runOnJS(onPress)();
      }
    })
    .onFinalize(() => {
      if (!disabled) scale.value = withTiming(1);
    }).runOnJS(true);

  const rButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  }, []);
  return (
    <Fragment>
      {true ? <GestureDetector key={`gesture-6766`} gesture={gesture}>
        <Animated.View style={[style, rButtonStyle]}>{children}</Animated.View>
      </GestureDetector>
        :
        <TouchableOpacity onPress={onPress} disabled={disabled}>
          <Animated.View style={[style, rButtonStyle]}>{children}</Animated.View>
        </TouchableOpacity>
      }
    </Fragment>
  );
};

export { Touchable };

