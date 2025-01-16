import React from 'react';
import { Linking, StyleSheet, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { LogoutIcon } from 'src/assets';
import { FullScreenView, PrimaryButton, TextBold } from 'src/components';
import { STACKS_ENUM } from 'src/enums';
import { useDeleteAccountBottomSheetAtom, useLogoutBottomSheetAtom } from 'src/store';
import { Colors } from 'src/themes';
import { NavigationService } from 'src/utilities';

const ProfileScreen = () => {
  const { setShowLogoutBottomSheet } = useLogoutBottomSheetAtom()
  const { setShowDeleteAccountBotomSheet } = useDeleteAccountBottomSheetAtom()
  const PrivacyPolicyURL = 'https://www.fashx.ai/privacy-policy';
  const TermsnConditionsURL = 'https://www.fashx.ai/user-agreement';

  const handlePress = async (url: string) => {
    if (url) await Linking.openURL(url);
  };


  return (
    <FullScreenView>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          {/* <LogoIcon size={5} /> */}
          <TextBold>User Profile</TextBold>
        </View>
        <View>
          <PrimaryButton
            buttonStyle={styles.buttonStyle}
            textStyle={styles.buttonTextStyle}
            onPress={() =>
              NavigationService.navigate(STACKS_ENUM.PROFILE_STACK)
            }
            title="Edit Profile"
            shadowEnabled={false}
          />
          <PrimaryButton
            buttonStyle={styles.buttonStyle}
            textStyle={styles.buttonTextStyle}
            onPress={() => handlePress(TermsnConditionsURL)}
            title="Terms & Conditions"
            shadowEnabled={false}
          />
          <PrimaryButton
            buttonStyle={styles.buttonStyle}
            textStyle={styles.buttonTextStyle}
            onPress={() => handlePress(PrivacyPolicyURL)}
            title="Privacy & Policy"
            shadowEnabled={false}
          />
          <PrimaryButton
            buttonStyle={styles.buttonStyle}
            textStyle={styles.buttonTextStyle}
            onPress={() => setShowDeleteAccountBotomSheet('deleteUserAccountData')}
            title="Delete User Data"
            shadowEnabled={false}
          />
          <PrimaryButton
            buttonStyle={styles.buttonStyle}
            textStyle={styles.buttonTextStyle}
            onPress={() => setShowDeleteAccountBotomSheet('deleteUserAccount')}
            title="Delete User Account"
            shadowEnabled={false}
          />
          <PrimaryButton
            buttonStyle={[
              styles.buttonStyle,
              { backgroundColor: Colors.danger, borderWidth: 0 },
            ]}
            textStyle={[styles.buttonTextStyle, { color: Colors.white }]}
            onPress={() => setShowLogoutBottomSheet(true)}
            title="Log out"
            leftIcon={<LogoutIcon size={3} />}
            shadowEnabled={false}
          />
        </View>
      </View>
    </FullScreenView>
  );
};

export { ProfileScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: heightPercentageToDP(2),
    paddingHorizontal: widthPercentageToDP(5),
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: heightPercentageToDP(3),
    marginBottom: heightPercentageToDP(3),
  },
  buttonStyle: {
    width: '100%',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.gray_500,
    paddingVertical: heightPercentageToDP(1),
    marginVertical: heightPercentageToDP(1),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: widthPercentageToDP(3),
  },
  buttonTextStyle: {
    color: Colors.gray_900,
    fontWeight: '400',
    fontSize: RFValue(14),
  },
});
