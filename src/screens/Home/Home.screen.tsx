import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import GetLocation from 'react-native-get-location';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { HistoryIcon } from 'src/assets';
import { FullScreenView, PrimaryButton, TextInput, TextMedium, TextRegular, Touchable, VirtualizedView } from 'src/components';
import { latLongSchema } from 'src/constants';
import { STACKS_ENUM } from 'src/enums';
import { LatLongInterface } from 'src/interfaces';
import { useRecentCoordsAtom } from 'src/store';
import { Colors } from 'src/themes';
import { dissmissKeyBoard, NavigationService } from 'src/utilities';


const HomeScreen = () => {
  const { recentCoords, setRecentCoords } = useRecentCoordsAtom()

  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(latLongSchema)
  });

  const handleForm = (data: LatLongInterface) => {
    setTimeout(() => {
      NavigationService.navigate(STACKS_ENUM.HOME_STACK)
      setRecentCoords({
        latitude: data.latitude,
        longitude: data.longitude,
      })
      reset()
    }, 5000);
  };

  const getCurrentLocation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then(location => {
        console.log(location);
      })
      .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
      })
  }

  return (
    <FullScreenView>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TextMedium fontSize='sh1'>Predictions</TextMedium>
          <Touchable>
            <HistoryIcon size={3.5} />
          </Touchable>
        </View>
        {/* <TextRegular fontSize='sxt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam porro et soluta quia asperiores, deserunt iste odit, eos veniam natus ut, minus sapiente sed cum quaerat facilis est adipisci suscipit.</TextRegular> */}

        <VirtualizedView style={styles.mapInputs}>
          <TouchableWithoutFeedback onPress={dissmissKeyBoard}>
            <View style={styles.inputContainer}>
              <TextInput
                label="Latitude"
                placeholder="Latitude"
                name="latitude"
                control={control}
                keyboardType="decimal-pad"
                maxLength={9}
                touched={!!errors.latitude?.message}
                error={errors.latitude?.message}
              />
              <TextInput
                label="Longitude"
                placeholder="Longitude"
                name="longitude"
                control={control}
                keyboardType="decimal-pad"
                maxLength={9}
                touched={!!errors.longitude?.message}
                error={errors.longitude?.message}
              />
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.inputContainer}>
            <PrimaryButton
              onPress={handleSubmit(handleForm)}
              title="Find"
              buttonStyle={{
                height: heightPercentageToDP(4.5),
                marginTop: 0,
                paddingVertical: 0,
              }}
              textStyle={{
                fontSize: RFValue(14),
              }}
            />
            <View style={styles.seperator}>
              <View style={styles.orText} >
                <TextRegular color='gray_900' fontSize='sh2'>Or</TextRegular>
              </View>
            </View>
            <PrimaryButton
              onPress={getCurrentLocation}
              title="Use Current Location"
              buttonStyle={{
                height: heightPercentageToDP(4.5),
                marginTop: 0,
                paddingVertical: 0,
              }}
              textStyle={{
                fontSize: RFValue(14),
              }}
            />
          </View>
          {!!recentCoords && <View>
            <View style={{ marginBottom: 5, alignSelf: 'flex-start' }}>
              <TextRegular fontSize="st" color="gray_900">
                Recent Coordinates
              </TextRegular>
            </View>
            <Touchable onPress={() => { }} style={styles.recentCoordinates}>
              <TextRegular fontSize='bt' >{`>  ${recentCoords?.latitude} , ${recentCoords?.longitude}`}</TextRegular>
            </Touchable>
          </View>}
        </VirtualizedView>
      </View>
    </FullScreenView>
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
    paddingHorizontal: widthPercentageToDP(5)
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
  orText: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '15%',
    backgroundColor: Colors.white
  },
  mapInputs: {
    paddingHorizontal: widthPercentageToDP(5),
    marginVertical: heightPercentageToDP(2),
  },
  inputContainer: {
    // flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recentCoordinates: {
    backgroundColor: Colors.gray_100,
    borderRadius: RFValue(5),
    paddingHorizontal: widthPercentageToDP(3),
    paddingVertical: heightPercentageToDP(1),
  }
});
