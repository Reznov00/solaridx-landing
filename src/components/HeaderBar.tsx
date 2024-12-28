import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import { RFValue } from 'react-native-responsive-fontsize';
import { CloseIcon } from 'src/assets';
import { Colors } from 'src/themes';
import { BackButton, Touchable } from './Buttons';
import { TextMedium } from './Text';

type HeaderBarI = {
  title: string;
  disabled?: boolean;
  showBackButton?: boolean;
  rightButton?: boolean;
  rightButtonAction?: () => void;
  containerStyle?: ViewStyle
};

const HeaderBar = (props: HeaderBarI) => {
  const {
    title,
    disabled,
    showBackButton = true,
    rightButton = false,
    rightButtonAction,
    containerStyle
  } = props;

  return (
    <View>
      <View style={[styles.container, containerStyle]}>
        {showBackButton && (
          <BackButton />
        )}
        {title && (
          <View style={styles.headerTextContainer}>
            <TextMedium fontSize="sh2" color="gray_900">
              {title}
            </TextMedium>
          </View>
        )}
        {rightButton && (
          <Touchable
            style={styles.backButtonContainer}

            disabled={disabled}
            onPress={() => {
              rightButtonAction && rightButtonAction();
            }}>
            <CloseIcon size={2.5} color={Colors.primary_600} />
          </Touchable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP(100),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: widthPercentageToDP(5),
    paddingBottom: heightPercentageToDP(1),
    marginTop: heightPercentageToDP(2),
    gap: widthPercentageToDP(3)
  },

  headerTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: heightPercentageToDP(5),
    alignSelf: 'flex-start',
    flex: 1,

  },
  backButtonContainer: {
    alignSelf: 'flex-start',
    padding: RFValue(5),
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#E6E6E6',
  },
});
export { HeaderBar };
