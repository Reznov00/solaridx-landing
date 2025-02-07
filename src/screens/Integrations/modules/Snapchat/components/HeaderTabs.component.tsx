import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Touchable } from 'src/components';
import { Colors } from 'src/themes';

type TabTypes = 'data' | 'settings';
interface Props {
  setSelectedTab: React.Dispatch<React.SetStateAction<TabTypes>>;
  selectedTab: TabTypes;
}

const SelectTabWidth = widthPercentageToDP(45);

const HeaderTabs = ({ setSelectedTab, selectedTab }: Props) => {
  const [selectedTabState, setSelectedTabState] =
    useState<TabTypes>(selectedTab);

  const handleTabChange = (newTab: TabTypes) => {
    setSelectedTabState(newTab);
    setSelectedTab(newTab);
    setTimeout(() => { }, 2000);
  };

  const translateXStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withTiming(
          selectedTabState === 'data' ? 0 : SelectTabWidth,
          {
            duration: 300,
          },
        ),
      },
    ],
  }));

  const textStyle = (tab: TabTypes) =>
    useAnimatedStyle(() => ({
      color: withTiming(
        selectedTabState === tab ? Colors.white : Colors.gray_900,
        { duration: 500 },
      ),
    }));


  return (
    <View style={styles.shadowContainer}>
      <View style={styles.container}>
        <Animated.View style={[styles.slidingTabContainer, translateXStyle]}>
          <View style={styles.slidingTab} />
        </Animated.View>
        {(['data', 'settings'] as TabTypes[]).map(tab => (
          <Touchable
            key={tab}
            style={styles.buttonContainer}
            onPress={() => handleTabChange(tab)}>
            <Animated.Text style={[styles.text, textStyle(tab)]}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Animated.Text>
          </Touchable>
        ))}
      </View>
    </View>
  );
};

export { HeaderTabs };

const styles = StyleSheet.create({
  shadowContainer: {
    shadowRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 0 },
    elevation: 10,
    backgroundColor: Colors.white,
    borderRadius: widthPercentageToDP(3),
    alignSelf: 'center',
    marginTop: heightPercentageToDP(2),
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: SelectTabWidth * 2,
  },
  buttonContainer: {
    paddingHorizontal: widthPercentageToDP(0),
    paddingVertical: widthPercentageToDP(3),
    borderRadius: widthPercentageToDP(10),
    width: SelectTabWidth,
    alignItems: 'center',
    overflow: 'hidden',
    flexDirection: 'row',
    gap: widthPercentageToDP(1),
    justifyContent: 'center',
  },
  text: {
    fontSize: RFValue(16),
    fontFamily: 'FunnelDisplay-Medium',
  },
  slidingTabContainer: {
    ...StyleSheet.absoluteFillObject,
    width: SelectTabWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slidingTab: {
    width: '95%',
    height: '80%',
    borderRadius: widthPercentageToDP(3),
    backgroundColor: Colors.primary_500,
  },
});
