import React, { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue
} from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { BackArrowIcon } from 'src/assets';
import { FullScreenView, HeaderBar, Touchable } from 'src/components';
import { ChartViewInterface } from 'src/interfaces';
import { Colors } from 'src/themes';
import { generateDatesArray } from 'src/utilities';
import { ChartViewComponent } from './components';

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

  const scrollRef = useAnimatedRef<Animated.FlatList<ChartViewInterface>>();

  const onIconPress = useCallback(() => {
    if (activeIndex.value < pages.length - 1) {
      scrollRef.current?.scrollToIndex({ index: activeIndex.value + 1 });
    }
  }, []);

  const onBackIconPress = useCallback(() => {
    if (activeIndex.value > 0) {
      scrollRef.current?.scrollToIndex({ index: activeIndex.value - 1 });
    }
  }, []);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      translateX.value = event.contentOffset.x;
    },
  });


  return (
    <FullScreenView>
      <HeaderBar title='Predictions' />
      <Animated.FlatList
        ref={scrollRef}
        data={generateDatesArray()}
        renderItem={({ item, index }) => <ChartViewComponent key={index} date={item.date} />}
        horizontal
        scrollEnabled={false}
        style={{ maxHeight: heightPercentageToDP(45) }}
        pagingEnabled
        keyExtractor={(_, index) => index.toExponential()}
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        maxToRenderPerBatch={15}
      />
      <View style={styles.footer}>
        <Touchable onPress={onBackIconPress} style={styles.buttonContainer}>
          <BackArrowIcon size={3} color={Colors.gray_900} />
        </Touchable>
        <Animated.Text style={[styles.dateStyle]}>
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
