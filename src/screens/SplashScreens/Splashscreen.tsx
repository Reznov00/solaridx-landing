import React, { useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Colors } from 'src/themes';

const SplashScreen = () => {
  const rippleSize = useSharedValue(10);
  const logoOpacity = useSharedValue(0);
  const mainViewOpacity = useSharedValue(1);

  useEffect(() => {
    rippleSize.value = withTiming(heightPercentageToDP(150), { duration: 500 });
    logoOpacity.value = withDelay(500, withTiming(1, { duration: 500 }));
    mainViewOpacity.value = withDelay(1600, withTiming(0, { duration: 400 }));
  }, []);

  const rippleStyle = useAnimatedStyle(() => {
    return {
      width: rippleSize.value,
      height: rippleSize.value,
      borderRadius: rippleSize.value / 2,
    };
  });

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: logoOpacity.value,
    };
  });

  const mainViewStyle = useAnimatedStyle(() => {
    return {
      opacity: mainViewOpacity.value,
    };
  });

  return (
    <Animated.View style={[styles.container, mainViewStyle]}>
      <Animated.View style={[styles.ripple, rippleStyle]} />
      <Animated.View style={logoStyle}>
        <Image style={{ width: widthPercentageToDP(80), height: widthPercentageToDP(80) }} resizeMode='contain' source={require('src/assets/pngs/AppLogo.png')} />
      </Animated.View>
    </Animated.View>
  );
};

export { SplashScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  ripple: {
    position: 'absolute',
    backgroundColor: Colors.white,
  },
});
