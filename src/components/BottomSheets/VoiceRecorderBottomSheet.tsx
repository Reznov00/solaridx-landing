import React, { useState } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { SharedValue } from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { CameraIcon, CrossIcon, LibraryIcon, SendIcon } from 'src/assets';
import { Colors } from 'src/themes';
import { hasAndroidPermission } from 'src/utilities';
import { Touchable } from '../Buttons';
import { TextMedium, TextRegular } from '../Text';
import { BottomSheet } from './BottomSheet';

interface Props {
  isOpen: SharedValue<boolean>;
}
const VoiceRecorderBottomSheet = ({ isOpen }: Props) => {
  const [duration, setDuration] = useState("01")
  const toggleSheet = () => {
    isOpen.value = !isOpen.value;
  };

  const handleButtonPress = async () => {
    if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
      return;
    }
    toggleSheet();
  };

  const handleCancel = () => {
    toggleSheet()
  }


  return (
    <BottomSheet isOpen={isOpen} toggleSheet={() => { }}>
      <View style={styles.container}>
        <Touchable
          style={styles.iconContainer}
          onPress={handleCancel}>
          <CrossIcon size={3.5} color={Colors.gray_900} />
        </Touchable>
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        </View>
        <Touchable
          style={styles.iconContainer}
          onPress={handleButtonPress}>
          <SendIcon size={3.5} color={Colors.gray_900} />
        </Touchable>
      </View>
    </BottomSheet>
  );
};

export { VoiceRecorderBottomSheet };

const styles = StyleSheet.create({
  container: {
    marginTop: heightPercentageToDP(1),
    marginBottom: heightPercentageToDP(3),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: widthPercentageToDP(5),
  },
  iconContainer: {
    height: heightPercentageToDP(6),
    width: heightPercentageToDP(6),
    justifyContent: 'center',
    alignItems: 'center',
    padding: RFValue(8),
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Colors.gray_900,
  },
});
