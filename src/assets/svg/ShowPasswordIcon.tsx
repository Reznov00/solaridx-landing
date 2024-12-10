import {Colors} from 'src/themes';
import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {heightPercentageToDP} from 'react-native-responsive-screen';

interface SVGPropsII extends SvgProps {
  size?: number;
}
const ShowPasswordIcon = ({size = 5, ...props}: SVGPropsII) => (
  <Svg
    {...props}
    width={heightPercentageToDP(size)}
    height={heightPercentageToDP(size)}
    viewBox="0.5 0.7 17 10"
    fill="none">
    <Path
      stroke={props.color ? props.color : Colors.designPrimary}
      strokeMiterlimit={10}
      strokeWidth={1}
      d="M11.39 6.277a2.472 2.472 0 1 1-4.944 0 2.472 2.472 0 0 1 4.944 0Zm4.78 0S14.4 1.333 8.917 1.333 1.667 6.277 1.667 6.277s1.768 4.943 7.251 4.943c5.484 0 7.251-4.943 7.251-4.943Z"
    />
  </Svg>
);
export {ShowPasswordIcon};
