import React from 'react';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  measure,
  runOnJS,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { ColorsType } from 'src/interfaces';
import { Colors } from 'src/themes';

interface TouchableProps {
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  onTap?: () => void;
  children: React.ReactNode;
  ripple?: boolean;
  rippleColor?: ColorsType;
  opaque?: boolean;
  disabled?: boolean;
  scaleTo?: number;
  shadowOpacity?: number;
}

const Touchable = ({
  style,
  onTap,
  children,
  contentContainerStyle,
  ripple = false,
  opaque = false,
  disabled = false,
  scaleTo = 1,
  shadowOpacity = 0.2,
  rippleColor,
}: TouchableProps) => {
  const centerX = useSharedValue(0);
  const centerY = useSharedValue(0);
  const scale = useSharedValue(0);

  const aRef = useAnimatedRef<View>();
  const width = useSharedValue(0);
  const height = useSharedValue(0);

  const rippleOpacity = useSharedValue(1);

  const tapGesture = Gesture.Tap()
    .onStart(tapEvent => {
      if (ripple) {
        const layout = measure(aRef);
        width.value = layout?.width ?? 0;
        height.value = layout?.height ?? 0;
        centerX.value = tapEvent.x;
        centerY.value = tapEvent.y;

        rippleOpacity.value = 1;
        scale.value = 0;
        scale.value = withTiming(scaleTo ?? 1, { duration: 1000 });
      }
    })
    .onEnd(() => {
      if (onTap && !disabled) runOnJS(onTap)();

      if (ripple) {
        rippleOpacity.value = withTiming(0);
      }
    });

  const rStyle = useAnimatedStyle(() => {
    if (!ripple) return {};

    const circleRadius = Math.sqrt(width.value ** 2 + height.value ** 2);

    const translateX = centerX.value - circleRadius;
    const translateY = centerY.value - circleRadius;

    return {
      width: circleRadius * 2,
      height: circleRadius * 2,
      borderRadius: circleRadius,
      opacity: rippleOpacity.value,
      backgroundColor: rippleColor ? Colors[rippleColor] : Colors.gray,
      position: 'absolute',
      top: 0,
      left: 0,
      transform: [{ translateX }, { translateY }, { scale: scale.value }],
    };
  });

  return (
    <View
      ref={aRef}
      style={[
        {
          shadowRadius: 20,
          shadowColor: 'black',
          shadowOpacity: shadowOpacity,
          shadowOffset: { width: 0, height: 0 },
          elevation: 2,
        },
        style,
      ]}>
      {opaque ? (
        <TouchableOpacity onPress={onTap} disabled={disabled}>
          <View style={[contentContainerStyle, { overflow: 'hidden' }]}>
            <View>{children}</View>
          </View>
        </TouchableOpacity>
      ) : (
        <GestureDetector gesture={tapGesture} touchAction="none">
          <Animated.View style={[contentContainerStyle, { overflow: 'hidden' }]}>
            {children}
            {ripple && <Animated.View style={[rStyle, { overflow: 'hidden' }]} />}
          </Animated.View>
        </GestureDetector>
      )}
    </View>
  );
};

export { Touchable };
