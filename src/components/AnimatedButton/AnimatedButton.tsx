import React from 'react';

import {StyleSheet, useWindowDimensions, View} from 'react-native';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';

import {PressableScale} from './PressableScale';
import {Colors} from 'src/themes';
import {RFValue} from 'react-native-responsive-fontsize';
import {heightPercentageToDP} from 'react-native-responsive-screen';

type SplitAction = {
  label: string;
  onPress: () => void;
  backgroundColor: string;
};

type AnimatedButtonProps = {
  splitted: boolean;
  mainAction: SplitAction;
  leftAction: SplitAction;
  rightAction: SplitAction;
};

const ButtonHeight = 60;
const AnimatedButton = ({
  splitted,
  mainAction,
  leftAction,
  rightAction,
}: AnimatedButtonProps) => {
  const {width: windowWidth} = useWindowDimensions();

  const paddingHorizontal = 20;
  const gap = 10;
  const SplittedButtonWidth = (windowWidth - paddingHorizontal * 2 - gap) / 2;

  const rLeftButtonStyle = useAnimatedStyle(() => {
    const leftButtonWidth = splitted ? SplittedButtonWidth * 0.7 : 0;
    return {
      width: withTiming(leftButtonWidth),
      opacity: withTiming(splitted ? 1 : 0),
    };
  }, [splitted]);

  const rLeftTextStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(splitted ? 1 : 0, {
        duration: 200,
      }),
    };
  }, [splitted]);

  const rMainButtonStyle = useAnimatedStyle(() => {
    const mainButtonWidth = splitted
      ? SplittedButtonWidth * 1.3
      : SplittedButtonWidth * 2 + gap;
    return {
      width: withTiming(mainButtonWidth),
      marginLeft: withTiming(splitted ? gap : 0),
      backgroundColor: withTiming(
        splitted ? rightAction.backgroundColor : mainAction.backgroundColor,
      ),
    };
  }, [splitted]);

  const rMainTextStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(splitted ? 0 : 1),
    };
  }, [splitted]);

  const rRightTextStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(splitted ? 1 : 0),
    };
  }, [splitted]);

  return (
    <View
      style={{
        width: '100%',
        height: ButtonHeight,
        paddingHorizontal,
        flexDirection: 'row',
        marginBottom: heightPercentageToDP(2),
      }}>
      <PressableScale
        onPress={leftAction.onPress}
        style={[
          {
            backgroundColor: leftAction.backgroundColor,
          },
          rLeftButtonStyle,
          styles.button,
        ]}>
        <Animated.Text numberOfLines={1} style={[styles.label, rLeftTextStyle]}>
          {leftAction.label}
        </Animated.Text>
      </PressableScale>
      <PressableScale
        onPress={splitted ? rightAction.onPress : mainAction.onPress}
        style={[rMainButtonStyle, styles.button]}>
        <Animated.Text style={[styles.label, rMainTextStyle]}>
          {mainAction.label}
        </Animated.Text>
        <Animated.Text style={[styles.label, rRightTextStyle]}>
          {rightAction.label}
        </Animated.Text>
      </PressableScale>
    </View>
  );
};

export {AnimatedButton};

const styles = StyleSheet.create({
  label: {
    fontSize: RFValue(14),
    color: Colors.white,
    fontFamily: 'FunnelDisplay-Bold',
    position: 'absolute',
  },
  button: {
    height: ButtonHeight,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderCurve: 'continuous',
  },
});
