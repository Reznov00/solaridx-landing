import * as React from 'react';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Svg, { Path, Rect, SvgProps } from 'react-native-svg';

interface SVGPropsII extends SvgProps {
  size?: number;
}
const FacebookIcon = ({ size = 5, ...props }: SVGPropsII) => (
  <Svg
    onPress={props.onPress}
    width={heightPercentageToDP(size)}
    height={heightPercentageToDP(size)}
    fill="none"
    {...props}
    viewBox="0 0 24 24">
    <Rect width={24} height={24} fill="#1877F2" rx={6} />
    <Path
      fill="#fff"
      d="M16.671 15.469 17.203 12h-3.328V9.75c0-.95.464-1.875 1.955-1.875h1.514V4.922s-1.374-.234-2.686-.234c-2.742 0-4.533 1.661-4.533 4.668V12H7.078v3.469h3.047v8.386a12.071 12.071 0 0 0 3.75 0v-8.386h2.796Z"
    />
  </Svg>
);
export { FacebookIcon };
