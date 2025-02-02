import * as React from 'react';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { Colors } from 'src/themes';

interface SVGPropsII extends SvgProps {
  size?: number;
  v2?: boolean;
}

const EditIcon = ({ size = 5, ...props }: SVGPropsII) => {
  return (
    <Svg
      width={heightPercentageToDP(size)}
      height={heightPercentageToDP(size)}
      fill="none"
      {...props}
      viewBox="0 -3 23 23">
      <Path
        stroke={props.stroke ?? Colors.gray_900}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.strokeWidth ?? 2}
        d="m1.188 17.813 4.855-1.868c.31-.12.466-.18.611-.257.13-.07.252-.15.368-.24a5.46 5.46 0 0 0 .483-.453l9.87-9.87a2.475 2.475 0 1 0-3.5-3.5l-9.87 9.87c-.235.235-.353.353-.454.483-.09.116-.17.239-.239.368-.078.145-.138.3-.257.61l-1.868 4.857Zm0 0 1.8-4.683c.13-.335.194-.502.304-.579a.438.438 0 0 1 .332-.07c.132.025.259.152.513.406l1.976 1.976c.254.254.381.381.406.513a.438.438 0 0 1-.07.332c-.077.11-.244.175-.58.304l-4.681 1.8Z"
      />
    </Svg>
  );
};
export { EditIcon };
