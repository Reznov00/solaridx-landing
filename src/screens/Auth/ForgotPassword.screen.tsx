import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { MessageIcon } from 'src/assets';
import {
  BackButton,
  FullScreenView,
  PrimaryButton,
  TextBold,
  TextInput,
  TextRegular
} from 'src/components';
import { forgotPasswordSchema } from 'src/constants';
import { SCREENS_ENUM } from 'src/enums';
import { Colors } from 'src/themes';
import { NavigationService } from 'src/utilities';

const ForgotPasswordScreen = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
  });
  const isPending = false

  const handleEmail = async data => {
    NavigationService.navigate(SCREENS_ENUM.OTP_SCREEN, { email: data.userEmail, mode: 'FORGOT_PASSWORD' });
  };

  return (
    <FullScreenView>
      <View style={styles.container}>
        <BackButton />
        <View style={styles.mainBodyContainer}>
          <View style={styles.logoContainer}>
            <MessageIcon size={10} />
            <TextBold color='primary_600' fontSize="h2">Forget Password</TextBold>
          </View>
          <View>
            <TextRegular style={styles.textStyle}>
              We will send you a{' '}
              <TextBold style={styles.spanTextStyle}>
                One Time Passcode
              </TextBold>{' '}
              via this email address
            </TextRegular>
          </View>
          <View >
            <TextInput
              control={control}
              name="userEmail"
              label="Email*"
              placeholder="johndoe@example.com"
              touched={!!errors.userEmail?.message}
              error={errors.userEmail?.message}
              editable={!isPending}
            />
            <PrimaryButton
              title="Send OTP"
              onPress={handleSubmit(handleEmail)}
              buttonStyle={{ marginTop: 0 }}
              loading={isPending}
              disabled={isPending}
            />
          </View>
        </View>
      </View>
    </FullScreenView>
  );
};

export { ForgotPasswordScreen };

const styles = StyleSheet.create({
  container: {
    marginHorizontal: widthPercentageToDP(5),
    marginTop: heightPercentageToDP(2),
  },
  mainBodyContainer: {
    marginTop: heightPercentageToDP(3),
  },
  logoContainer: {
    alignItems: 'center',
    gap: heightPercentageToDP(2)

  },
  formContainer: {
    marginTop: heightPercentageToDP(3),
  },
  signUpButtonContainer: {
    backgroundColor: Colors.primary_600,
    alignSelf: 'center',
    marginVertical: heightPercentageToDP(3),
    alignItems: 'center',
    paddingVertical: heightPercentageToDP(1),
    paddingHorizontal: widthPercentageToDP(25),
    borderRadius: RFValue(30),
  },
  textContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: widthPercentageToDP(80),
  },
  textStyle: {
    fontSize: RFValue(12),
    color: Colors.gray_700,
    lineHeight: heightPercentageToDP(2.5),
    marginVertical: heightPercentageToDP(2),
    textAlign: 'center',
  },
  spanTextStyle: {
    fontSize: RFValue(12),
    color: Colors.gray_700,
    lineHeight: heightPercentageToDP(2.5),
    marginBottom: heightPercentageToDP(2),
    textAlign: 'center',
  },
});
