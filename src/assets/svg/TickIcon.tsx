import * as React from 'react';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import Svg, {SvgProps, Path} from 'react-native-svg';
interface SVGPropsII extends SvgProps {
  size?: number;
}

const TickIcon = (props: SVGPropsII) => (
  <Svg
    onPress={props.onPress}
    width={
      props.size ? heightPercentageToDP(props.size) : heightPercentageToDP(5)
    }
    height={
      props.size
        ? heightPercentageToDP(props.size) * 1
        : heightPercentageToDP(5) * 1
    }
    fill="none"
    {...props}
    viewBox="0 0 23 23">
    <Path
      stroke={props.color ?? '#fff'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M20 6 9 17l-5-5"
    />
  </Svg>
);
export {TickIcon};
