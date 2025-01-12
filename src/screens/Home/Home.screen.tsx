import { yupResolver } from '@hookform/resolvers/yup';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import MapView, { MapMarker, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { FullScreenView, PrimaryButton, TextInput, TextRegular, Touchable, VirtualizedView } from 'src/components';
import { latLongSchema } from 'src/constants';
import { STACKS_ENUM } from 'src/enums';
import { LatLongInterface } from 'src/interfaces';
import { useRecentCoordsAtom } from 'src/store';
import { Colors } from 'src/themes';
import { dissmissKeyBoard, NavigationService } from 'src/utilities';


const HomeScreen = () => {
  const { recentCoords, setRecentCoords } = useRecentCoordsAtom()
  const [initalCoordinates, setInitalCoordinates] = useState({
    latitude: 33.565471,
    longitude: 73.024163,
  });
  const mapRef = useRef<MapView | null>(null);

  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(latLongSchema)
  });

  const handleForm = (data: LatLongInterface) => {
    const newLatitude = data.latitude;
    const newLongitude = data.longitude;
    moveToRegion(newLatitude, newLongitude)
    setTimeout(() => {
      NavigationService.navigate(STACKS_ENUM.HOME_STACK)
      setRecentCoords({
        latitude: data.latitude,
        longitude: data.longitude,
      })
      reset()
    }, 5000);
  };


  const moveToRegion = (latitude: number, longitude: number) => {
    if (mapRef.current) {
      mapRef.current.animateToRegion(
        {
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        },
        2000
      );
    }
    setInitalCoordinates({
      latitude: latitude,
      longitude: longitude
    })
  }
  return (
    <FullScreenView>
      <View style={styles.container}>
        <View style={styles.mapContainer}>
          <MapView
            provider={PROVIDER_GOOGLE}
            ref={mapRef}
            style={styles.map}
            showsUserLocation
            followsUserLocation
            initialRegion={{
              ...initalCoordinates,
              latitudeDelta: 0.025,
              longitudeDelta: 0.025,
            }}

            showsIndoors={true}
            showsMyLocationButton={true}
            zoomControlEnabled={true}
            zoomEnabled={true}
            zoomTapEnabled={true}
            showsScale={true}
            showsBuildings={true}
            showsCompass={true}

          >
            <Marker
              coordinate={initalCoordinates}
              title="Hello"
              description="I am a marker."
            />
          </MapView>
        </View>
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
          </View>
          {!!recentCoords && <View>
            <View style={{ marginBottom: 5, alignSelf: 'flex-start' }}>
              <TextRegular fontSize="st" color="gray_900">
                Recent Coordinates
              </TextRegular>
            </View>
            <Touchable onPress={() => moveToRegion(recentCoords.latitude, recentCoords.longitude)} style={styles.recentCoordinates}>
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
  mapContainer: {
    height: widthPercentageToDP(90),
    width: widthPercentageToDP(100),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
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
