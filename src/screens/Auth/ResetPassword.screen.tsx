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
import { BackArrowIcon, LogoIcon } from 'src/assets';
import {
  FullScreenView,
  PrimaryButton,
  TextInput,
  TextRegular,
  Touchable,
} from 'src/components';
import { resetPasswordSchema } from 'src/constants';
import { SCREENS_ENUM } from 'src/enums';
import { AuthStackProps } from 'src/interfaces';
import { Colors } from 'src/themes';
import { NavigationService } from 'src/utilities';

const ResetPasswordScreen = ({
  route,
}: AuthStackProps<SCREENS_ENUM.RESET_PASSWORD_SCREEN>) => {
  const email = route?.params?.email;
  const isPending = false

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),
  });

  const handleResetPassword = async data => {
    return { data, email }
  };

  return (
    <FullScreenView>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Touchable
            disabled={isPending}
            contentContainerStyle={styles.backButtonContainer}
            ripple
            onTap={() => NavigationService.goBack()}>
            <BackArrowIcon size={2.5} color={Colors.designPrimary} />
          </Touchable>
          <View style={styles.mainBodyContainer}>
            <View style={styles.logoContainer}>
              <LogoIcon size={5} />
              <TextRegular fontSize="h2">Update Password</TextRegular>
            </View>
            <View style={styles.formContainer}>
              <TextInput
                control={control}
                name="password"
                label="Password*"
                placeholder="*************"
                secureTextEntry
                editable={!isPending}
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
              <PrimaryButton
                title="Create New Password"
                onPress={handleSubmit(handleResetPassword)}
                disabled={isPending}
                loading={isPending}
              />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </FullScreenView>
  );
};

export { ResetPasswordScreen };

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
});
