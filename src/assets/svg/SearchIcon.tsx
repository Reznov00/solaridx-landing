import * as React from 'react';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { Colors } from 'src/themes';

interface SVGPropsII extends SvgProps {
  size?: number;
}
const SearchIcon = ({ size = 5, ...props }: SVGPropsII) => (
  <Svg
    onPress={props.onPress}
    width={heightPercentageToDP(size)}
    height={heightPercentageToDP(size)}
    fill="none"
    {...props}
    viewBox="0 0 30 30">
    <Path
      stroke={props.color ?? Colors.gray_900}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.375 26.75c6.558 0 11.875-5.317 11.875-11.875S20.933 3 14.375 3 2.5 8.317 2.5 14.875 7.817 26.75 14.375 26.75ZM27.5 28 25 25.5"
    />
  </Svg>
);
export { SearchIcon };
