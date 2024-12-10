import ToastMessage from 'react-native-toast-message';
import {ToastMessageType} from 'src/interfaces';

const showToast = (
  type: ToastMessageType,
  message: string,
  time: number = 2000,
) => {
  ToastMessage.show({
    type: type,
    text1: message,
    visibilityTime: time,
    position: 'bottom',
  });
};

export {showToast};
