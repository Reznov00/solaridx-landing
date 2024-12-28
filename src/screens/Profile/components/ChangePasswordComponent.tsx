import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { TickIcon } from 'src/assets';
import { PrimaryButton, TextInput, TextRegular } from 'src/components';
import { passwordUpdateSchema } from 'src/constants';
import { Colors } from 'src/themes';

const ChangePasswordComponent = () => {
  const isPending = false
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(passwordUpdateSchema),
  });

  const changePassword = data => {
    reset();
    return data
  };

  return (
    <View>
      <TextRegular
        style={{ marginBottom: heightPercentageToDP(2) }}
        fontSize="sh2">
        Change Password
      </TextRegular>
      <TextInput
        control={control}
        name="currentPassword"
        label={'Current Password'}
        secureTextEntry={true}
        editable={!isPending}
        maxLength={30}
        touched={!!errors?.currentPassword?.message}
        error={errors?.currentPassword?.message}
      />
      <TextInput
        control={control}
        name="newPassword"
        label={'New Password'}
        secureTextEntry={true}
        editable={!isPending}
        maxLength={30}
        touched={!!errors.newPassword?.message}
        error={errors?.newPassword?.message}
      />
      <TextInput
        control={control}
        name="confirmPassword"
        label={'Re-enter New Password'}
        secureTextEntry={true}
        editable={!isPending}
        maxLength={30}
        touched={!!errors.confirmPassword?.message}
        error={errors?.confirmPassword?.message}
      />
      <PrimaryButton
        title="Save Changes"
        onPress={handleSubmit(changePassword)}
        buttonStyle={styles.buttonStyle}
        leftIcon={
          <View style={styles.iconContainer}>
            <TickIcon size={1.5} />
          </View>
        }
        disabled={isPending}
        loading={isPending}
      />
    </View>
  );
};

export { ChangePasswordComponent };

const styles = StyleSheet.create({
  headerContainer: {
    marginBottom: heightPercentageToDP(2),
    gap: heightPercentageToDP(1),
  },
  headerText: {
    fontSize: RFValue(13),
    color: Colors.gray_200,
  },
  changePassText: {
    fontSize: RFValue(13),
    color: Colors.gray_900,
  },
  changePassDescText: {
    fontSize: RFValue(10),
    color: Colors.gray_500,
  },
  buttonContainer: {
    backgroundColor: Colors.primary_100,
    paddingHorizontal: widthPercentageToDP(3),
    borderRadius: widthPercentageToDP(2),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: heightPercentageToDP(1),
  },
  buttonText: {
    fontSize: RFValue(13.5),
    color: Colors.white,
    paddingVertical: heightPercentageToDP(2),
  },
  iconContainer: {
    borderWidth: 2,
    borderRadius: 100,
    borderColor: Colors.white,
    padding: 3,
  },
  buttonStyle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: widthPercentageToDP(2),
    marginTop: heightPercentageToDP(2),
  },
});
