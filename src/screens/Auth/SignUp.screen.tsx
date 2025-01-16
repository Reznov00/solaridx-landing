import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Linking, StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { WaveIcon } from 'src/assets';
import {
  BackButton,
  CustomCheckBox,
  FullScreenView,
  PrimaryButton,
  TextBold,
  TextInput,
  TextRegular,
  Touchable
} from 'src/components';
import { signupValidationSchema } from 'src/constants';
import { SCREENS_ENUM } from 'src/enums';
import { SignupFormInterface } from 'src/interfaces';
// import {SignUpService} from 'src/services';
import { Colors } from 'src/themes';
import { NavigationService } from 'src/utilities';
import { SocialContainer } from './components';
import { useSignUpService } from 'src/services';

const SignUpScreen = () => {
  const [checkBoxSelected, setCheckBox] = useState(false);
  const { handleService, isPending } = useSignUpService();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupValidationSchema),
  });

  const handleSignUpPress = async (formData: SignupFormInterface) => {
    if (checkBoxSelected) {
      handleService({
        email: formData.email,
        provider: 'email',
        name: formData.name,
        password: formData.password,
      });
    }
  };

  const handlePrivacyNUsePress = async (mode: 'termsofuse' | 'privacypolicy') => {
    if (mode === 'privacypolicy') {
      await Linking.openURL('https://www.fashx.ai/privacy-policy');
    } else {
      await Linking.openURL('https://www.fashx.ai/user-agreement');
    }
  };
  const handleSignInNavigate = () => {
    NavigationService.navigate(SCREENS_ENUM.SIGN_IN_SCREEN);
  };

  return (
    <FullScreenView>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <BackButton />
          <View style={styles.mainBodyContainer}>
            <View style={styles.logoContainer}>
              <WaveIcon size={10} />
              <TextBold color='primary_600' fontSize="h2">Sign Up</TextBold>
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
                name="name"
                label="Name*"
                editable={!isPending}
                placeholder="John Doe"
                touched={!!errors.name?.message}
                error={errors.name?.message}
              />
              <TextInput
                control={control}
                name="email"
                label="Email*"
                editable={!isPending}
                placeholder="johndoe@example.com"
                touched={!!errors.email?.message}
                error={errors.email?.message}
              />
              <TextInput
                control={control}
                name="password"
                label="Password*"
                placeholder="*************"
                editable={!isPending}
                secureTextEntry
                touched={!!errors.password?.message}
                error={errors.password?.message}
              />
              <View style={styles.privacyPolicyContainer}>
                <Touchable
                  // disabled={isPending}
                  style={{ marginTop: heightPercentageToDP(0.5) }}
                  onPress={() => setCheckBox(prev => !prev)}>
                  <CustomCheckBox size={5} checked={checkBoxSelected} />
                </Touchable>
                <View style={styles.textContainer}>
                  <TextRegular style={styles.textStyle}>
                    {`I agree to the `}
                  </TextRegular>
                  <Touchable
                    onPress={() => handlePrivacyNUsePress('termsofuse')}>
                    <TextBold
                      style={[styles.textStyle, { color: Colors.primary_600 }]}>
                      {`Terms of Use `}
                    </TextBold>
                  </Touchable>
                  <TextRegular style={styles.textStyle}>{`and`}</TextRegular>
                  <Touchable
                    onPress={() => handlePrivacyNUsePress('privacypolicy')}>
                    <TextBold
                      style={[styles.textStyle, { color: Colors.primary_600 }]}>
                      {` Privacy Policy `}
                    </TextBold>
                  </Touchable>
                </View>
              </View>
              <PrimaryButton
                title="Sign Up"
                onPress={handleSubmit(handleSignUpPress)}
                buttonStyle={{ marginVertical: heightPercentageToDP(1.5) }}
                disabled={isPending}
                loading={isPending}
              />
              <View style={styles.optionalText}>
                <TextRegular fontSize="st" color="gray_900">
                  {`You already have an account?`}
                </TextRegular>
                <Touchable onPress={handleSignInNavigate}
                // disabled={isPending}
                >
                  <TextRegular fontSize="st" color="primary_600">
                    {`Sign In`}
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

export { SignUpScreen };

const styles = StyleSheet.create({
  container: {
    marginHorizontal: widthPercentageToDP(5),
    marginTop: heightPercentageToDP(2),
    paddingBottom: heightPercentageToDP(4),
  },
  mainBodyContainer: {
    marginTop: heightPercentageToDP(2),
  },
  logoContainer: {
    alignItems: 'center',
    gap: heightPercentageToDP(2)
  },
  seperator: {
    flexDirection: 'row',
    width: widthPercentageToDP(90),
    height: 1,
    backgroundColor: Colors.gray_200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: heightPercentageToDP(3),
    marginTop: heightPercentageToDP(1)
  },
  orText: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '15%',
    backgroundColor: Colors.white
  },
  formContainer: {
    marginTop: heightPercentageToDP(5),
  },
  privacyPolicyContainer: {
    flexDirection: 'row',
    gap: widthPercentageToDP(2),
    alignItems: 'flex-start',
  },
  optionalText: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    gap: widthPercentageToDP(2),
  },
  textContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: widthPercentageToDP(80),
  },
  textStyle: {
    fontSize: RFValue(10),
    color: Colors.gray_900,
    lineHeight: heightPercentageToDP(3),
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: widthPercentageToDP(2)
  },
});
