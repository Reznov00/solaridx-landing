import * as React from 'react';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import Svg, {Path, SvgProps} from 'react-native-svg';

interface SVGPropsII extends SvgProps {
  size?: number;
}
const FacebookIcon = ({size = 5, ...props}: SVGPropsII) => (
  <Svg
    onPress={props.onPress}
    width={heightPercentageToDP(size)}
    height={heightPercentageToDP(size)}
    fill="none"
    {...props}
    viewBox="0 0 40 40">
    <Path
      fill="#1877F2"
      d="M0 20c0 11.046 8.954 20 20 20s20-8.954 20-20S31.046 0 20 0 0 8.954 0 20Z"
    />
    <Path
      fill="#fff"
      d="M30 20c0-5.5-4.5-10-10-10s-10 4.5-10 10c0 5 3.625 9.125 8.375 9.875v-7h-2.5V20h2.5v-2.25c0-2.5 1.5-3.875 3.75-3.875 1.125 0 2.25.25 2.25.25v2.5h-1.25c-1.25 0-1.625.75-1.625 1.5V20h2.75l-.5 2.875h-2.375V30c5-.75 8.625-5 8.625-10Z"
    />
  </Svg>
);
export {FacebookIcon};
