import * as React from 'react';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { Colors } from 'src/themes';

interface SVGPropsII extends SvgProps {
  size?: number;
}
const QuantiniumLogo = ({ size = 5, ...props }: SVGPropsII) => (
  <Svg
    onPress={props.onPress}
    width={heightPercentageToDP(size)}
    height={heightPercentageToDP(size)}
    fill="none"
    {...props}
    viewBox="0 0 824 824">
    <Path
      fill={props.color ?? Colors.gray_900}
      d="m170 155 1 3-11 19-9 21-8 23-6 26-3 21-1 17v17l2 26 4 22 5 20 8 23 15 31 11 18 14 18 9 11 10 11 8 7 12 11 19 14 15 9 14 8 20 9 19 7 22 6 29 5 9 1 20 1 337 1v175H379l-31-3-20-4-26-6-28-10-23-10-19-10-22-14-19-14-17-14-34-34-13-17-9-12-10-17-12-23-9-20-11-33-8-37-3-27v-55l2-23 5-25 6-25 9-27 6-16 8-16 10-18 14-21 10-13 12-14 11-12 10-10z"
    />
    <Path
      fill={props.color ?? Colors.gray_900}
      d="M391 66h33l28 3 38 8 27 9 25 11 20 10 23 14 19 14 13 11 10 9 13 12 13 14 9 11 8 10 13 18 14 24 11 22 8 20 8 24 7 28 3 25 1 14v50l-3 29-10 42-7 22-2 2-46 1-1-6-1-26-2-21-6-31-5-16-6-17-8-18-12-21-12-17-11-13-11-12-9-9-8-7-16-13-16-10-13-8-27-13-28-10-30-7-16-2-16-1h-36l-23 2-25 5-15 4-21 8-23 11-24 15-16 13-20 18-11 12-1 2h-2l-2 4-7 9-4 7-4-1-3-8-4-22-1-10v-40l4-24 6-24 8-22 8-17 9-16 8-11 9-12 12-13 14-14 13-10 16-11 22-12 16-7 15-5 27-6 22-3z"
    />
  </Svg>
);
export { QuantiniumLogo };
