import * as React from 'react';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {Colors} from 'src/themes';

interface SVGPropsII extends SvgProps {
  size?: number;
}
const BackArrowIcon = ({size = 5, ...props}: SVGPropsII) => (
  <Svg
    onPress={props.onPress}
    width={heightPercentageToDP(size)}
    height={heightPercentageToDP(size)}
    fill="none"
    {...props}
    viewBox="0.5 0.5 19 19">
    <Path
      stroke={props.color ?? Colors.white}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.167 10H1.833m0 0L10 18.166M1.833 10 10 1.833"
    />
  </Svg>
);
export {BackArrowIcon};
