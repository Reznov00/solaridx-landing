import * as React from 'react';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {Colors} from 'src/themes';

interface SVGPropsII extends SvgProps {
  size?: number;
}
const MinusIcon = ({size = 5, ...props}: SVGPropsII) => (
  <Svg
    onPress={props.onPress}
    width={heightPercentageToDP(size)}
    height={heightPercentageToDP(size)}
    fill="none"
    {...props}
    viewBox="0.7 0.5 23 23">
    <Path
      stroke={props.color ?? Colors.fontTertiary}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.42 22.5c5.5 0 10-4.5 10-10s-4.5-10-10-10-10 4.5-10 10 4.5 10 10 10ZM8.42 12.5h8"
    />
  </Svg>
);
export {MinusIcon};
