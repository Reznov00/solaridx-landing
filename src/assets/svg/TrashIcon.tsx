import * as React from 'react';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { Colors } from 'src/themes';

interface SVGPropsII extends SvgProps {
  size?: number;
}

const TrashIcon = ({ size = 5, ...props }: SVGPropsII) => (
  <Svg
    width={heightPercentageToDP(size)}
    height={heightPercentageToDP(size)}
    fill="none"
    {...props}
    viewBox="-1 0 26 26">

    <Path
      stroke={props.stroke ?? Colors.gray_900}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={props.strokeWidth ?? 2.8}
      d="M16.667 6v-.933c0-1.307 0-1.96-.255-2.46a2.333 2.333 0 0 0-1.02-1.02c-.498-.254-1.152-.254-2.459-.254h-1.866c-1.307 0-1.96 0-2.46.255-.439.224-.796.58-1.02 1.02-.254.499-.254 1.152-.254 2.459V6M1.5 6h21m-2.333 0v13.067c0 1.96 0 2.94-.382 3.689a3.5 3.5 0 0 1-1.53 1.53c-.748.38-1.728.38-3.688.38H9.433c-1.96 0-2.94 0-3.689-.38a3.5 3.5 0 0 1-1.53-1.53c-.38-.749-.38-1.729-.38-3.69V6"
    />
  </Svg>
);
export { TrashIcon };
