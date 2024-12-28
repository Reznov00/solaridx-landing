import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { widthPercentageToDP } from 'react-native-responsive-screen';

const MapViewComponent = () => {
    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                showsUserLocation
                // region={{
                //     latitude: 37.78825,
                //     longitude: -122.4324,
                //     latitudeDelta: 0.015,
                //     longitudeDelta: 0.0121,
                // }}
                followsUserLocation
            >
            </MapView>
        </View>
    )
}

export { MapViewComponent };

const styles = StyleSheet.create({
    container: {
        height: widthPercentageToDP(100),
        width: widthPercentageToDP(100),
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
