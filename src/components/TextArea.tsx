import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { EditIcon } from 'src/assets';
import { Colors } from 'src/themes';

interface Props {
  textData: string;
  setTextData: React.Dispatch<React.SetStateAction<string>>;
}
const TextArea = ({ setTextData, textData }: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setTextData}
        value={textData}
        numberOfLines={5}
        style={styles.inputContainer}
        placeholder="Enter Prompt to your results..."
        multiline
        maxLength={300}
      />
      {!textData && (
        <View style={styles.iconContainer}>
          <EditIcon size={3} color={Colors.primary_600} />
        </View>
      )}
    </View>
  );
};

export { TextArea };

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    borderRadius: RFValue(15),
    paddingVertical: heightPercentageToDP(2),
    paddingHorizontal: widthPercentageToDP(5),
    height: heightPercentageToDP(15),
  },
  inputContainer: {
    fontFamily: 'FunnelDisplay-Regular',
    fontSize: RFValue(12),
    color: Colors.gray_900,
    textAlignVertical: 'top',
    height: '100%',
  },
  iconContainer: {
    position: 'absolute',
    right: widthPercentageToDP(5),
    top: heightPercentageToDP(2),
  },
});
