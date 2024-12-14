import * as React from 'react';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Svg, { Path, SvgProps } from 'react-native-svg';

interface SVGPropsII extends SvgProps {
  size?: number;
}
const AppleIcon = ({ size = 5, ...props }: SVGPropsII) => (
  <Svg
    width={heightPercentageToDP(size)}
    height={heightPercentageToDP(size)}
    {...props}
    viewBox="1.5 1.5 21 21">
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M18.71 19.5C17.88 20.74 17 22 15.66 22s-1.77-.79-3.29-.79-2 .77-3.27.82-2.3-1.35-3.1-2.56c-1.71-2.47-3-7-1.26-10.08a4.88 4.88 0 0 1 4.08-2.51c1.28 0 2.5.87 3.29.87s2.26-1.07 3.81-.91a4.64 4.64 0 0 1 3.64 2 4.56 4.56 0 0 0-2.15 3.81 4.41 4.41 0 0 0 2.68 4 11.05 11.05 0 0 1-1.38 2.83M13 3.5A4.55 4.55 0 0 1 15.94 2a4.38 4.38 0 0 1-1 3.19 3.65 3.65 0 0 1-3 1.42A4.27 4.27 0 0 1 13 3.5Z" />
  </Svg >
);
export { AppleIcon };
