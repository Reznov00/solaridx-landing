import * as React from 'react';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { Colors } from 'src/themes';

interface SVGPropsII extends SvgProps {
  size?: number;
}
const ProfileIcon = ({ size = 5, ...props }: SVGPropsII) => (
  <Svg
    width={heightPercentageToDP(size)}
    height={heightPercentageToDP(size)}
    fill="none"
    {...props}
    viewBox="-3 -3 120 120">
    <Path
      stroke={props.color ?? Colors.gray_900}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={10}
      d="M20.354 95.672C23.598 88.028 31.173 82.667 40 82.667h32c8.827 0 16.402 5.36 19.647 13.005M77.333 42.667C77.333 54.449 67.783 64 56 64c-11.782 0-21.333-9.551-21.333-21.333 0-11.782 9.551-21.334 21.333-21.334 11.782 0 21.333 9.552 21.333 21.334Zm32 13.333c0 29.455-23.878 53.333-53.333 53.333S2.667 85.455 2.667 56 26.545 2.667 56 2.667 109.333 26.545 109.333 56Z"
    />
  </Svg>
);
export { ProfileIcon };
