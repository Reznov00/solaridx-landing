import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
// import { LineChart } from 'react-native-chart-kit';
import { LineChart, lineDataItem } from "react-native-gifted-charts";

import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { fetchGraphData } from 'src/services';
import { Colors } from 'src/themes';


const ChartViewComponent = ({ date }: { date: string }) => {

    useEffect(() => {
        fetchGraphData({ date })
    }, [])

    const lineDaata: lineDataItem[] = fetchGraphData({ date }).flatMap((item) => {
        return { value: item.clearSkyEnergy, dataPointText: item.hour.toString(), }
    })



    return (
        <View style={styles.container}>
            <View style={{ width: widthPercentageToDP(90), overflow: 'hidden', backgroundColor: Colors.primary_900 }}>
                <LineChart
                    data={lineDaata}
                    isAnimated
                    height={heightPercentageToDP(35)}
                    showVerticalLines
                    spacing={widthPercentageToDP(7)}
                    initialSpacing={10}
                    color1={Colors.white}
                    textColor1={Colors.white}
                    dataPointsColor1={Colors.white}
                    textFontSize={RFValue(10)}
                    noOfSections={5}
                    showDataPointLabelOnFocus
                    hideRules
                    showFractionalValues
                    verticalLinesColor={Colors.primary_600}
                    rulesColor={Colors.primary_600}
                    indicatorColor={'white'}
                    xAxisLabelTextStyle={{ color: Colors.white }}
                    yAxisLabelContainerStyle={{ color: Colors.white }}
                    yAxisTextStyle={{ color: Colors.white }}
                    yAxisColor={Colors.white}
                    xAxisColor={Colors.white}
                    endSpacing={widthPercentageToDP(1)}
                    dataPointsHeight={6}
                    dataPointsWidth={6}
                    textShiftY={heightPercentageToDP(-1)}
                    textShiftX={widthPercentageToDP(-3)}
                // showStripOnFocus
                />
            </View>
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
