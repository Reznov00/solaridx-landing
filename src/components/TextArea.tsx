import React, { useState } from 'react';
import { StyleSheet, TextInput, View, ViewStyle } from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { Colors, FontSizes, LineHeight } from 'src/themes';
import { isIOS } from 'src/utilities';

interface Props {
  textData: string;
  setTextData: React.Dispatch<React.SetStateAction<string>>;
  style?: ViewStyle
  placeholder?: string
  rightIcon?: React.ReactElement
}
const TextArea = ({ setTextData, textData, style, placeholder, rightIcon, }: Props) => {
  const [height, setHeight] = useState(40);
  return (
    <View style={[isIOS ? styles.container : styles.container, style]}>
      <View style={{ flex: 1 }}>
        <TextInput
          onChangeText={setTextData}
          value={textData}
          numberOfLines={4}
          style={[styles.inputContainer, { maxHeight: !isIOS ? Math.max(heightPercentageToDP(4.5), height) : undefined }]}
          placeholder={placeholder}
          placeholderTextColor={Colors.gray_900}
          multiline
          onContentSizeChange={(event) =>
            setHeight(event.nativeEvent.contentSize.height)
          }
          maxLength={120}
        />
      </View>

      {rightIcon && !textData && rightIcon}
    </View>
  );
};

export { TextArea };

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.gray_50,
    borderRadius: widthPercentageToDP(3),
    paddingVertical: heightPercentageToDP(isIOS ? 1.5 : 1),
    paddingHorizontal: widthPercentageToDP(5),
    maxHeight: heightPercentageToDP(15),
    minHeight: heightPercentageToDP(6.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputContainer: {
    fontFamily: 'FunnelDisplay-Regular',
    fontSize: FontSizes.st,
    lineHeight: LineHeight.st,
    color: Colors.gray_900,
    textAlignVertical: 'top',
    // flex: 1
  },
});
