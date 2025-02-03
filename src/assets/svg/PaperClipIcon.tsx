import * as React from 'react';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { Colors } from 'src/themes';

interface SVGPropsII extends SvgProps {
  size?: number;
}
const PaperClipIcon = ({ size = 5, ...props }: SVGPropsII) => (
  <Svg
    onPress={props.onPress}
    width={heightPercentageToDP(size)}
    height={heightPercentageToDP(size)}
    fill="none"
    {...props}
    viewBox="0 0 24 24"
  >
    <Path
      d="m5.23 8.73 3.95-3.95a6.1 6.1 0 0 1 8.61 0h0a6.09 6.09 0 0 1 0 8.6l-6.43 6.43a4 4 0 0 1-5.74 0h0a4.06 4.06 0 0 1 0-5.73l6.74-6.74a2 2 0 0 1 2.87 0h0a2 2 0 0 1 0 2.87l-7 7"
      fill="none"
      stroke={props.color ?? Colors.gray_900}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </Svg>
);
export { PaperClipIcon };
