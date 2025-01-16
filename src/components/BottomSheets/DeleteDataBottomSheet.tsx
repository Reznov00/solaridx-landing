import React, { Fragment, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { CloseIcon, TickIcon } from 'src/assets';
import {
  useDeleteAccountBottomSheetAtom
} from 'src/store';
import { Colors } from 'src/themes';
import { TextRegular } from '../Text';
import { showToast } from '../Toast';
import { BottomSheet } from './BottomSheet';
import { axiosInstance, deleteUserAccountDataURL, deleteUserAccountURL } from 'src/apis';
import { PrimaryButton } from '../Buttons';
import { useLogout } from 'src/hooks';

const DeleteDataBottomSheet = () => {
  const [loading, setLoading] = useState(false)
  const { setShowDeleteAccountBotomSheet, showDeleteAccountBotomSheet } =
    useDeleteAccountBottomSheetAtom();
  const logout = useLogout()
  const isOpen = useSharedValue(false);
  const toggleSheet = () => {
    if (!loading) {
      isOpen.value = false;
      if (isOpen.value) {
        setShowDeleteAccountBotomSheet('none')
      }
    }
  };

  useEffect(() => {
    if (showDeleteAccountBotomSheet !== 'none') {
      isOpen.value = true;
    } else {
      isOpen.value = false;
    }
  }, [showDeleteAccountBotomSheet]);

  const handleDelete = async () => {
    setLoading(true);
    try {
      if (showDeleteAccountBotomSheet === 'deleteUserAccount') {
        showToast('success', 'Account Deleted');
        await axiosInstance.delete(deleteUserAccountURL);

      }
      if (showDeleteAccountBotomSheet === 'deleteUserAccountData') {
        await axiosInstance.delete(deleteUserAccountDataURL);
      }
    } catch (error) {
      console.error('Error occurred during deletion:', error);
      showToast('error', 'An error occurred while deleting');
    } finally {
      setLoading(false);
      toggleSheet()
      showToast('success', 'Deletion Successful');
      logout()
    }
  };

  const getTitle = () => {
    return showDeleteAccountBotomSheet === 'deleteUserAccount' ? 'user account' : showDeleteAccountBotomSheet === 'deleteUserAccountData' ? `user's account data` : ''
  }

  return (
    <BottomSheet isOpen={isOpen} toggleSheet={toggleSheet}>
      <Fragment>
        <View style={styles.container}>
          <View style={styles.itemsContainer}>
            <TextRegular fontSize="bt">
              {`Are you sure you want to delete this ${getTitle()} ?`}
            </TextRegular>
          </View>
        </View>
        <View style={styles.subContainer}>
          <PrimaryButton
            buttonStyle={styles.cancelButtonStyle}
            textStyle={{ fontSize: RFValue(12), color: '#5B5B5B' }}
            title="No, cancel"
            onPress={toggleSheet}
            disabled={loading}
            leftIcon={
              <View style={[styles.iconContainer, { borderColor: '#5B5B5B' }]}>
                <CloseIcon size={1.5} color={'#5B5B5B'} />
              </View>
            }
          />
          <PrimaryButton
            title="Yes, delete"
            buttonStyle={styles.confirmButtonStyle}
            onPress={handleDelete}
            textStyle={{ fontSize: RFValue(12) }}
            leftIcon={
              <View style={styles.iconContainer}>
                <TickIcon size={1.5} />
              </View>
            }
            loading={loading}
            disabled={loading}
          />
        </View>
      </Fragment>
    </BottomSheet>
  );
};

export { DeleteDataBottomSheet };

const styles = StyleSheet.create({
  container: {
    marginTop: heightPercentageToDP(1),
    marginBottom: heightPercentageToDP(3),
    width: '100%',
  },
  itemsContainer: {
    alignItems: 'center',
  },
  detailsContainer: {
    gap: heightPercentageToDP(0.5),
    alignItems: 'flex-start',
    height: heightPercentageToDP(25),
    width: '100%',
    marginTop: heightPercentageToDP(2),
    borderRadius: RFValue(20),
    overflow: 'hidden',
  },
  buttonTextStyle: {
    fontSize: RFValue(14),
  },
  subContainer: {
    flexDirection: 'row',
    gap: widthPercentageToDP(5),
  },
  confirmButtonStyle: {
    width: widthPercentageToDP(35),
    flexDirection: 'row',
    justifyContent: 'center',
    gap: widthPercentageToDP(2),
    marginTop: 0,
  },
  cancelButtonStyle: {
    width: widthPercentageToDP(35),
    flexDirection: 'row',
    justifyContent: 'center',
    gap: widthPercentageToDP(2),
    backgroundColor: Colors.gray_300,
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
