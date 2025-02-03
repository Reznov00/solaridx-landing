import * as React from 'react';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Svg, { G, Path, SvgProps } from 'react-native-svg';
import { Colors } from 'src/themes';

interface SVGPropsII extends SvgProps {
  size?: number;
}
const MicrophoneIcon = ({ size = 5, ...props }: SVGPropsII) => (
  <Svg
    width={heightPercentageToDP(size)}
    height={heightPercentageToDP(size)}
    fill="none"
    {...props}
    viewBox="0 0 24 24">
    <G fill={props.color ?? Colors.white}>
      <Path
        fillRule="evenodd"
        d="M14.5 10.5v-5a2.5 2.5 0 0 0-5 0v5a2.5 2.5 0 0 0 5 0ZM12 1a4.5 4.5 0 0 0-4.5 4.5v5a4.5 4.5 0 1 0 9 0v-5A4.5 4.5 0 0 0 12 1Z"
        clipRule="evenodd"
      />
      <Path d="M12 17c-6.5 0-6-5-6-5s0-1-1-1-1 1-1 1-.46 6.438 7 6.966V22a1 1 0 1 0 2 0v-3.034C20.46 18.438 20 12 20 12s0-1-1-1-1 1-1 1 .5 5-6 5Z" />
    </G>
  </Svg>
);
export { MicrophoneIcon };
