import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { BackArrowIcon, LockIcon } from 'src/assets';
import {
  FullScreenView,
  PrimaryButton,
  TextBold,
  TextInput,
  Touchable
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
      <View style={styles.container}>
        <Touchable
          // disabled={isPending}
          style={styles.backButtonContainer}
          onPress={() => NavigationService.goBack()}>
          <BackArrowIcon size={2.5} color={Colors.gray_600} />
        </Touchable>
        <View style={styles.mainBodyContainer}>
          <View style={styles.logoContainer}>
            <LockIcon size={10} />
            <TextBold color='primary_600' fontSize="h2">Update Password</TextBold>
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
    gap: heightPercentageToDP(2)
  },
  formContainer: {
    marginTop: heightPercentageToDP(5),
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
