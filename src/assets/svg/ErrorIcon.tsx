import * as React from 'react';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import Svg, {SvgProps, Path} from 'react-native-svg';

interface SVGPropsII extends SvgProps {
  size?: number;
}
const ErrorIcon = (props: SVGPropsII) => (
  <Svg
    onPress={props.onPress}
    width={
      props.size ? heightPercentageToDP(props.size) : heightPercentageToDP(4)
    }
    height={
      props.size
        ? heightPercentageToDP(props.size) * 1
        : heightPercentageToDP(4) * 1
    }
    fill="none"
    {...props}
    viewBox="0 0 22 22">
    <Path
      fill="#F35F5F"
      d="M20.889 10.222c0 5.524-4.478 10-10 10-5.523 0-10-4.476-10-10 0-5.52 4.477-10 10-10 5.522 0 10 4.48 10 10Zm-10 2.016a1.855 1.855 0 1 0 0 3.71 1.855 1.855 0 0 0 0-3.71ZM9.128 5.571l.299 5.484a.484.484 0 0 0 .483.457h1.957c.257 0 .47-.2.484-.457l.299-5.484a.484.484 0 0 0-.484-.51H9.611a.484.484 0 0 0-.483.51Z"
    />
  </Svg>
);
export {ErrorIcon};
