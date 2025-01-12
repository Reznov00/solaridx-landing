import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { ChartViewInterface } from 'src/interfaces';
import { Colors } from 'src/themes';


const ChartViewComponent = ({ data }: { data: ChartViewInterface }) => {

    const solarIrradiationData = {
        labels: data.labels ?? Array.from({ length: 9 }, (_, i) => `${i}:00`),
        datasets: [
            {
                data: data.datasets ?? Array.from({ length: 9 }, () => Math.random() * 10),
            },
        ]
    };


    return (
        <View style={styles.container}>
            <LineChart
                data={solarIrradiationData}
                width={widthPercentageToDP(90)}
                height={heightPercentageToDP(50)}
                fromZero
                // xLabelsOffset={ }
                yLabelsOffset={22}
                // yAxisSuffix=" kW/m²"
                verticalLabelRotation={90}
                // horizontalLabelRotation={45}
                chartConfig={{
                    // backgroundColor: Colors.gray_400,
                    backgroundGradientFrom: Colors.primary_600,
                    backgroundGradientTo: Colors.gray_900,
                    decimalPlaces: 2,
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    propsForLabels: {
                        fontSize: RFValue(9),
                    },
                    propsForDots: {
                        r: "5",
                        strokeWidth: "4",
                        stroke: "#ffa726",
                    },

                }}
                bezier
                style={{
                    paddingTop: heightPercentageToDP(3),
                }}

            />
        </View>
    )
}

export { ChartViewComponent };

const styles = StyleSheet.create({
    container: {
        width: widthPercentageToDP(100),
        alignItems: 'center',
        justifyContent: 'center',
    },
});
