import React, { useCallback, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { AnimatedButton } from 'src/components';
import { PAGES } from 'src/constants';
import { STACKS_ENUM } from 'src/enums';
import { Colors } from 'src/themes';
import { NavigationService } from 'src/utilities';
import { Dot, Page } from './components';

const PAGE_WIDTH = widthPercentageToDP(100);
const OnBoardingScreen = () => {
  const translateX = useSharedValue(0);
  const [splitted, setSplitted] = useState(false);

  const activeIndex = useDerivedValue(() => {
    return Math.round(translateX.value / PAGE_WIDTH);
  });

  const scrollRef = useAnimatedRef<ScrollView>();
  const onIconPress = useCallback(() => {
    if (activeIndex.value === PAGES.length - 1) {
      NavigationService.navigate(STACKS_ENUM.MAIN_STACK);
    }
    scrollRef.current?.scrollTo({ x: PAGE_WIDTH * (activeIndex.value + 1) });
    setSplitted(true);
  }, []);
  const onBackIconPress = useCallback(() => {
    if (activeIndex.value > 0) {  // Prevent going back from the first card
      scrollRef.current?.scrollTo({ x: PAGE_WIDTH * (activeIndex.value - 1) });
      setSplitted(false);
    }
  }, []);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      // Only allow scrolling to the left if at the first card
      const newOffsetX = event.contentOffset.x;
      if (activeIndex.value === 0 && newOffsetX < 0) {
        scrollRef.current?.scrollTo({ x: 0, animated: false });
      } else {
        runOnJS(setSplitted)(newOffsetX !== 0);
        translateX.value = newOffsetX;
      }
    },
  });


  return (
    <View style={styles.container}>
      <Animated.ScrollView
        ref={scrollRef as any}
        style={{ flex: 1, backgroundColor: Colors.black }}
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
        <AnimatedButton
          splitted={splitted}
          mainAction={{
            label: 'Get Started',
            onPress: onIconPress,
            backgroundColor: Colors.designPrimary,
          }}
          leftAction={{
            label: 'Back',
            onPress: onBackIconPress,
            backgroundColor: Colors.designPrimary,
          }}
          rightAction={{
            label: 'Swipe Next',
            onPress: onIconPress,
            backgroundColor: Colors.designPrimary,
          }}
        />
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
      </View>
    </View>
  );
};

export { OnBoardingScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
  footer: {
    position: 'absolute',
    bottom: heightPercentageToDP(3),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: heightPercentageToDP(1),
    width: '100%',
  },
  fillCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    paddingHorizontal: widthPercentageToDP(20),
  },
});
