import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { WaveIcon } from 'src/assets';
import {
  BackButton,
  FullScreenView,
  PrimaryButton,
  TextBold,
  TextInput,
  TextRegular,
  Touchable,
} from 'src/components';
import { signInValidationSchema } from 'src/constants';
import { SCREENS_ENUM, STACKS_ENUM } from 'src/enums';
import { Colors } from 'src/themes';
import { NavigationService } from 'src/utilities';
import { SocialContainer } from './components';

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
    NavigationService.navigate(STACKS_ENUM.MAIN_STACK);
    return data
  };
  const handleSignUpNavigate = () => {
    NavigationService.navigate(SCREENS_ENUM.SIGN_UP_SCREEN);
    console.log('first')
  };


  return (
    <FullScreenView>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <BackButton />
          <View style={styles.mainBodyContainer}>
            <View style={styles.logoContainer}>
              <WaveIcon size={10} />
              <TextBold color='primary_600' fontSize="h2">Sign In</TextBold>
            </View>
            <SocialContainer />
            <View style={styles.seperator}>
              <View style={styles.orText} >
                <TextRegular color='gray_900' fontSize='sh2'>Or</TextRegular>
              </View>
            </View>
            <View >
              <TextInput
                control={control}
                name="email"
                label="Email"
                placeholder="Email"
                touched={!!errors.email?.message}
                error={errors.email?.message}
                editable={!isPending}
              />
              <TextInput
                control={control}
                name="password"
                label="Password"
                placeholder="Password"
                secureTextEntry
                touched={!!errors.password?.message}
                error={errors.password?.message}
                editable={!isPending}
                autoCapitalize='none'
              />

              <View style={styles.privacyPolicyContainer}>
                <Touchable
                  // disabled={isPending}
                  onPress={() => {
                    NavigationService.navigate(
                      SCREENS_ENUM.FORGOT_PASSWORD_SCREEN,
                    )
                  }
                  }>
                  <TextRegular fontSize="st" color="gray_600">
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
                <TextRegular fontSize="st" color="gray_800">
                  {`You already have an account?`}
                </TextRegular>
                <Touchable
                  //  disabled={isPending}
                  onPress={handleSignUpNavigate}>
                  <TextRegular fontSize="st" color="primary_500">
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
  mainBodyContainer: {
    marginTop: heightPercentageToDP(3),
  },
  seperator: {
    flexDirection: 'row',
    width: widthPercentageToDP(90),
    height: 1,
    backgroundColor: Colors.gray_200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: heightPercentageToDP(3)
  },
  orText: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '15%',
    backgroundColor: Colors.white
  },
  logoContainer: {
    alignItems: 'center',
    gap: heightPercentageToDP(2)
  },
  privacyPolicyContainer: {
    flexDirection: 'row',
    gap: widthPercentageToDP(2),
    justifyContent: 'flex-end',
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
