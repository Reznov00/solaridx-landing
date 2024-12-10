import React, {useRef, useState} from 'react';
import Animated, {
  useAnimatedProps,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Svg, {Circle, Path} from 'react-native-svg';
import {Colors} from 'src/themes';

interface AnimatedTickMarkProps {
  checked: boolean;
  size: number;
}

const AnimatedTickMark = (props: AnimatedTickMarkProps) => {
  const {checked, size = 5} = props;
  const progress = useDerivedValue(() => withTiming(checked ? 1 : 0));

  const [pathLength, setPathLength] = useState(0);
  const pathRef = useRef<Path>(null);

  const AnimatedPath = Animated.createAnimatedComponent(Path);
  const AnimatedCircle = Animated.createAnimatedComponent(Circle);

  const animatedCheckMarkProps = useAnimatedProps(() => {
    const strokeDashoffset = pathLength - pathLength * progress.value;
    const opacity = progress.value;
    return {strokeDashoffset, opacity};
  });

  return (
    <Svg
      width={widthPercentageToDP(size ?? 5)}
      height={widthPercentageToDP(size ?? 5)}
      viewBox="-5 -5 110 110">
      <AnimatedCircle
        cx="50"
        cy="50"
        r="50"
        stroke={Colors.designPrimary}
        strokeWidth="7"
        fill={Colors.white}
      />
      <AnimatedPath
        animatedProps={animatedCheckMarkProps}
        onLayout={() =>
          setPathLength(pathRef.current!.getTotalLength() as number)
        }
        ref={pathRef}
        d="M42.0246 68.0843L28.1301 54.1986C27.6028 53.6704 27.3066 52.9546 27.3066 52.2082C27.3066 51.4619 27.6028 50.746 28.1301 50.2179L29.8182 48.5277C30.3464 48.0004 31.0622 47.7042 31.8085 47.7042C32.5549 47.7042 33.2707 48.0004 33.7989 48.5277L43.899 58.6213L67.6855 33.3439C68.1973 32.8008 68.9037 32.483 69.6496 32.4603C70.3956 32.4375 71.12 32.7117 71.664 33.2226L73.3976 34.8586C73.9413 35.3705 74.2595 36.0774 74.2822 36.8238C74.305 37.5703 74.0304 38.2952 73.5189 38.8393L46.0724 68.0215C45.814 68.2969 45.5028 68.5175 45.1574 68.6703C44.812 68.823 44.4394 68.9048 44.0618 68.9106C43.6842 68.9165 43.3092 68.8464 42.9593 68.7044C42.6093 68.5625 42.2914 68.3516 42.0246 68.0843V68.0843Z"
        stroke={Colors.designPrimary}
        strokeWidth="2"
        fill={Colors.designPrimary}
      />
    </Svg>
  );
};

export {AnimatedTickMark};
