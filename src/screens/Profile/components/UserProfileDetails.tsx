import React from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { TextInput, TextRegular } from 'src/components';
import { useUserAtom } from 'src/store';
import { Colors } from 'src/themes';

const UserProfileDetails = () => {
  const { user } = useUserAtom();

  const { control } = useForm({
    defaultValues: {
      userName: user?.name ?? '',
      userEmail: user?.email ?? '',
      // userName: '',
      // userEmail: '',
    },
  });

  return (
    <View>
      <TextRegular fontSize="sh2">Profile Details</TextRegular>
      <View style={{ marginVertical: heightPercentageToDP(2) }}>
        <TextInput
          control={control}
          name="userName"
          label="Name*"
          editable={false}
        />
        <TextInput
          control={control}
          name="userEmail"
          label="Email*"
          editable={false}
        />
      </View>
      <View
        style={{
          width: '100%',
          backgroundColor: Colors.gray_400,
          height: 2,
          opacity: 0.5,
          marginBottom: heightPercentageToDP(2),
        }}
      />
    </View>
  );
};

export { UserProfileDetails };
