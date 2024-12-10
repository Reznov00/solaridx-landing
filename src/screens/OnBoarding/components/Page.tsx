import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {LogoIcon} from 'src/assets';
import {TextBold, TextRegular} from 'src/components';
import {PageInterface} from 'src/constants';

interface PageProps {
  page: PageInterface;
}

// const {width: PAGE_WIDTH, height: PAGE_HEIGHT} = Dimensions.get('window');

const Page = ({page}: PageProps) => {
  return (
    <View style={styles.container}>
      <Image source={page.source} style={[styles.image]} resizeMode={'cover'} />
      <View style={styles.iconContainer}>
        <LogoIcon size={8} version="Compact" />
      </View>
      <View style={styles.dataContainer}>
        <TextBold
          fontSize="h1"
          color="white"
          style={{marginBottom: 10, textAlign: 'center'}}>
          {page.title}
        </TextBold>
        <TextRegular
          fontSize="sh2"
          color="borderColour"
          style={{textAlign: 'center'}}>
          {page.description}
        </TextRegular>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: heightPercentageToDP(100),
    width: widthPercentageToDP(100),
    opacity: 0.5,
  },
  dataContainer: {
    position: 'absolute',
    alignItems: 'center',
    marginHorizontal: widthPercentageToDP(7),
    bottom: heightPercentageToDP(20),
  },
  iconContainer: {
    position: 'absolute',
    alignItems: 'center',
    top: heightPercentageToDP(8),
  },
});

export {Page};
