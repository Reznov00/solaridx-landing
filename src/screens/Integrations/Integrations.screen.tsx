import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { SpectaclesIcon } from 'src/assets';
import { BackButton, FullScreenView, TextMedium } from 'src/components';
import { SCREENS_ENUM } from 'src/enums';
import { Colors, FontSizes, LineHeight } from 'src/themes';
import { isIOS, NavigationService } from 'src/utilities';
import { IntegrationsButton } from './components';

const IntegrationsScreen = () => {

  return (
    <FullScreenView>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <BackButton iconSize={2} style={{ padding: RFValue(7) }} />
          <TextMedium fontSize='sh2' numberOfLines={1}>
            {'Integrations'}
          </TextMedium>
        </View>
        <View style={styles.integrationsContainer}>
          <IntegrationsButton
            buttonStyle={styles.buttonStyle}
            onPress={() => { NavigationService.navigate(SCREENS_ENUM.SPECTACLES_MANAGE_SCREEN) }}
            icon={<SpectaclesIcon size={3.5} />}
            shadowEnabled={false}
          />
        </View>
      </View>
    </FullScreenView>
  );
};

export { IntegrationsScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: heightPercentageToDP(2),
    paddingHorizontal: widthPercentageToDP(5),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: widthPercentageToDP(3),
    marginTop: heightPercentageToDP(isIOS ? 1 : 2)
  },
  buttonStyle: {
    width: '100%',
    backgroundColor: Colors.white,
    borderWidth: 1.5,
    borderColor: Colors.gray_700,
    paddingVertical: heightPercentageToDP(1),
    marginVertical: heightPercentageToDP(1),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: widthPercentageToDP(5),
    paddingHorizontal: widthPercentageToDP(3),
  },
  buttonTextStyle: {
    color: Colors.gray_900,
    fontSize: FontSizes.st,
    lineHeight: LineHeight.bt,
    backgroundColor: 'red'
    // flex: 1,
  },
  integrationsContainer: {
    marginVertical: heightPercentageToDP(2)
  }
});
