import * as React from 'react';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { Colors } from 'src/themes';

interface SVGPropsII extends SvgProps {
  size?: number;
}
const ShoppingIcon = ({ size = 5, ...props }: SVGPropsII) => (
  <Svg
    onPress={props.onPress}
    width={heightPercentageToDP(size)}
    height={heightPercentageToDP(size)}
    fill="none"
    {...props}
    viewBox="0.7 0.5 23 23">
    <Path
      stroke={props.color ?? Colors.gray_900}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M7.5 8.17V7.2c0-2.25 1.81-4.46 4.06-4.67a4.5 4.5 0 0 1 4.94 4.48v1.38M9 22.5h6c4.02 0 4.74-1.61 4.95-3.57l.75-6c.27-2.44-.43-4.43-4.7-4.43H8c-4.27 0-4.97 1.99-4.7 4.43l.75 6c.21 1.96.93 3.57 4.95 3.57Z"
    />
    <Path
      stroke={props.color ?? Colors.gray_900}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.495 12.5h.01M8.495 12.5h.008"
    />
  </Svg>
);
export { ShoppingIcon };
