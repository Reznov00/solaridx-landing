import React from 'react';
import { Text as RNText, TextProps } from 'react-native';
import { ColorsType, FontSizeType } from 'src/interfaces';
import { Colors, FontSizes, LineHeight } from 'src/themes';

type TextProp = TextProps & {
  fontSize?: FontSizeType;
  color?: ColorsType;
  numberOfLines?: number | undefined;
  shrinkText?: boolean;
};

const TextBase = ({
  fontSize = 'sh1',
  color = 'fontPrimary',
  shrinkText = false,
  ...props
}: TextProp) => {
  return (
    <RNText
      {...props}
      style={[
        {
          color: Colors[color],
          textAlign: 'left',
          fontFamily: 'FunnelDisplay-Black',
          fontSize: FontSizes[fontSize],
          lineHeight: LineHeight[fontSize],
          flexShrink: 1,
        },
        props.style,
      ]}>
      {props.children}
    </RNText>
  );
};

const TextRegular = (props: TextProp) => {
  return (
    <TextBase
      {...props}
      style={[
        {
          fontFamily: 'FunnelDisplay-Regular',
        },
        props.style,
      ]}
      numberOfLines={props.numberOfLines}
    />
  );
};

const TextBold = (props: TextProp) => {
  return (
    <TextBase
      {...props}
      style={[
        {
          fontFamily: 'FunnelDisplay-Bold',
        },
        props.style,
      ]}
      numberOfLines={props.numberOfLines}
    />
  );
};

const TextMedium = (props: TextProp) => {
  return (
    <TextBase
      {...props}
      style={[
        {
          fontFamily: 'FunnelDisplay-Medium',
        },
        props.style,
      ]}
      numberOfLines={props.numberOfLines}
    />
  );
};

const TextSemiBold = (props: TextProp) => {
  return (
    <TextBase
      {...props}
      style={[
        {
          fontFamily: 'FunnelDisplay-SemiBold',
        },
        props.style,
      ]}
      numberOfLines={props.numberOfLines}
    />
  );
};
const TextLight = (props: TextProp) => {
  return (
    <TextBase
      {...props}
      style={[
        {
          fontFamily: 'FunnelDisplay-Light',
        },
        props.style,
      ]}
      numberOfLines={props.numberOfLines}
    />
  );
};

export { TextBase, TextBold, TextSemiBold, TextRegular, TextMedium, TextLight };
