import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { lineDataItem } from 'react-native-gifted-charts';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { BackArrowIcon } from 'src/assets';
import { FullScreenView, HeaderBar, Loader, Touchable } from 'src/components';
import { usePostChatSesrvice } from 'src/services';
import { useRecentCoordsAtom } from 'src/store';
import { Colors } from 'src/themes';
import { ChartViewComponent } from './components';

const StatisticsHomeScreen = () => {
  const { handleService, isPending } = usePostChatSesrvice();
  const { recentCoords } = useRecentCoordsAtom();

  // Cache to store data for each date
  const [dataCache, setDataCache] = useState<Record<string, any>>({});

  // Generate dates for the next 15 days
  const dates = useMemo(() => Array(15).fill(null).map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date.toDateString();
  }), []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentDate = dates[currentIndex];

  // Fetch data for the current date if not already in cache
  useEffect(() => {
    if (!dataCache[currentDate]) {
      handleService({
        date: new Date(currentDate),
        lat: recentCoords?.latitude as number,
        long: recentCoords?.longitude as number,
        systemSize: 1,
      }).then((response) => {
        // Update the cache with the new data
        setDataCache((prev) => ({
          ...prev,
          [currentDate]: response,
        }));
      });
    }
  }, [currentDate, recentCoords]);

  // Get data for the current date from the cache
  const currentData = dataCache[currentDate] || [];

  const getData = (mode: 'cloudy' | 'clear'): lineDataItem[] => {
    if (currentData) {
      return currentData.map((item: any) => ({
        value: mode === 'clear' ? item.clearSkyEnergy : item.cloudySkyEnergy,
        dataPointText: item.hour.toString(),
      }));
    }
    return [];
  };

  const onNextPress = useCallback(() => {
    if (currentIndex < dates.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, dates.length]);

  const onBackPress = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  return !isPending ? (
    <FullScreenView>
      <HeaderBar title='Predictions' />
      <ChartViewComponent
        clearSkyData={getData('clear')}
        cloudySkyData={getData('cloudy')}
      />
      <View style={styles.footer}>
        <Touchable onPress={onBackPress} style={styles.buttonContainer}>
          <BackArrowIcon size={3} color={Colors.gray_900} />
        </Touchable>
        <Text style={[styles.dateStyle]}>
          {currentDate}
        </Text>
        <Touchable onPress={onNextPress} style={styles.buttonContainer}>
          <BackArrowIcon style={{ transform: [{ rotate: '180deg' }] }} size={3} color={Colors.gray_900} />
        </Touchable>
      </View>
    </FullScreenView>
  ) : <Loader loading />;
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