import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { CloseIcon, TickIcon } from 'src/assets';
import { useLogoutBottomSheetAtom } from 'src/store';
import { Colors } from 'src/themes';
import { PrimaryButton } from '../Buttons';
import { TextRegular } from '../Text';
import { BottomSheet } from './BottomSheet';
import { useLogout } from 'src/hooks';

const LogoutBottomSheet = () => {
  const { setShowLogoutBottomSheet, showLogoutBottomSheet } = useLogoutBottomSheetAtom();
  const logout = useLogout();

  const isOpen = useSharedValue(false);
  const toggleSheet = () => {
    isOpen.value = !isOpen.value;
    setShowLogoutBottomSheet(!isOpen.value)
  };

  useEffect(() => {
    if (showLogoutBottomSheet) {
      isOpen.value = true;
    } else {
      isOpen.value = false;
    }
  }, [showLogoutBottomSheet]);

  const handleConfirmPress = () => {
    toggleSheet();
    logout()
  };

  return (
    <BottomSheet isOpen={isOpen} toggleSheet={toggleSheet}>
      <View style={styles.container}>
        <TextRegular fontSize="st">Are you sure you want to logout?</TextRegular>
        <View style={styles.subContainer}>
          <PrimaryButton
            buttonStyle={styles.cancelButtonStyle}
            textStyle={{ fontSize: RFValue(12), color: Colors.white }}
            title="No, back"
            onPress={toggleSheet}
            leftIcon={
              <View style={[styles.iconContainer, { borderColor: Colors.white }]}>
                <CloseIcon size={1.5} color={Colors.white} />
              </View>
            }
          />
          <PrimaryButton
            title="Yes, logout"
            buttonStyle={styles.confirmButtonStyle}
            onPress={handleConfirmPress}
            textStyle={{ fontSize: RFValue(12) }}
            leftIcon={
              <View style={styles.iconContainer}>
                <TickIcon size={1.5} />
              </View>
            }
          />
        </View>
      </View>
    </BottomSheet>
  );
};

export { LogoutBottomSheet };

const styles = StyleSheet.create({
  container: {
    marginTop: heightPercentageToDP(1),
    marginBottom: heightPercentageToDP(2),
    width: '100%',
  },
  subContainer: {
    flexDirection: 'row',
    gap: widthPercentageToDP(5),
    marginTop: heightPercentageToDP(3)
  },
  confirmButtonStyle: {
    width: widthPercentageToDP(42.5),
    flexDirection: 'row',
    justifyContent: 'center',
    gap: widthPercentageToDP(2),
    marginTop: 0,
  },
  cancelButtonStyle: {
    width: widthPercentageToDP(42.5),
    flexDirection: 'row',
    justifyContent: 'center',
    gap: widthPercentageToDP(2),
    backgroundColor: Colors.danger,
    marginTop: 0,
  },
  iconContainer: {
    borderWidth: 2,
    borderRadius: 100,
    borderColor: Colors.white,
    padding: 3,
  },
  textStyle: {
    fontSize: RFValue(12),
    color: Colors.gray_900,
  },
});
