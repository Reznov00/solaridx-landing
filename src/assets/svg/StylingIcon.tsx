import * as React from 'react';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {Colors} from 'src/themes';

interface SVGPropsII extends SvgProps {
  size?: number;
}
const StylingIcon = ({size = 5, ...props}: SVGPropsII) => (
  <Svg
    onPress={props.onPress}
    width={heightPercentageToDP(size)}
    height={heightPercentageToDP(size)}
    fill="none"
    {...props}
    viewBox="0 -1 25 25">
    <Path
      stroke={props.color ?? Colors.white}
      fill={props.color ?? Colors.white}
      d="M23.147 16.05 13.75 9l2.2-1.65a.75.75 0 0 0 .3-.6 3.75 3.75 0 0 0-7.5 0 .75.75 0 0 0 1.5 0 2.25 2.25 0 0 1 4.47-.354L12.064 8.39l-.026.02-10.184 7.64a1.5 1.5 0 0 0 .897 2.7h19.5a1.5 1.5 0 0 0 .9-2.7h-.003Zm-.897 1.2H2.75l9.75-7.313 9.75 7.313Z"
    />
  </Svg>
);
export {StylingIcon};
