import React, { Fragment, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { CloseIcon, TickIcon } from 'src/assets';
import { useSpecsUnLinkService } from 'src/services';
import { useSpecsBottomSheetAtom } from 'src/store';
import { Colors } from 'src/themes';
import { PrimaryButton } from '../Buttons';
import { TextRegular } from '../Text';
import { showToast } from '../Toast';
import { BottomSheet } from './BottomSheet';


const UnlinkSpecsBottomSheet = () => {
  const { bottomSheetVisible, setBottomSheetVisible } = useSpecsBottomSheetAtom()
  const isOpen = useSharedValue(false);
  const { handleService, isPending } = useSpecsUnLinkService();

  const toggleSheet = () => {
    if (!isPending) {
      isOpen.value = false;
      setBottomSheetVisible(false)
    }
  };

  useEffect(() => {
    if (bottomSheetVisible) {
      isOpen.value = true;
    } else {
      isOpen.value = false;
    }
  }, [bottomSheetVisible]);

  const handleDelete = async () => {
    try {
      handleService()
    } catch (error) {
      showToast('error', 'An error occurred while unlinking');
      toggleSheet()
    }
  };


  return (
    <BottomSheet isOpen={isOpen} toggleSheet={toggleSheet}>
      <Fragment>
        <View style={styles.container}>
          <TextRegular fontSize="st">
            {`Are you sure you want to unlink this spectacles account?`}
          </TextRegular>
        </View>
        <View style={styles.subContainer}>
          <PrimaryButton
            buttonStyle={styles.cancelButtonStyle}
            textStyle={{ fontSize: RFValue(12), color: Colors.white }}
            title="No, cancel"
            onPress={toggleSheet}
            disabled={isPending}
            leftIcon={
              <View style={[styles.iconContainer, { borderColor: Colors.white }]}>
                <CloseIcon size={1.5} color={Colors.white} />
              </View>
            }
          />
          <PrimaryButton
            title="Yes, unlink"
            buttonStyle={styles.confirmButtonStyle}
            onPress={handleDelete}
            textStyle={{ fontSize: RFValue(12) }}
            leftIcon={
              <View style={styles.iconContainer}>
                <TickIcon size={1.5} />
              </View>
            }
            loading={isPending}
            disabled={isPending}
          />
        </View>
      </Fragment>
    </BottomSheet>
  );
};

export { UnlinkSpecsBottomSheet };

const styles = StyleSheet.create({
  container: {
    marginTop: heightPercentageToDP(1),
    marginBottom: heightPercentageToDP(3),
    width: '100%',
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
