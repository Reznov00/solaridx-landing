import React from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
} from 'react-native-reanimated';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Colors } from 'src/themes';
import { VirtualizedView } from '../VirtualizedView';

const SpecsDataShimmer = () => {
    const shimmerTranslateX = useSharedValue(-widthPercentageToDP(50)); // Start shimmer outside the left edge

    shimmerTranslateX.value = withRepeat(
        withTiming(widthPercentageToDP(100), {
            duration: 1200,
            easing: Easing.linear,
        }),
        -1,
        false,
    );

    const shimmerEffect = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: shimmerTranslateX.value }],
        };
    });

    return (
        <VirtualizedView style={styles.container}>
            {/* Pie Chart Shimmer */}
            <View style={styles.pieChart}>
                <Animated.View style={[StyleSheet.absoluteFill, shimmerEffect]}>
                    <LinearGradient
                        colors={[
                            'rgba(255, 255, 255, 0)',
                            'rgba(255, 255, 255, 0.5)',
                            'rgba(255, 255, 255, 0)',
                        ]}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                        style={StyleSheet.absoluteFill}
                    />
                </Animated.View>
            </View>
            <View style={styles.pieChart}>
                <Animated.View style={[StyleSheet.absoluteFill, shimmerEffect]}>
                    <LinearGradient
                        colors={[
                            'rgba(255, 255, 255, 0)',
                            'rgba(255, 255, 255, 0.5)',
                            'rgba(255, 255, 255, 0)',
                        ]}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                        style={StyleSheet.absoluteFill}
                    />
                </Animated.View>
            </View>
            <View style={styles.pieChart}>
                <Animated.View style={[StyleSheet.absoluteFill, shimmerEffect]}>
                    <LinearGradient
                        colors={[
                            'rgba(255, 255, 255, 0)',
                            'rgba(255, 255, 255, 0.5)',
                            'rgba(255, 255, 255, 0)',
                        ]}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                        style={StyleSheet.absoluteFill}
                    />
                </Animated.View>
            </View>
        </VirtualizedView>
    );
};

export { SpecsDataShimmer };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: heightPercentageToDP(1),
        paddingBottom: heightPercentageToDP(5),
        alignSelf: 'center'
    },
    pieChart: {
        width: widthPercentageToDP(90),
        height: widthPercentageToDP(55),
        borderRadius: widthPercentageToDP(5),
        backgroundColor: Colors.gray_300,
        marginBottom: heightPercentageToDP(2),
        overflow: 'hidden',
    },
});
