import React, { memo, useRef, useState } from 'react';
import Animated, {
  interpolateColor,
  useAnimatedProps,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import Svg, { Path } from 'react-native-svg';
import { Colors } from 'src/themes';

interface CustomCheckBoxProps {
  checked: boolean;
  size: number;
}

const CustomCheckBox = memo<CustomCheckBoxProps>(props => {
  const { checked, size = 5 } = props;

  const progress = useDerivedValue(() => withTiming(checked ? 1 : 0, { duration: 300 }));


  const [pathLength, setPathLength] = useState(0);
  const pathRef = useRef<Path>(null);

  const AnimatedPath = Animated.createAnimatedComponent(Path);

  const animatedColorProps = useAnimatedProps(() => {
    const fill = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.white, Colors.primary_600],
    );
    const stroke = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.primary_600, Colors.primary_600],
    );
    return { fill, stroke };
  });
  const animatedCheckMarkProps = useAnimatedProps(() => {
    const strokeDashoffset = pathLength - pathLength * progress.value;
    return { strokeDashoffset };
  });

  return (
    <Svg
      width={widthPercentageToDP(size)}
      height={widthPercentageToDP(size)}
      viewBox="0 0 49 49"
      onLayout={() => {
        if (pathRef.current) {
          const length = pathRef.current.getTotalLength() || 0;
          setPathLength(length);
        }
      }}>
      <AnimatedPath
        animatedProps={animatedColorProps}
        d="M2 16C2 8.26801 8.26801 2 16 2H33C40.732 2 47 8.26801 47 16V33C47 40.732 40.732 47 33 47H16C8.26801 47 2 40.732 2 33V16Z"
        strokeWidth={4}
      />
      {/* Checkmark */}
      <AnimatedPath
        animatedProps={animatedCheckMarkProps}
        ref={pathRef}
        d="M12 24.4068L20.6667 32.9999L36.5 17.1667"
        stroke={'#fff'}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={pathLength}
        fill="none"
      />
    </Svg>
  );
});

export { CustomCheckBox };
