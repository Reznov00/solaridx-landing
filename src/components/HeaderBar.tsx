import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import { RFValue } from 'react-native-responsive-fontsize';
import { BackArrowIcon, CloseIcon } from 'src/assets';
import { Colors } from 'src/themes';
import { NavigationService } from 'src/utilities';
import { TextRegular } from './Text';
import { Touchable } from './Touchable';

type HeaderBarI = {
  title: string;
  onBackPressAction?: () => void;
  disabled?: boolean;
  showBackButton?: boolean;
  rightButton?: boolean;
  rightButtonAction?: () => void;
  containerStyle?: ViewStyle
};

const HeaderBar = (props: HeaderBarI) => {
  const {
    title,
    onBackPressAction,
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
          <Touchable
            contentContainerStyle={[
              styles.backButtonContainer,
              { marginRight: widthPercentageToDP(3) },
            ]}
            ripple
            disabled={disabled}
            onTap={() => {
              NavigationService.goBack();
              onBackPressAction && onBackPressAction();
            }}>
            <BackArrowIcon size={2.5} color={Colors.designPrimary} />
          </Touchable>
        )}
        {title && (
          <View style={styles.headerTextContainer}>
            <TextRegular fontSize="sh2" color="fontTertiary">
              {title}
            </TextRegular>
          </View>
        )}
        {rightButton && (
          <Touchable
            contentContainerStyle={styles.backButtonContainer}
            ripple
            disabled={disabled}
            onTap={() => {
              rightButtonAction && rightButtonAction();
            }}>
            <CloseIcon size={2.5} color={Colors.designPrimary} />
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: widthPercentageToDP(5),
    paddingBottom: heightPercentageToDP(1),
    marginTop: heightPercentageToDP(2),
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
