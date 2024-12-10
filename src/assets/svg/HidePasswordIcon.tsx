import * as React from 'react';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {Colors} from 'src/themes';

interface SVGPropsII extends SvgProps {
  size?: number;
}
const HidePasswordIcon = ({size = 5, ...props}: SVGPropsII) => (
  <Svg
    {...props}
    width={heightPercentageToDP(size)}
    height={heightPercentageToDP(size)}
    viewBox="0 0 23 20"
    fill="none">
    <Path
      stroke={props.color ? props.color : Colors.designPrimary}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.743 3.092C10.149 3.032 10.569 3 11 3c5.105 0 8.455 4.505 9.58 6.287.137.215.205.323.243.49.029.125.029.322 0 .447-.038.166-.107.274-.244.492-.3.474-.757 1.141-1.363 1.865M5.724 4.715c-2.162 1.467-3.63 3.504-4.303 4.57-.137.217-.205.325-.243.491a1.173 1.173 0 0 0 0 .447c.038.167.106.274.242.49C2.546 12.495 5.895 17 11 17c2.059 0 3.832-.732 5.289-1.723M2 1l18 18M8.88 7.879a3 3 0 1 0 4.243 4.243"
    />
  </Svg>
);
export {HidePasswordIcon};
