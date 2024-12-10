import {heightPercentageToDP} from 'react-native-responsive-screen';
import {hasDynamicIsland, hasNotch} from 'react-native-device-info';
export const tabBarPercentageToDP = (
  dynamicIslanHeight: string | number,
  notchHeight: string | number,
  withouthNotch: string | number,
) =>
  hasDynamicIsland()
    ? heightPercentageToDP(dynamicIslanHeight)
    : hasNotch()
    ? heightPercentageToDP(notchHeight)
    : heightPercentageToDP(withouthNotch);
