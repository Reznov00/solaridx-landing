import * as React from 'react';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { Colors } from 'src/themes';

interface SVGPropsII extends SvgProps {
  size?: number;
}
const EditIcon = ({ size = 5, ...props }: SVGPropsII) => (
  <Svg
    onPress={props.onPress}
    width={heightPercentageToDP(size)}
    height={heightPercentageToDP(size)}
    fill="none"
    {...props}
    viewBox="0.7 0.5 23 23">
    <Path
      stroke={props.color ?? Colors.gray_900}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m13.76 3.6-8.21 8.69c-.31.33-.61.98-.67 1.43l-.37 3.24c-.13 1.17.71 1.97 1.87 1.77l3.22-.55c.45-.08 1.08-.41 1.39-.75l8.21-8.69c1.42-1.5 2.06-3.21-.15-5.3-2.2-2.07-3.87-1.34-5.29.16Z"
    />
    <Path
      stroke={props.color ?? Colors.gray_900}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12.39 5.05a6.126 6.126 0 0 0 5.45 5.15M3.5 22h18"
    />
  </Svg>
);
export { EditIcon };
