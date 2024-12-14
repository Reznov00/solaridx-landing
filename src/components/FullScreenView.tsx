import React from 'react';
import {SafeAreaView, StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {Colors} from 'src/themes';

interface Props {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}
const FullScreenView = ({style, children}: Props) => {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
export {FullScreenView};
