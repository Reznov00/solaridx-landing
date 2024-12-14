import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { TextBold, TextRegular } from 'src/components';
import { PageInterface } from 'src/constants';
import { Colors } from 'src/themes';

interface PageProps {
  page: PageInterface;
}

const Page = ({ page }: PageProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={page.source} style={[styles.image]} resizeMode={'contain'} />
      </View>
      <View style={styles.dataContainer}>
        <TextBold
          fontSize="h1"
          color="white"
          style={{ marginBottom: 10, textAlign: 'center' }}>
          {page.title}
        </TextBold>
        <TextRegular
          fontSize="bt"
          color="gray_300"
          style={{ textAlign: 'center' }}>
          {page.description}
        </TextRegular>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: heightPercentageToDP(5),
    width: widthPercentageToDP(100),
    alignItems: 'center',
    backgroundColor: Colors.gray_800,
    gap: heightPercentageToDP(5)
  },
  image: {
    height: '100%',
    width: '100%',
    opacity: 1,
  },
  dataContainer: {
    alignItems: 'center',
    marginHorizontal: widthPercentageToDP(7),
  },
  iconContainer: {
    alignItems: 'center',
    width: widthPercentageToDP(80),
    height: heightPercentageToDP(50),

  },
});

export { Page };
