import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {
  AnimatedTickMark,
  FullScreenView,
  PrimaryButton,
  TextBold,
  TextRegular,
} from 'src/components';
import { SCREENS_ENUM, STACKS_ENUM } from 'src/enums';
import { GenericRouteProps } from 'src/interfaces';
import { NavigationService } from 'src/utilities';

const ResetPassSuccessScreen = ({
  route,
}: GenericRouteProps<SCREENS_ENUM.RESET_PASSWORD_SUCCESS_SCREEN>) => {
  const resetPassMode = route?.params?.mode === 'FORGOT_PASSWORD';
  const [checked, setChecked] = useState(false);
  const title = resetPassMode
    ? 'Password Changed!'
    : 'Email Verified Successfully';
  const desc = resetPassMode
    ? 'Your password has been changed successfully.'
    : 'Your email has been verified successfully.';

  const handlePress = () => {
    if (resetPassMode) {
      NavigationService.reset(SCREENS_ENUM.SIGN_IN_SCREEN);
    }
    else {
      NavigationService.navigate(STACKS_ENUM.MAIN_STACK)
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setChecked(true);
    }, 500);
  }, [checked]);

  return (
    <FullScreenView>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View
            style={{
              marginBottom: heightPercentageToDP(5),
            }}>
            <AnimatedTickMark size={30} checked={checked} />
          </View>
          <View style={styles.textContainer}>
            <TextBold fontSize="sh1">{title}</TextBold>
            <TextRegular fontSize="st">{desc}</TextRegular>
          </View>
        </View>
        <PrimaryButton onPress={handlePress} title="Continue" />
      </View>
    </FullScreenView>
  );
};

export { ResetPassSuccessScreen };

const styles = StyleSheet.create({
  container: {
    marginHorizontal: widthPercentageToDP(5),
    marginTop: heightPercentageToDP(2),
    flex: 1,
  },
  subContainer: {
    marginTop: heightPercentageToDP(20),
    alignItems: 'center',
    flex: 1,
  },
  backButtonContainer: {
    alignSelf: 'flex-start',
    padding: RFValue(8),
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#E6E6E6',
  },
  textContainer: {
    gap: heightPercentageToDP(1),
    alignItems: 'center',
  },
});
