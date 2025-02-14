import * as React from 'react';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { Colors } from 'src/themes';

interface SVGPropsII extends SvgProps {
  size?: number;
}
const LogoutIcon = ({ size = 5, ...props }: SVGPropsII) => (
  <Svg
    width={heightPercentageToDP(size)}
    height={heightPercentageToDP(size)}
    fill="none"
    {...props}
    viewBox="0 0 24 24">
    <Path
      stroke={props.color ?? Colors.white}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M9.4 7.56c.31-3.6 2.16-5.07 6.21-5.07h.13c4.47 0 6.26 1.79 6.26 6.26v6.52c0 4.47-1.79 6.26-6.26 6.26h-.13c-4.02 0-5.87-1.45-6.2-4.99M15.5 12H4.12M6.35 8.65 3 12l3.35 3.35"
    />
  </Svg>
);
export { LogoutIcon };
