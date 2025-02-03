import React from 'react';
import {
  StyleProp,
  StyleSheet,
  View,
  ViewStyle
} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Touchable } from 'src/components';
import { Colors } from 'src/themes';

export interface IntegrationsButtonProps {
  onPress: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  shadowEnabled?: boolean;
  icon?: React.ReactElement;
}

const IntegrationsButton = ({
  onPress,
  buttonStyle,
  disabled = false,
  icon,
}: IntegrationsButtonProps) => {
  return (
    <Touchable
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.signUpButtonContainer,
        buttonStyle,
        { opacity: disabled ? 0.5 : 1 },
      ]}>
      {!!icon && <View pointerEvents="none">{icon}</View>}
    </Touchable>
  );
};

export { IntegrationsButton };

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
    gap: widthPercentageToDP(2),
  },
});
