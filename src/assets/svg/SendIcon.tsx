import * as React from 'react';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Svg, { SvgProps, Path, G } from 'react-native-svg';
import { Colors } from 'src/themes';

interface SVGPropsII extends SvgProps {
  size?: number;
}
const SendIcon = ({ size = 5, ...props }: SVGPropsII) => (
  <Svg
    onPress={props.onPress}
    width={heightPercentageToDP(size)}
    height={heightPercentageToDP(size)}
    fill="none"
    {...props}
    viewBox="-0.5 0 25 25"
  >
    <G
      stroke={props.color ?? Colors.white}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <Path d="M2.33 8.39C.25 11.82 9.42 14.9 9.42 14.9s3.08 9.17 6.51 7.09c3.64-2.22 8-15.86 5.12-18.72C18.17.41 4.55 4.75 2.33 8.39ZM15.2 9.12 9.42 14.9" />
    </G>
  </Svg>
);
export { SendIcon };
