import React, { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { FullScreenView, HeaderBar, Touchable } from 'src/components';
import { ChartViewComponent } from './components';
import { RFValue } from 'react-native-responsive-fontsize';
import { Colors } from 'src/themes';
import { BackArrowIcon } from 'src/assets';
import { dummySolarData } from 'src/constants';

const PAGE_WIDTH = widthPercentageToDP(100);

const StatisticsHomeScreen = () => {
  const translateX = useSharedValue(0);
  const [pages,] = useState(Array(15).fill('a'));
  const [dates] = useState(Array(15).fill(null).map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date.toDateString();
  }));
  const [currentDate, setCurrentDate] = useState(dates[0]);

  const activeIndex = useDerivedValue(() => {
    const index = Math.round(translateX.value / PAGE_WIDTH);
    runOnJS(setCurrentDate)(dates[index]);
    return index;
  });

  const scrollRef = useAnimatedRef<Animated.ScrollView>();

  const onIconPress = useCallback(() => {
    if (activeIndex.value < pages.length - 1) {
      scrollRef.current?.scrollTo({ x: PAGE_WIDTH * (activeIndex.value + 1) });
    }
  }, []);

  const onBackIconPress = useCallback(() => {
    if (activeIndex.value > 0) {
      scrollRef.current?.scrollTo({ x: PAGE_WIDTH * (activeIndex.value - 1) });
    }
  }, []);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      translateX.value = event.contentOffset.x;
    },
  });

  // Animated opacity for the date
  const animatedDateStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(1, { duration: 0 }),
    };
  });

  return (
    <FullScreenView>
      <HeaderBar title='Predictions' />
      <Animated.ScrollView
        ref={scrollRef}
        style={{ maxHeight: heightPercentageToDP(60) }}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}>
        {dummySolarData.map((item, index) => (
          <ChartViewComponent key={index} data={item} />
        ))}
      </Animated.ScrollView>
      <View style={styles.footer}>
        <Touchable onPress={onBackIconPress} style={styles.buttonContainer}>
          <BackArrowIcon size={3} color={Colors.gray_900} />
        </Touchable>
        <Animated.Text style={[styles.dateStyle, animatedDateStyle]}>
          {currentDate}
        </Animated.Text>
        <Touchable onPress={onIconPress} style={styles.buttonContainer}>
          <BackArrowIcon style={{ transform: [{ rotate: '180deg' }] }} size={3} color={Colors.gray_900} />
        </Touchable>
      </View>
    </FullScreenView>
  );
};

export { StatisticsHomeScreen };

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: heightPercentageToDP(1),
  },
  buttonContainer: {
    paddingHorizontal: widthPercentageToDP(6),
    paddingVertical: heightPercentageToDP(1),
  },
  dateStyle: {
    fontSize: RFValue(14),
    color: Colors.gray_900,
  },
});
