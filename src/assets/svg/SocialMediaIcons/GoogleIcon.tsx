import * as React from 'react';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Svg, { Path, SvgProps } from 'react-native-svg';

interface SVGPropsII extends SvgProps {
  size?: number;
}
const GoogleIcon = ({ size = 5, ...props }: SVGPropsII) => (
  <Svg
    onPress={props.onPress}
    width={heightPercentageToDP(size)}
    height={heightPercentageToDP(size)}
    fill="none"
    {...props}
    viewBox="-1.5 -0.5 23 23">
    <Path
      fill="#4285F4"
      fillRule="evenodd"
      d="M19.6 10.727c0-.709-.064-1.39-.182-2.045H10v3.868h5.382a4.6 4.6 0 0 1-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.35Z"
      clipRule="evenodd"
    />
    <Path
      fill="#34A853"
      fillRule="evenodd"
      d="M10 20.5c2.7 0 4.964-.896 6.618-2.423l-3.232-2.509c-.895.6-2.04.955-3.386.955-2.604 0-4.809-1.76-5.595-4.123H1.064v2.59A9.996 9.996 0 0 0 10 20.5Z"
      clipRule="evenodd"
    />
    <Path
      fill="#FBBC05"
      fillRule="evenodd"
      d="M4.405 12.4c-.2-.6-.314-1.24-.314-1.9 0-.659.114-1.3.314-1.9V6.01H1.064A9.996 9.996 0 0 0 0 10.5c0 1.614.386 3.141 1.064 4.491l3.34-2.59Z"
      clipRule="evenodd"
    />
    <Path
      fill="#EA4335"
      fillRule="evenodd"
      d="M10 4.477c1.468 0 2.787.505 3.823 1.496l2.868-2.868C14.959 1.49 12.696.5 10.001.5 6.09.5 2.708 2.74 1.063 6.01l3.34 2.59C5.192 6.236 7.397 4.477 10 4.477Z"
      clipRule="evenodd"
    />
  </Svg>
);
export { GoogleIcon };
