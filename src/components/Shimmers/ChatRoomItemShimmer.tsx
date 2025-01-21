import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from 'src/themes';

const ChatRoomItemShimmer = () => {
  const shimmerTranslateX = useSharedValue(-widthPercentageToDP(50)); // Start shimmer outside the left edge

  shimmerTranslateX.value = withRepeat(
    withTiming(widthPercentageToDP(100), {
      duration: 1200,
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
    <View style={styles.container}>
      {/* Title Shimmer */}
      <View style={styles.title}>
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

export { ChatRoomItemShimmer };

const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP(90),
    padding: heightPercentageToDP(2),
    borderRadius: widthPercentageToDP(3),
    marginBottom: heightPercentageToDP(1),
    backgroundColor: Colors.gray_100,
    overflow: 'hidden',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  title: {
    height: heightPercentageToDP(2.5),
    width: widthPercentageToDP(80),
    borderRadius: RFValue(5),
    backgroundColor: Colors.gray_200,
    overflow: 'hidden',
  },
});
