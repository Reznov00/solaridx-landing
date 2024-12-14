import * as React from 'react';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { Colors } from 'src/themes';

interface SVGPropsII extends SvgProps {
  size?: number;
}
const ShareIcon = ({ size = 5, ...props }: SVGPropsII) => (
  <Svg
    onPress={props.onPress}
    width={heightPercentageToDP(size)}
    height={heightPercentageToDP(size)}
    fill="none"
    {...props}
    viewBox="0 0 40 40">
    <Path
      fill={props.color ?? Colors.borderColour}
      d="M0 20c0 11.046 8.954 20 20 20s20-8.954 20-20S31.046 0 20 0 0 8.954 0 20Z"
    />
    <Path
      fill={props.color ?? Colors.gray_900}
      d="M22.969 22.813a3.507 3.507 0 0 0-2.516 1.062l-4.051-2.604a3.498 3.498 0 0 0 0-2.542l4.051-2.604a3.516 3.516 0 1 0-.76-1.182l-4.053 2.604a3.516 3.516 0 1 0 0 4.906l4.052 2.604a3.516 3.516 0 1 0 3.277-2.244Zm0-11.25a2.11 2.11 0 1 1 0 4.218 2.11 2.11 0 0 1 0-4.219Zm-9.844 10.546a2.11 2.11 0 1 1 0-4.218 2.11 2.11 0 0 1 0 4.218Zm9.844 6.328a2.11 2.11 0 1 1 0-4.218 2.11 2.11 0 0 1 0 4.218Z"
    />
  </Svg>
);
export { ShareIcon };
