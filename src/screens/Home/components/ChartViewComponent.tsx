import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LineChart, lineDataItem } from 'react-native-gifted-charts';
import { RFValue } from 'react-native-responsive-fontsize';

import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { TextMedium } from 'src/components';
import { Colors } from 'src/themes';

interface Props {
    clearSkyData: lineDataItem[]
    cloudySkyData: lineDataItem[]

}

const ChartViewComponent = ({ clearSkyData, cloudySkyData }: Props) => {
    return (
        <View style={styles.container}>
            <View style={{ width: widthPercentageToDP(90), overflow: 'hidden', backgroundColor: Colors.primary_900 }}>
                <LineChart
                    data={clearSkyData ?? []}
                    data2={cloudySkyData ?? []}
                    isAnimated
                    height={heightPercentageToDP(35)}
                    showVerticalLines
                    spacing={widthPercentageToDP(7)}
                    initialSpacing={10}
                    color1={Colors.gray_100}
                    textColor1={Colors.gray_100}
                    dataPointsColor1={Colors.gray_300}
                    color2={Colors.gray_600}
                    textColor2={Colors.gray_600}
                    dataPointsColor2={Colors.gray_600}
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
                />
            </View>
            <View style={styles.indicatorContainer}>
                <View style={styles.indicatorStyle}>
                    <View style={[styles.iconStyle, { backgroundColor: Colors.gray_300, }]} />
                    <TextMedium fontSize='st'>
                        {`Clear Sky Energy`}
                    </TextMedium>
                </View>
                <View style={styles.indicatorStyle}>
                    <View style={[styles.iconStyle, { backgroundColor: Colors.gray_600, }]} />
                    <TextMedium fontSize='st'>
                        {`Cloudy Sky Energy`}
                    </TextMedium>
                </View>
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
        marginVertical: heightPercentageToDP(3)
    },
    indicatorContainer: {
        flexDirection: 'row',
        marginVertical: heightPercentageToDP(2),
        gap: widthPercentageToDP(4)
    },
    indicatorStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconStyle: {
        width: widthPercentageToDP(4),
        height: widthPercentageToDP(4),
        marginRight: widthPercentageToDP(2),
    },
});
