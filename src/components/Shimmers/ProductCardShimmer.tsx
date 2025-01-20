import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from 'src/themes';
import { tabBarPercentageToDP } from 'src/hooks';
import { isIOS } from 'src/utilities';

const ProductCardShimmer = () => {
  const shimmerTranslateX = useSharedValue(-widthPercentageToDP(50)); // Start from outside the left edge

  shimmerTranslateX.value = withRepeat(
    withTiming(widthPercentageToDP(50), {
      duration: 1000,
      easing: Easing.linear,
    }),
    -1,
    false,
  );

  const shimmerEffect = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: shimmerTranslateX.value }],
    };
  });

  return (
    <View style={styles.containerStyle}>
      <View style={styles.listItem}>
        <Animated.View style={[StyleSheet.absoluteFill, shimmerEffect]}>
          <LinearGradient
            colors={[
              'rgba(255, 255, 255, 0)',
              'rgba(255, 255, 255, 0.5)',
              'rgba(255, 255, 255, 0)',
            ]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={StyleSheet.absoluteFill}
          />
        </Animated.View>
      </View>
      <View style={styles.textStyle}>
        <Animated.View style={[StyleSheet.absoluteFill, shimmerEffect]}>
          <LinearGradient
            colors={[
              'rgba(255, 255, 255, 0)',
              'rgba(255, 255, 255, 0.5)',
              'rgba(255, 255, 255, 0)',
            ]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={StyleSheet.absoluteFill}
          />
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: heightPercentageToDP(1),
  },
  listItem: {
    height: isIOS
      ? tabBarPercentageToDP(20 * 1.33, 20 * 1.33, 23 * 1.33)
      : heightPercentageToDP(20),
    width: isIOS ? tabBarPercentageToDP(20, 20, 24) : heightPercentageToDP(20),
    borderRadius: RFValue(15),
    backgroundColor: Colors.gray_100,
    overflow: 'hidden',
  },
  textStyle: {
    textAlign: 'center',
    backgroundColor: Colors.gray_100,
    borderRadius: RFValue(15),
    height: heightPercentageToDP(2),
    width: widthPercentageToDP(30),
    marginTop: heightPercentageToDP(0.5),
    marginBottom: heightPercentageToDP(1),
    overflow: 'hidden',
  },
});

export { ProductCardShimmer };
