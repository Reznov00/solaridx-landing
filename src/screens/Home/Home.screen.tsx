import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import GetLocation from 'react-native-get-location';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { FullScreenView, PrimaryButton, showToast, TextInput, TextMedium, TextRegular, Touchable } from 'src/components';
import { latLongSchema } from 'src/constants';
import { STACKS_ENUM } from 'src/enums';
import { LatLongInterface } from 'src/interfaces';
import { useRecentCoordsAtom } from 'src/store';
import { Colors } from 'src/themes';
import { dissmissKeyBoard, isIOS, NavigationService } from 'src/utilities';


const HomeScreen = () => {
  const { recentCoords, setRecentCoords } = useRecentCoordsAtom()
  const [advancedModeEnabled, setAdvancedModeEnabled] = useState(false)
  const { control, setValue, handleSubmit, reset, watch, formState: { errors } } = useForm({
    resolver: yupResolver(latLongSchema)
  });
  const latitude = watch("latitude");
  const longitude = watch("longitude");

  const handleForm = (data: LatLongInterface) => {
    setRecentCoords({
      latitude: data.latitude,
      longitude: data.longitude,
      systemSize: data.systemSize
    })
    NavigationService.navigate(STACKS_ENUM.HOME_STACK)
    reset()
  };

  const getCurrentLocation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then(location => {
        setValue('latitude', location.latitude, { shouldValidate: true });
        setValue('longitude', location.longitude, { shouldValidate: true });
      })
      .catch(error => {
        const { code, message } = error;
        if (__DEV__) console.log({ code, message })
        showToast('error', 'Error fetching current location')
      })
  }

  return (
    <FullScreenView>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        enableAutomaticScroll={true}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <TextMedium fontSize='sh1'>Predictions</TextMedium>
          </View>
          <View style={styles.descContainer}>
            <TextRegular fontSize='sxt'>
              Get a detailed forecast of solar energy production for the next 15 days. If you prefer, you can use your current location for instant results. Start exploring the potential of solar energy at your fingertips!
            </TextRegular>
          </View>

          <View style={styles.mapInputs}>
            <TouchableWithoutFeedback onPress={dissmissKeyBoard}>
              <View style={styles.inputContainer}>
                <TextInput
                  label="Latitude (required)"
                  placeholder="e.g. 33.344342"
                  name="latitude"
                  defaultValue={latitude?.toString() ?? ''}
                  control={control}
                  keyboardType="decimal-pad"
                  maxLength={17}
                  touched={!!errors.latitude?.message}
                  error={errors.latitude?.message}
                  containerStyle={{ marginBottom: heightPercentageToDP(1) }}
                />
                <TextInput
                  label="Longitude (required)"
                  placeholder="e.g. 73.344342"
                  name="longitude"
                  control={control}
                  defaultValue={longitude?.toString() ?? ''}
                  keyboardType="decimal-pad"
                  maxLength={17}
                  touched={!!errors.longitude?.message}
                  error={errors.longitude?.message}
                  containerStyle={{ marginBottom: heightPercentageToDP(0) }}
                />
                <Touchable onPress={getCurrentLocation} style={styles.locationButtonStyle}>
                  <TextMedium fontSize='st'>Use current location</TextMedium>
                </Touchable>
                <View style={[styles.seperator, { marginBottom: heightPercentageToDP(1) }]} />
                <Touchable style={styles.advanceModeContainer} onPress={() => setAdvancedModeEnabled(!advancedModeEnabled)}>
                  <TextMedium fontSize='st' >Advanced parameters</TextMedium>
                </Touchable>
                {advancedModeEnabled && <TextInput
                  label="System Size (optional)"
                  placeholder="Leave empty to use default (1)"
                  name="systemSize"
                  control={control}
                  keyboardType="decimal-pad"
                  maxLength={3}
                  touched={!!errors.systemSize?.message}
                  error={errors.systemSize?.message}
                  rightIcon={
                    <TextMedium color='gray_600' fontSize='bt'>KW</TextMedium>
                  }
                  containerStyle={{ marginBottom: heightPercentageToDP(1) }}
                />}
              </View>
            </TouchableWithoutFeedback>
            <View style={styles.buttonsContainer}>
              <PrimaryButton
                onPress={handleSubmit(handleForm)}
                title="Find"
                buttonStyle={styles.submitButtonStyle}
                textStyle={{ fontSize: RFValue(14), }}
              />
            </View>
            {!!recentCoords && <View>
              <View style={{ marginBottom: 5, alignSelf: 'flex-start' }}>
                <TextRegular fontSize="st" color="gray_900">
                  Recent Coordinates
                </TextRegular>
              </View>
              <Touchable onPress={() => {
                handleForm({
                  latitude: recentCoords?.latitude,
                  longitude: recentCoords?.longitude,
                  systemSize: recentCoords?.systemSize
                })
              }} style={styles.recentCoordinates}>
                <TextRegular fontSize='st' >{`>  ${recentCoords?.latitude} , ${recentCoords?.longitude}`}</TextRegular>
              </Touchable>
            </View>}
          </View>
        </View>
      </KeyboardAwareScrollView>
    </FullScreenView >
  );
};

export { HomeScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: widthPercentageToDP(5),
    marginTop: heightPercentageToDP(isIOS ? 1 : 2)
  },
  descContainer: {
    marginHorizontal: widthPercentageToDP(5),
    marginTop: heightPercentageToDP(2),
  },
  seperator: {
    flexDirection: 'row',
    width: widthPercentageToDP(90),
    height: 1,
    backgroundColor: Colors.gray_200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: heightPercentageToDP(3)
  },
  locationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  locationButtonStyle: {
    marginBottom: heightPercentageToDP(1),
    paddingVertical: heightPercentageToDP(1)
  },
  advanceModeContainer: {
    marginBottom: heightPercentageToDP(1),
    paddingVertical: heightPercentageToDP(1),
    backgroundColor: Colors.gray_400,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: widthPercentageToDP(3),
  },
  mapInputs: {
    paddingHorizontal: widthPercentageToDP(5),
    marginVertical: heightPercentageToDP(2),
  },
  inputContainer: {
    justifyContent: 'space-between',
  },
  buttonsContainer: {
    justifyContent: 'space-between',
    marginTop: heightPercentageToDP(2)
  },
  submitButtonStyle: {
    height: heightPercentageToDP(4.5),
    marginTop: 0,
    paddingVertical: 0,
  },
  recentCoordinates: {
    backgroundColor: Colors.gray_100,
    borderRadius: RFValue(5),
    paddingHorizontal: widthPercentageToDP(3),
    paddingVertical: heightPercentageToDP(1),
  }
});
