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
        <TextRegular fontSize="bt">Are you sure you want to logout?</TextRegular>
        <View style={styles.subContainer}>
          <PrimaryButton
            buttonStyle={styles.cancelButtonStyle}
            textStyle={{ fontSize: RFValue(12), color: '#5B5B5B' }}
            title="No, back"
            onPress={toggleSheet}
            leftIcon={
              <View style={[styles.iconContainer, { borderColor: '#5B5B5B' }]}>
                <CloseIcon size={1.5} color={'#5B5B5B'} />
              </View>
            }
          />
          <PrimaryButton
            title="Yes, logout"
            buttonStyle={styles.buttonStyle}
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
    width: '100%',
    alignItems: 'center',
  },
  subContainer: {
    flexDirection: 'row',
    gap: widthPercentageToDP(5),
  },
  buttonStyle: {
    width: widthPercentageToDP(35),
    flexDirection: 'row',
    justifyContent: 'center',
    gap: widthPercentageToDP(2),
    marginTop: heightPercentageToDP(2),
  },
  cancelButtonStyle: {
    width: widthPercentageToDP(35),
    flexDirection: 'row',
    justifyContent: 'center',
    gap: widthPercentageToDP(2),
    marginTop: heightPercentageToDP(2),
    backgroundColor: Colors.gray_300,
  },
  iconContainer: {
    borderWidth: 2,
    borderRadius: 100,
    borderColor: Colors.white,
    padding: 3,
  },
});
