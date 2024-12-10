import React from 'react';
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { Colors } from 'src/themes';
import { TextBold } from './Text';
import { Touchable } from './Touchable';

export interface PrimaryButtonProps {
  onPress: () => void;
  title: string;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  shadowEnabled?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactElement;
}

const PrimaryButton = ({
  onPress,
  title = '',
  textStyle,
  buttonStyle,
  disabled = false,
  loading = false,
  leftIcon,
  shadowEnabled = true,
}: PrimaryButtonProps) => {
  return (
    <Touchable
      ripple
      opaque
      rippleColor="designTertiary"
      onTap={onPress}
      disabled={disabled || loading}
      shadowOpacity={shadowEnabled ? 0.2 : 0}
      contentContainerStyle={[
        styles.signUpButtonContainer,
        buttonStyle,
        { opacity: disabled ? 0.5 : 1 },
      ]}>
      {!!leftIcon && !loading && leftIcon}
      {!loading ? (
        <TextBold fontSize="sh2" color="white" style={[textStyle, textStyle]}>
          {title}
        </TextBold>
      ) : (
        <ActivityIndicator size={'small'} color={Colors.white} />
      )}
    </Touchable>
  );
};

export { PrimaryButton };

const styles = StyleSheet.create({
  signUpButtonContainer: {
    backgroundColor: Colors.designPrimary,
    alignSelf: 'center',
    marginVertical: heightPercentageToDP(3),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: heightPercentageToDP(1.5),
    width: '85%',
    borderRadius: RFValue(30),
    height: heightPercentageToDP(6),
  },
});
