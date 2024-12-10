import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { BackArrowIcon, LogoIcon } from 'src/assets';
import {
  FullScreenView,
  PrimaryButton,
  TextBold,
  TextInput,
  TextRegular,
  Touchable,
} from 'src/components';
import { forgotPasswordSchema } from 'src/constants';
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
    return data
  };

  return (
    <FullScreenView>
      <View style={styles.container}>
        <Touchable
          contentContainerStyle={styles.backButtonContainer}
          ripple
          disabled={isPending}
          onTap={() => NavigationService.goBack()}>
          <BackArrowIcon size={2.5} color={Colors.designPrimary} />
        </Touchable>
        <View style={styles.mainBodyContainer}>
          <View style={styles.logoContainer}>
            <LogoIcon size={5} />
            <TextRegular fontSize="h2">Forgot Password</TextRegular>
          </View>
          <View style={styles.formContainer}>
            <View>
              <TextRegular style={styles.textStyle}>
                We will send you a{' '}
                <TextBold style={styles.spanTextStyle}>
                  One Time Passcode
                </TextBold>{' '}
                via this email address
              </TextRegular>
            </View>
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
  backButtonContainer: {
    alignSelf: 'flex-start',
    padding: RFValue(8),
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#E6E6E6',
  },
  mainBodyContainer: {
    marginTop: heightPercentageToDP(3),
  },
  logoContainer: {
    alignItems: 'center',
  },
  formContainer: {
    marginTop: heightPercentageToDP(3),
  },
  signUpButtonContainer: {
    backgroundColor: Colors.designPrimary,
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
    fontSize: RFValue(14),
    color: Colors.fontPrimary,
    lineHeight: heightPercentageToDP(2.5),
    marginBottom: heightPercentageToDP(2),
    textAlign: 'center',
  },
  spanTextStyle: {
    fontSize: RFValue(14),
    color: Colors.designPrimary,
    lineHeight: heightPercentageToDP(2.5),
    marginBottom: heightPercentageToDP(2),
    textAlign: 'center',
  },
});
