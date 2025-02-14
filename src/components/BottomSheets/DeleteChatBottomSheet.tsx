import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SharedValue } from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { CloseIcon, TickIcon } from 'src/assets';
import { useDeleteChatService } from 'src/services';
import { Colors } from 'src/themes';
import { PrimaryButton } from '../Buttons';
import { TextRegular } from '../Text';
import { BottomSheet } from './BottomSheet';


interface Props {
  isOpen: SharedValue<boolean>;
  roomID: string
}
const DeleteChatBottomSheet = ({ isOpen, roomID }: Props) => {
  const { handleService, isPending } = useDeleteChatService()
  const toggleSheet = () => {
    isOpen.value = !isOpen.value;
  };

  const handleConfirmPress = async () => {
    await handleService({
      chatRoomId: roomID
    })
    toggleSheet();
  };

  return (
    <BottomSheet isOpen={isOpen} toggleSheet={toggleSheet}>
      <View style={styles.container}>
        <TextRegular fontSize="st">Are you sure you want to delete this chat?</TextRegular>
        <View style={styles.subContainer}>
          <PrimaryButton
            buttonStyle={styles.cancelButtonStyle}
            textStyle={{ fontSize: RFValue(12), color: Colors.white }}
            title="No, cancel"
            disabled={isPending}
            onPress={toggleSheet}
            leftIcon={
              <View style={[styles.iconContainer, { borderColor: Colors.white }]}>
                <CloseIcon size={1.5} color={Colors.white} />
              </View>
            }
          />
          <PrimaryButton
            title="Yes, delete"
            buttonStyle={styles.confirmButtonStyle}
            onPress={handleConfirmPress}
            loading={isPending}
            disabled={isPending}
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

export { DeleteChatBottomSheet };

const styles = StyleSheet.create({
  container: {
    marginTop: heightPercentageToDP(1),
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
