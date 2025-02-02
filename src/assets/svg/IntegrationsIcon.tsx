import * as React from 'react';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Svg, { SvgProps, G, Defs, Path, Circle } from "react-native-svg"
import { Colors } from 'src/themes';

interface SVGPropsII extends SvgProps {
  size?: number;
}
const IntegrationsIcon = ({ size = 5, ...props }: SVGPropsII) => (
  <Svg
    onPress={props.onPress}
    width={heightPercentageToDP(size)}
    height={heightPercentageToDP(size)}
    fill="none"
    {...props}
    viewBox="1 1 46 46"
  >
    <G id="SVGRepo_iconCarrier">
      <Defs></Defs>
      <Path
        stroke={props.color ?? Colors.gray_900}
        strokeWidth={3}
        d="M17.517 14.46a4.903 4.903 0 1 1 5.555.048" />
      <Path
        d="M8.14 25.647a4.903 4.903 0 1 1-.24 5.55"
        fill={'none'}
        stroke={props.stroke ?? Colors.gray_900}
        strokeWidth={3}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        stroke={props.color ?? Colors.gray_900}
        strokeWidth={3}
        d="M17.517 14.46c.33.614.266 1.66-1.29 1.846h-9.65v8.24a1.071 1.071 0 0 0 1.563 1.1M7.901 31.196a.95.95 0 0 0-1.324 1.087v7.93h20.5"
      />
      <Path
        stroke={props.color ?? Colors.gray_900}
        strokeWidth={3}
        d="m18.806 34.453 2.552 4.44c3.068-1.814 6.202.008 6.202 3.567h5.097c0-3.559 2.838-5.214 6.216-3.559l2.553-4.45c-3.149-1.807-3.151-5.338 0-7.15l-2.553-4.437c-3.035 1.802-6.216.004-6.216-3.572H27.56c0 3.576-3.133 5.374-6.204 3.576l-2.55 4.353c3.228 1.89 3.04 5.485 0 7.232Z"
      />
      <Circle stroke={props.color ?? Colors.gray_900}
        strokeWidth={3} cx={30.116} cy={30.876} r={4.168} />
      <Path
        stroke={props.color ?? Colors.gray_900}
        strokeWidth={3}
        d="M23.072 14.508c-.468.376-.58 1.608 1.186 1.798h8.399v2.986"
      />
    </G>
  </Svg>
);
export { IntegrationsIcon };
