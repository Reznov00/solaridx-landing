import {Appearance, Keyboard, Platform} from 'react-native';

export const isIOS = Platform.OS === 'ios';
export const isLightMode = Appearance.getColorScheme() === 'light';
export const dissmissKeyBoard = () => Keyboard.dismiss();
