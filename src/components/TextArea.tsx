import React from 'react';
import { StyleSheet, TextInput, View, ViewStyle } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { Colors } from 'src/themes';
import { isIOS } from 'src/utilities';

interface Props {
  textData: string;
  setTextData: React.Dispatch<React.SetStateAction<string>>;
  style?: ViewStyle
  placeholder?: string
}
const TextArea = ({ setTextData, textData, style, placeholder }: Props) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        onChangeText={setTextData}
        value={textData}
        numberOfLines={5}
        style={styles.inputContainer}
        placeholder={placeholder}
        placeholderTextColor={Colors.gray_900}
        multiline
        maxLength={150}
      />
    </View>
  );
};

export { TextArea };

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.gray_50,
    borderRadius: widthPercentageToDP(3),
    paddingVertical: heightPercentageToDP(isIOS ? 2 : 1),
    paddingHorizontal: widthPercentageToDP(5),
    maxHeight: heightPercentageToDP(15),
  },
  inputContainer: {
    fontFamily: 'FunnelDisplay-Regular',
    fontSize: RFValue(12),
    color: Colors.gray_900,
    textAlignVertical: 'top',
  },
  iconContainer: {
    position: 'absolute',
    right: widthPercentageToDP(5),
    top: heightPercentageToDP(2),
  },
});
