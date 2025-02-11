import React, { Fragment } from 'react';
import { View, ActivityIndicator, StyleSheet, Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { Colors } from 'src/themes';
import { TextBase } from './Text';
interface Props {
  loading: boolean;
  message?: string;
}

const Loader = ({ loading, message }: Props) => {
  return (
    <Fragment>
      {loading && (
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            width: Dimensions.get('window').width,
            height: heightPercentageToDP(100),
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.6)',
          }}>
          <View
            style={{
              backgroundColor: Colors.white,
              borderRadius: 10,
              paddingVertical: heightPercentageToDP(5),
              paddingHorizontal: widthPercentageToDP(10),
            }}>
            <ActivityIndicator size="large" color={Colors.gray_900} />
            {message && (
              <TextBase
                style={{
                  color: Colors.gray_900,
                  fontSize: RFValue(14),
                  textAlign: 'center',
                }}>
                {message}
              </TextBase>
            )}
          </View>
        </View>
      )}
    </Fragment>
  );
};
export { Loader };
