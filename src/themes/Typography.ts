import {RFValue} from 'react-native-responsive-fontsize';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {FontSizeType} from 'src/interfaces';

export const FontSizes: Record<FontSizeType, number> = {
  h1: RFValue(28),
  h2: RFValue(24),
  sh1: RFValue(20),
  sh2: RFValue(16),
  bt: RFValue(14),
  st: RFValue(12),
  sxt: RFValue(10),
};
export const LineHeight: Record<FontSizeType, number> = {
  h1: heightPercentageToDP(4),
  h2: heightPercentageToDP(5),
  sh1: heightPercentageToDP(4),
  sh2: heightPercentageToDP(3),
  bt: heightPercentageToDP(3.5),
  st: heightPercentageToDP(2),
  sxt: heightPercentageToDP(2),
};
