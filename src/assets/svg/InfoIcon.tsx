import * as React from 'react';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import Svg, {SvgProps, Path} from 'react-native-svg';

interface SVGPropsII extends SvgProps {
  size?: number;
  v2?: boolean;
}
const InfoIcon = ({size = 5, v2, ...props}: SVGPropsII) => (
  <>
    {!v2 ? (
      <Svg
        onPress={props.onPress}
        width={heightPercentageToDP(size)}
        height={heightPercentageToDP(size)}
        fill="none"
        {...props}
        viewBox="-0.5 0 21 21">
        <Path
          fill="#917AEB"
          d="M10 .313a9.687 9.687 0 1 0 0 19.375A9.687 9.687 0 0 0 19.688 10C19.688 4.652 15.35.312 10 .312Zm0 4.296a1.64 1.64 0 1 1 0 3.282 1.64 1.64 0 0 1 0-3.282Zm2.188 9.922c0 .26-.21.469-.47.469H8.282a.469.469 0 0 1-.469-.469v-.937c0-.26.21-.469.47-.469h.468v-2.5h-.469a.469.469 0 0 1-.469-.469V9.22c0-.26.21-.469.47-.469h2.5c.258 0 .468.21.468.469v3.906h.469c.259 0 .469.21.469.469v.937Z"
        />
      </Svg>
    ) : (
      <Svg
        width={heightPercentageToDP(size)}
        height={heightPercentageToDP(size)}
        fill="none"
        viewBox="0 0 51 51"
        {...props}>
        <Path
          fill="#9E8AEE"
          d="M50.167 25.083c0 13.853-11.23 25.084-25.084 25.084C11.23 50.167 0 38.937 0 25.083 0 11.23 11.23 0 25.083 0c13.853 0 25.084 11.23 25.084 25.083Z"
        />
        <Path
          fill="#fff"
          d="M25.083 39.506a1.881 1.881 0 0 0 1.882-1.88v-15.05a1.881 1.881 0 1 0-3.763 0v15.05c0 1.038.842 1.88 1.881 1.88ZM25.084 12.542a2.508 2.508 0 1 1 0 5.017 2.508 2.508 0 0 1 0-5.017Z"
        />
      </Svg>
    )}
  </>
);
export {InfoIcon};
