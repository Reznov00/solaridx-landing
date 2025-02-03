import ImagePicker, { Image, Options } from 'react-native-image-crop-picker';
interface Props {
  useCamera?: boolean;
  height?: number;
  width?: number;
}
const MediaPicker = async ({
  useCamera = false,
  height = 6400,
  width = 4800,
}: Props): Promise<Image> => {
  const options: Options = {
    width: width,
    height: height,
    cropping: true,
    cropperToolbarTitle: 'SolariDX Image Cropper',
    waitAnimationEnd: false,
    cropperChooseText: 'Upload',
    enableRotationGesture: false,
    cropperRotateButtonsHidden: true,
    hideBottomControls: true
  };
  return useCamera
    ? await ImagePicker.openCamera(options)
      .then(image => image)
      .catch(error => {
        console.log('Media Picker Error :', error);
        return error;
      })
    : await ImagePicker.openPicker(options)
      .then(image => image)
      .catch(error => {
        console.log('Media Picker Error :', error);
        return error;
      });
};
export { MediaPicker };
