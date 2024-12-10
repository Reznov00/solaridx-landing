import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Toast, {ToastShowParams} from 'react-native-toast-message';
import {CloseIcon, ErrorIcon, InfoIcon, SuccessIcon} from 'src/assets';
import {TextRegular} from 'src/components';
import {Colors} from './Colors';

export const toastConfig = {
  success: (props: ToastShowParams) => {
    return (
      <View style={[styles.toastContainer, {borderColor: '#59DF32'}]}>
        <View style={styles.subContainer}>
          <SuccessIcon size={3.5} />
          <TextRegular style={[styles.textStyle, props.text1Style]}>
            {props.text1}
          </TextRegular>
        </View>
        <TouchableOpacity onPress={() => Toast.hide()}>
          <CloseIcon strokeWidth={2.5} size={2} color={'#B3B3B3'} />
        </TouchableOpacity>
      </View>
    );
  },

  error: (props: ToastShowParams) => {
    return (
      <View style={[styles.toastContainer, {borderColor: '#F35F5F'}]}>
        <View style={styles.subContainer}>
          <ErrorIcon size={3.5} />
          <TextRegular style={[styles.textStyle, props.text1Style]}>
            {props.text1}
          </TextRegular>
        </View>
        <TouchableOpacity onPress={() => Toast.hide()}>
          <CloseIcon strokeWidth={2.5} size={2} color={'#B3B3B3'} />
        </TouchableOpacity>
      </View>
    );
  },
  info: (props: ToastShowParams) => {
    return (
      <View style={[styles.toastContainer, {borderColor: '#917AEB'}]}>
        <View style={styles.subContainer}>
          <InfoIcon size={3.5} />
          <TextRegular style={[styles.textStyle, props.text1Style]}>
            {props.text1}
          </TextRegular>
        </View>
        <TouchableOpacity onPress={() => Toast.hide()}>
          <CloseIcon strokeWidth={2.5} size={2} color={'#B3B3B3'} />
        </TouchableOpacity>
      </View>
    );
  },
};

const styles = StyleSheet.create({
  toastContainer: {
    width: '90%',
    minHeight: heightPercentageToDP(8),
    backgroundColor: Colors.white,
    borderRadius: 5,
    paddingVertical: heightPercentageToDP(2),
    paddingHorizontal: widthPercentageToDP(3),
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderLeftWidth: 7,
    flexDirection: 'row',
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: widthPercentageToDP(3),
  },
  textStyle: {
    fontSize: RFValue(12),
    color: Colors.black,
    width: '85%',
  },
});
