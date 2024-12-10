import * as React from 'react';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {ColorsType} from 'src/interfaces';
import {Colors} from 'src/themes';

interface SVGPropsII extends SvgProps {
  size?: number;
  version?: 'Basic' | 'Compact';
  secondaryFill?: ColorsType;
}
const LogoIcon = ({size = 5, version = 'Basic', ...props}: SVGPropsII) => {
  const isBasicVersion = version === 'Basic';
  return (
    <Svg
      onPress={props.onPress}
      width={heightPercentageToDP(size) * 4.8}
      height={heightPercentageToDP(size)}
      fill="none"
      {...props}
      viewBox="14.8 -2 38 38">
      <Path
        fill={isBasicVersion ? Colors.black : Colors.white}
        d="M.375 33V.952H34.62v5.827H7.547v8.874h23.577v5.827H7.547V33H.375Zm44.645 0c-2.42 0-4.273-.613-5.558-1.838-1.285-1.225-1.927-2.973-1.927-5.244 0-2.241.642-3.974 1.927-5.2 1.285-1.225 3.138-1.837 5.558-1.837h17.212v-1.076c0-1.823-.896-2.734-2.69-2.734H40.539V9.916h20.708c2.72 0 4.647.628 5.782 1.883 1.136 1.225 1.703 2.958 1.703 5.2V33h-23.71Zm1.166-5.155h16.046v-3.81H46.186c-.568 0-1.016.18-1.345.538-.299.329-.448.777-.448 1.345s.15 1.03.448 1.39c.329.358.777.537 1.345.537Zm26.73 5.38V28.07H94.88c1.255 0 1.882-.703 1.882-2.107 0-1.375-.627-2.062-1.882-2.062H80.67c-2.659 0-4.676-.598-6.05-1.793-1.375-1.225-2.062-2.973-2.062-5.244 0-2.301.687-4.064 2.062-5.29 1.404-1.254 3.421-1.882 6.05-1.882h20.44v5.155H80.985c-1.285 0-1.928.627-1.928 1.882 0 .628.18 1.12.538 1.48.359.358.822.537 1.39.537h15.06c2.331 0 4.109.613 5.334 1.838 1.255 1.195 1.883 2.943 1.883 5.244 0 2.331-.628 4.154-1.883 5.469-1.255 1.285-3.033 1.927-5.334 1.927H72.916ZM107.078 33V.952h6.499v8.964h13.626c2.63 0 4.542.658 5.738 1.972 1.225 1.285 1.838 2.989 1.838 5.11V33h-6.5V17.76c0-1.793-.896-2.69-2.689-2.69h-12.013V33h-6.499Z"
      />
      <Path
        fill={props.secondaryFill ?? Colors.designPrimary}
        d="m137.451 33 12.013-16.002L137.451.952h8.741l9.637 13.133h4.124L169.59.952h8.74l-12.013 16.046L178.33 33h-8.785l-9.592-13.088h-4.124L146.237 33h-8.786Z"
      />
    </Svg>
  );
};
export {LogoIcon};
