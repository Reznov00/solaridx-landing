import React, { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue
} from 'react-native-reanimated';
import { AnimatedScrollView } from 'react-native-reanimated/lib/typescript/component/ScrollView';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { FullScreenView, HeaderBar, TextRegular, Touchable } from 'src/components';
import { ChartViewComponent } from './components';

const PAGE_WIDTH = widthPercentageToDP(100);
const StatisticsHomeScreen = () => {
  const translateX = useSharedValue(0);
  const [pages,] = useState(Array(15).fill('a'))

  const activeIndex = useDerivedValue(() => {
    return Math.round(translateX.value / PAGE_WIDTH);
  });

  const scrollRef = useAnimatedRef<AnimatedScrollView>();
  const onIconPress = useCallback(() => {
    if (activeIndex.value === pages.length - 1) {

    }
    scrollRef.current?.scrollTo({ x: PAGE_WIDTH * (activeIndex.value + 1) });
  }, []);

  const onBackIconPress = useCallback(() => {
    if (activeIndex.value > 0) {  // Prevent going back from the first card
      scrollRef.current?.scrollTo({ x: PAGE_WIDTH * (activeIndex.value - 1) });
    }
  }, []);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      // Only allow scrolling to the left if at the first card
      const newOffsetX = event.contentOffset.x;
      if (activeIndex.value === 0 && newOffsetX < 0) {
        scrollRef.current?.scrollTo({ x: 0, animated: false });
      } else {
        translateX.value = newOffsetX;
      }
    },
  });


  return (
    <FullScreenView>
      <HeaderBar title='Predictions' />
      <Animated.ScrollView
        ref={scrollRef}
        style={{ maxHeight: heightPercentageToDP(60), }}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}>
        {pages.map((_, index) => (
          <View style={styles.chartContainer} key={index}>
            <ChartViewComponent />
          </View>
        ))}
      </Animated.ScrollView>
      <View style={styles.footer}>
        <Touchable onPress={onBackIconPress} style={styles.buttonContainer}>
          <TextRegular fontSize='bt' color='gray_900'>Previous</TextRegular>
        </Touchable>
        <Touchable onPress={onIconPress} style={styles.buttonContainer}>
          <TextRegular fontSize='bt' color='gray_900'>Next</TextRegular>
        </Touchable>
      </View>
    </FullScreenView >
  );
};

export { StatisticsHomeScreen };

const styles = StyleSheet.create({
  chartContainer: {
    // width: widthPercentageToDP(100),
    alignItems: 'center',
    justifyContent: 'center'
  },
  dataContainer: {
    alignItems: 'center',
    marginHorizontal: widthPercentageToDP(7),
  },
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
});


