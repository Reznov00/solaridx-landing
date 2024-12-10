import * as React from 'react';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { Colors } from 'src/themes';

interface SVGPropsII extends SvgProps {
  size?: number;
}
const CopyIcon = ({ size = 5, ...props }: SVGPropsII) => (
  <Svg
    onPress={props.onPress}
    width={heightPercentageToDP(size)}
    height={heightPercentageToDP(size)}
    fill="none"
    {...props}
    viewBox="0 0 25 25">
    <Path
      fill={props.color ?? Colors.white}
      fillRule="evenodd"
      d="M19.5 16.5v-12l-.75-.75H9l-.75.75v3h-3l-.75.75v12l.75.75H15l.75-.75v-3h3l.75-.75Zm-3.75-.75v-7.5L15 7.5H9.75V5.25H18v10.5h-2.25ZM6 9h8.25v10.5H6V9Z"
      clipRule="evenodd"
    />
  </Svg>
);
export { CopyIcon };
