import * as React from 'react';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import Svg, {Path, SvgProps} from 'react-native-svg';

interface SVGPropsII extends SvgProps {
  size?: number;
}
const WhatsappIcon = ({size = 5, ...props}: SVGPropsII) => (
  <Svg
    onPress={props.onPress}
    width={heightPercentageToDP(size)}
    height={heightPercentageToDP(size)}
    fill="none"
    {...props}
    viewBox="0 0 40 40">
    <Path
      fill="#25D366"
      d="M0 20c0 11.046 8.954 20 20 20s20-8.954 20-20S31.046 0 20 0 0 8.954 0 20Z"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M27 12.875C25.125 11 22.625 10 20 10c-5.5 0-10 4.5-10 10 0 1.75.5 3.5 1.375 5L10 30l5.25-1.375c1.5.75 3.125 1.25 4.75 1.25 5.5 0 10-4.5 10-10 0-2.625-1.125-5.125-3-7ZM20 28.25c-1.5 0-3-.375-4.25-1.125L15.5 27l-3.125.875.875-3L13 24.5c-.875-1.375-1.25-2.875-1.25-4.375 0-4.5 3.75-8.25 8.25-8.25 2.25 0 4.25.875 5.875 2.375 1.625 1.625 2.375 3.625 2.375 5.875 0 4.375-3.625 8.125-8.25 8.125ZM24.5 22c-.25-.125-1.5-.75-1.75-.75-.25-.125-.375-.125-.5.125s-.625.75-.75 1c-.125.125-.25.125-.5.125-.25-.125-1-.375-2-1.25-.75-.625-1.25-1.5-1.375-1.75s0-.375.125-.5l.375-.375c.125-.125.125-.25.25-.375s0-.25 0-.375-.5-1.375-.75-1.875c-.125-.375-.375-.375-.5-.375h-.5c-.125 0-.375 0-.625.25s-.875.875-.875 2.125.875 2.375 1 2.625c.125.125 1.75 2.75 4.25 3.75 2.125.875 2.5.625 3 .625s1.5-.625 1.625-1.125c.25-.625.25-1.125.125-1.125-.125-.625-.375-.625-.625-.75Z"
      clipRule="evenodd"
    />
  </Svg>
);
export {WhatsappIcon};
