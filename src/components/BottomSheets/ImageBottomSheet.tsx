import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { SharedValue } from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { CameraIcon, LibraryIcon } from 'src/assets';
import { Colors } from 'src/themes';
import { BottomSheet } from './BottomSheet';
import { TextRegular } from '../Text';
import { Touchable } from '../Buttons';
import { hasAndroidPermission, MediaCompressor, MediaPicker } from 'src/utilities';

interface Props {
  isOpen: SharedValue<boolean>;
  handlePress: (formData: FormData, imageURI: string) => void;
}
const ImageBottomSheet = ({ isOpen, handlePress }: Props) => {
  const toggleSheet = () => {
    isOpen.value = !isOpen.value;
  };

  const handleButtonPress = async (mode: 'camera' | 'library') => {
    if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
      return;
    }
    handleImageUpload(mode);
    toggleSheet();
  };

  const handleImageUpload = async (mode: 'camera' | 'library' = 'camera') => {
    const cameraMode = mode === 'camera';
    const res = await MediaPicker({ useCamera: cameraMode });
    if (res) {
      const compressedImage = await MediaCompressor({ filePath: res.path });
      const formData = new FormData();
      formData.append('file', {
        uri:
          Platform.OS === 'ios'
            ? compressedImage.replace('file://', '')
            : compressedImage,
        type: res.mime || 'image/jpeg',
        name: res.filename || 'image.jpg',
      } as any);
      handlePress(formData, compressedImage)
    }
  };

  return (
    <BottomSheet isOpen={isOpen} toggleSheet={() => (isOpen.value = false)}>
      <View style={styles.container}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Touchable
            style={styles.backButtonContainer}
            onPress={() => handleButtonPress('camera')}>
            <CameraIcon size={4} />
          </Touchable>
          <TextRegular fontSize="st">Camera</TextRegular>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Touchable
            style={styles.backButtonContainer}
            onPress={() => handleButtonPress('library')}>
            <LibraryIcon size={4} />
          </Touchable>
          <TextRegular fontSize="st">Library</TextRegular>
        </View>
      </View>
    </BottomSheet>
  );
};

export { ImageBottomSheet };

const styles = StyleSheet.create({
  container: {
    marginTop: heightPercentageToDP(1),
    marginBottom: heightPercentageToDP(3),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: widthPercentageToDP(5),
  },
  backButtonContainer: {
    alignSelf: 'flex-start',
    padding: RFValue(8),
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Colors.gray_900,
  },
});
