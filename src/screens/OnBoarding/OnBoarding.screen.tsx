import React, { useCallback } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue
} from 'react-native-reanimated';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { TextRegular, Touchable } from 'src/components';
import { PAGES } from 'src/constants';
import { STACKS_ENUM } from 'src/enums';
import { Colors } from 'src/themes';
import { NavigationService } from 'src/utilities';
import { Dot, Page } from './components';

const PAGE_WIDTH = widthPercentageToDP(100);
const OnBoardingScreen = () => {
  const translateX = useSharedValue(0);

  const activeIndex = useDerivedValue(() => {
    return Math.round(translateX.value / PAGE_WIDTH);
  });

  const scrollRef = useAnimatedRef<ScrollView>();
  const onIconPress = useCallback(() => {
    if (activeIndex.value === PAGES.length - 1) {
      NavigationService.navigate(STACKS_ENUM.AUTH_STACK);
    }
    scrollRef.current?.scrollTo({ x: PAGE_WIDTH * (activeIndex.value + 1) });
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
    <View style={styles.container}>
      <Animated.ScrollView
        ref={scrollRef as any}
        style={{ flex: 1, backgroundColor: Colors.gray_800 }}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}>
        {PAGES.map((page, index) => (
          <Page key={index.toString()} page={page} />
        ))}
      </Animated.ScrollView>
      <View style={styles.footer}>
        <View style={[styles.fillCenter, { flexDirection: 'row' }]}>
          {PAGES.map((_, index) => {
            return (
              <Dot
                key={index.toString()}
                index={index}
                activeDotIndex={activeIndex}
              />
            );
          })}
        </View>
        <Touchable onPress={onIconPress} style={styles.buttonContainer}>
          <TextRegular fontSize='bt' color='white'>Next</TextRegular>
        </Touchable>
      </View>
    </View >
  );
};

export { OnBoardingScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray_800,
  },
  footer: {
    position: 'absolute',
    bottom: heightPercentageToDP(4),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: heightPercentageToDP(1),
    width: '100%',
  },
  fillCenter: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  buttonContainer: {
    paddingHorizontal: widthPercentageToDP(6),
    position: 'absolute',
    right: 0,
    paddingVertical: heightPercentageToDP(1),
  },
});
