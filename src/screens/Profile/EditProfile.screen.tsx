import React from 'react';
import { StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { FullScreenView, HeaderBar } from 'src/components';
import { ChangePasswordComponent, UserProfileDetails } from './components';

const EditProfileScreen = () => {
  return (
    <FullScreenView>
      <HeaderBar title="User Profile" />
      <KeyboardAwareScrollView style={styles.container}>
        <UserProfileDetails />
        <ChangePasswordComponent />
      </KeyboardAwareScrollView>
    </FullScreenView>
  );
};

export { EditProfileScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: heightPercentageToDP(2),
    paddingHorizontal: widthPercentageToDP(5),
  },
});
