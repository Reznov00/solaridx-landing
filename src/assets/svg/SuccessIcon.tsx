import * as React from 'react';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import Svg, {SvgProps, Path} from 'react-native-svg';

interface SVGPropsII extends SvgProps {
  size?: number;
}
const SuccessIcon = (props: SVGPropsII) => (
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
    viewBox="-0.5 0 21 21">
    <Path
      fill="#59DF32"
      d="M19.799 10.111c0 5.35-4.337 9.688-9.688 9.688-5.35 0-9.687-4.338-9.687-9.688C.424 4.761 4.76.424 10.11.424S19.8 4.76 19.8 10.11ZM8.99 15.241l7.187-7.188a.625.625 0 0 0 0-.884l-.884-.884a.625.625 0 0 0-.883 0l-5.862 5.862L5.812 9.41a.625.625 0 0 0-.884 0l-.884.884a.625.625 0 0 0 0 .884l4.063 4.063c.244.244.64.244.884 0Z"
    />
  </Svg>
);
export {SuccessIcon};
