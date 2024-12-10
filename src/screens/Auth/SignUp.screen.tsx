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
import { BackArrowIcon, LogoIcon } from 'src/assets';
import {
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

const SignUpScreen = () => {
  const [checkBoxSelected, setCheckBox] = useState(false);
  const isPending = false
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupValidationSchema),
  });

  const handleSignUpPress = async (formData: SignupFormInterface) => {
    if (checkBoxSelected) {
      return formData
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
          <Touchable
            contentContainerStyle={styles.backButtonContainer}
            ripple
            onTap={() => NavigationService.goBack()}>
            <BackArrowIcon size={2.5} color={Colors.designPrimary} />
          </Touchable>
          <View style={styles.mainBodyContainer}>
            <View style={styles.logoContainer}>
              <LogoIcon size={5} />
              <TextRegular fontSize="h2">Create an account</TextRegular>
            </View>
            <View style={styles.formContainer}>
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
              <TextInput
                control={control}
                name="confirmPassword"
                label="Confirm Password*"
                placeholder="*************"
                editable={!isPending}
                secureTextEntry
                touched={!!errors.confirmPassword?.message}
                error={errors.confirmPassword?.message}
              />
              <View style={styles.privacyPolicyContainer}>
                <Touchable
                  disabled={isPending}
                  style={{ marginTop: heightPercentageToDP(0.5) }}
                  onTap={() => setCheckBox(prev => !prev)}>
                  <CustomCheckBox size={6} checked={checkBoxSelected} />
                </Touchable>
                <View style={styles.textContainer}>
                  <TextRegular style={styles.textStyle}>
                    {`By registering, you are agreeing with our `}
                  </TextRegular>
                  <Touchable
                    opaque
                    onTap={() => handlePrivacyNUsePress('termsofuse')}>
                    <TextBold
                      style={[styles.textStyle, { color: Colors.designPrimary }]}>
                      {`Terms of Use `}
                    </TextBold>
                  </Touchable>
                  <TextRegular style={styles.textStyle}>{`and`}</TextRegular>
                  <Touchable
                    opaque
                    onTap={() => handlePrivacyNUsePress('privacypolicy')}>
                    <TextBold
                      style={[styles.textStyle, { color: Colors.designPrimary }]}>
                      {` Privacy Policy `}
                    </TextBold>
                  </Touchable>
                </View>
              </View>
              <PrimaryButton
                title="Sign Up"
                onPress={handleSubmit(handleSignUpPress)}
                buttonStyle={{ marginVertical: heightPercentageToDP(1.5) }}
                loading={isPending}
              />
              <View style={styles.optionalText}>
                <TextRegular fontSize="st" color="fontPrimary">
                  {`You already have an account?`}
                </TextRegular>
                <Touchable onTap={handleSignInNavigate} disabled={isPending}>
                  <TextRegular fontSize="st" color="designPrimary">
                    {`Sign In`}
                  </TextRegular>
                </Touchable>
              </View>
              <TextRegular
                style={{
                  textAlign: 'center',
                  marginVertical: heightPercentageToDP(1.5),
                }}
                fontSize="st"
                color="fontPrimary">
                {`Or`}
              </TextRegular>

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
    fontSize: RFValue(12),
    color: Colors.fontPrimary,
    lineHeight: heightPercentageToDP(2.5),
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: widthPercentageToDP(2)
  },
});
