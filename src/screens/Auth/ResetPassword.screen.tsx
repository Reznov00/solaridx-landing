import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { LockIcon } from 'src/assets';
import {
  BackButton,
  FullScreenView,
  PrimaryButton,
  TextBold,
  TextInput
} from 'src/components';
import { resetPasswordSchema } from 'src/constants';
import { SCREENS_ENUM } from 'src/enums';
import { GenericRouteProps } from 'src/interfaces';
import { useResetPasswordService } from 'src/services';
import { Colors } from 'src/themes';

const ResetPasswordScreen = ({
  route,
}: GenericRouteProps<SCREENS_ENUM.RESET_PASSWORD_SCREEN>) => {
  const email = route?.params?.email;
  const { handleService, isPending } = useResetPasswordService();


  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),
  });

  const handleResetPassword = async data => {
    handleService({
      email: email,
      password: data.password,
    });
  };

  return (
    <FullScreenView>
      <View style={styles.container}>
        <BackButton />
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
