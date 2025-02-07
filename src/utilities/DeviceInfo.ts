import { useEffect, useState } from 'react';
import { Appearance, Keyboard, Platform } from 'react-native';

export const isIOS = Platform.OS === 'ios';
export const isLightMode = Appearance.getColorScheme() === 'light';
export const dissmissKeyBoard = () => Keyboard.dismiss();
export const useKeyboardVisible = () => {
    const [keyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const showListener = Keyboard.addListener("keyboardDidShow", () => setKeyboardVisible(true));
        const hideListener = Keyboard.addListener("keyboardDidHide", () => setKeyboardVisible(false));

        return () => {
            showListener.remove();
            hideListener.remove();
        };
    }, []);

    return keyboardVisible;
};