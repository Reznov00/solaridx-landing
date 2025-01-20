import React from 'react';
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Colors } from 'src/themes';
import { TextBold } from '../Text';
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
  rightIcon?: React.ReactElement;
}

const PrimaryButton = ({
  onPress,
  title = '',
  textStyle,
  buttonStyle,
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
}: PrimaryButtonProps) => {
  return (
    <Touchable
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.signUpButtonContainer,
        buttonStyle,
        { opacity: disabled ? 0.5 : 1 },
      ]}>
      {!!leftIcon && !loading && leftIcon}
      {!loading ? (
        <TextBold fontSize="sh2" color="white" style={[textStyle]}>
          {title}
        </TextBold>
      ) : (
        <ActivityIndicator size={'small'} color={Colors.white} />
      )}
      {!!rightIcon && !loading && rightIcon}

    </Touchable>
  );
};

export { PrimaryButton };

const styles = StyleSheet.create({
  signUpButtonContainer: {
    backgroundColor: Colors.primary_500,
    alignSelf: 'center',
    marginVertical: heightPercentageToDP(3),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: heightPercentageToDP(1.5),
    width: '100%',
    borderRadius: widthPercentageToDP(3),
    height: heightPercentageToDP(6),
    flexDirection: 'row',
    gap: widthPercentageToDP(2)
  },
});
