import * as React from 'react';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {Colors} from 'src/themes';

interface SVGPropsII extends SvgProps {
  size?: number;
}
const DressIcon = ({size = 5, ...props}: SVGPropsII) => (
  <Svg
    onPress={props.onPress}
    width={heightPercentageToDP(size)}
    height={heightPercentageToDP(size)}
    fill="none"
    {...props}
    viewBox="0.7 0.5 23 23">
    <Path
      fill={props.color ?? Colors.white}
      stroke={props.color ?? Colors.white}
      d="M20.628 19.66a.182.182 0 0 0-.01-.024l-4.264-9.08 1.922-3.018a1.5 1.5 0 0 0 .01-1.56c-.008-.015-.019-.03-.028-.044L16.25 3.066V.75a.75.75 0 1 0-1.5 0v2.29l-.493.616a2.25 2.25 0 0 1-3.514 0l-.493-.617V.75a.75.75 0 1 0-1.5 0v2.316L6.742 5.934l-.028.044a1.5 1.5 0 0 0 .01 1.56l1.922 3.017-4.264 9.08A1.5 1.5 0 0 0 5.75 21.75h13.5a1.5 1.5 0 0 0 1.379-2.09ZM8 6.75l1.54-2.197.031.04a3.75 3.75 0 0 0 5.858 0l.03-.04L17 6.75l-1.91 3H9.911L8 6.75Zm-2.25 13.5 4.225-9h5.048l4.227 9H5.75Z"
    />
  </Svg>
);
export {DressIcon};
