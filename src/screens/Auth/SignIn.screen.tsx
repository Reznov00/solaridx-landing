import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { CloseIcon, LogoIcon } from 'src/assets';
import {
  FullScreenView,
  PrimaryButton,
  // PrimaryButton,
  TextInput,
  TextRegular,
  Touchable,
} from 'src/components';
import { signInValidationSchema } from 'src/constants';
import { SCREENS_ENUM } from 'src/enums';
import { Colors } from 'src/themes';
import { NavigationService } from 'src/utilities';

const SignInScreen = () => {
  const isPending = false

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInValidationSchema),
  });

  const handleSignIn = async (data: { email: string; password: string }) => {
    return data
  };
  const handleSignUpNavigate = () => {
    // NavigationService.navigate(SCREENS_ENUM.SIGN_UP_SCREEN);
    console.log('first')
  };


  return (
    <FullScreenView>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Touchable
            opaque
            disabled={isPending}
            contentContainerStyle={styles.backButtonContainer}
            ripple
            onTap={() => NavigationService.goBack()}>
            <CloseIcon size={2.5} color={Colors.designPrimary} />
          </Touchable>
          <View style={styles.mainBodyContainer}>
            <View style={styles.logoContainer}>
              <LogoIcon size={5} />
              <TextRegular fontSize="h2">Sign In</TextRegular>
            </View>
            <View style={styles.formContainer}>
              <TextInput
                control={control}
                name="email"
                label="Email*"
                placeholder="johndoe@example.com"
                touched={!!errors.email?.message}
                error={errors.email?.message}
                editable={!isPending}
              />
              <TextInput
                control={control}
                name="password"
                label="Password*"
                placeholder="*************"
                secureTextEntry
                touched={!!errors.password?.message}
                error={errors.password?.message}
                editable={!isPending}
                autoCapitalize='none'

              />

              <View style={styles.privacyPolicyContainer}>
                <Touchable
                  disabled={isPending}
                  opaque
                  onTap={() => {
                    //  NavigationService.navigate(
                    //   SCREENS_ENUM.FORGOT_PASSWORD_SCREEN,
                    // )
                  }
                  }>
                  <TextRegular fontSize="st" color="designPrimary">
                    {`Forgot Password?`}
                  </TextRegular>
                </Touchable>
              </View>
              <PrimaryButton
                title="Sign In"
                onPress={handleSubmit(handleSignIn)}
                buttonStyle={{ marginVertical: heightPercentageToDP(1.5) }}
                disabled={isPending}
                loading={isPending}
              />
              <View style={styles.optionalText}>
                <TextRegular fontSize="st" color="fontPrimary">
                  {`You already have an account?`}
                </TextRegular>
                <Touchable opaque disabled={isPending} onTap={handleSignUpNavigate}>
                  <TextRegular fontSize="st" color="designPrimary">
                    {`Sign Up`}
                  </TextRegular>
                </Touchable>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </FullScreenView>
  );
};

export { SignInScreen };

const styles = StyleSheet.create({
  container: {
    marginHorizontal: widthPercentageToDP(5),
    marginTop: heightPercentageToDP(2),
  },
  backButtonContainer: {
    alignSelf: 'flex-end',
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
    marginTop: heightPercentageToDP(5),
  },
  privacyPolicyContainer: {
    flexDirection: 'row',
    gap: widthPercentageToDP(2),
    alignItems: 'flex-start',
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
  optionalText: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    gap: widthPercentageToDP(2),
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: widthPercentageToDP(2)
  },
});
