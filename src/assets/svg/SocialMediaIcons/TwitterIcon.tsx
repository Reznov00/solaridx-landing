import * as React from 'react';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {Colors} from 'src/themes';

interface SVGPropsII extends SvgProps {
  size?: number;
}
const TwitterIcon = ({size = 5, ...props}: SVGPropsII) => (
  <Svg
    onPress={props.onPress}
    width={heightPercentageToDP(size)}
    height={heightPercentageToDP(size)}
    fill="none"
    {...props}
    viewBox="0 0 40 40">
    <Path
      fill={Colors.black}
      d="M0 20c0 11.046 8.954 20 20 20s20-8.954 20-20S31.046 0 20 0 0 8.954 0 20Z"
    />
    <Path
      fill={Colors.white}
      d="M21.903 18.469 29.348 10h-1.764l-6.465 7.353L15.956 10H10l7.808 11.12L10 30h1.764l6.828-7.765L24.044 30H30l-8.098-11.531Zm-2.417 2.748-.791-1.107L12.4 11.3h2.71l5.08 7.11.791 1.107 6.604 9.242h-2.71l-5.389-7.541Z"
    />
  </Svg>
);
export {TwitterIcon};
