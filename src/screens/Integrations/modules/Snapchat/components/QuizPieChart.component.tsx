import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { TextMedium } from 'src/components';
import { Colors } from 'src/themes';

interface QuizData {
    unitNo: number;
    lessonNo: number;
    score: number;
}

interface PieData {
    value: number;
    color: string;
    textSize: number;
    text: string;
    text2: string;
}

const QuizPieChart = ({ quizData }: { quizData: QuizData[] }) => {
    const pieData = calculatePieData(quizData);

    return (
        <View style={styles.container}>
            <TextMedium style={{ alignSelf: 'flex-start' }} fontSize='bt'>
                Quiz Performance by Unit
            </TextMedium>
            <PieChart
                // showText
                textColor={Colors.gray_900}
                radius={widthPercentageToDP(20)}
                textSize={RFValue(13)}
                data={pieData}
                fontStyle='normal'
                fontWeight='600'
                font='FunnelDisplay-Medium'
            />
            <View >
                <FlatList
                    data={pieData}
                    numColumns={2}
                    columnWrapperStyle={{
                        gap: widthPercentageToDP(4),
                    }}
                    renderItem={({ index, item }) => (
                        <View key={index} style={styles.heroSectionContainer}>
                            <View
                                style={[styles.iconStyle, {
                                    backgroundColor: item.color,
                                }]}
                            />
                            <TextMedium fontSize='st'>
                                {`Unit # ${item.text2}:  ${item.value.toFixed(1)}`}
                            </TextMedium>
                        </View>)}
                />
            </View>
        </View>
    );
};

const calculatePieData = (quizData: QuizData[]): PieData[] => {
    const unitMap = new Map<number, { scores: number[] }>();

    quizData.forEach((quiz) => {
        if (!unitMap.has(quiz.unitNo)) {
            unitMap.set(quiz.unitNo, { scores: [] });
        }
        unitMap.get(quiz.unitNo)!.scores.push(quiz.score);
    });

    // Generate pieData array
    return Array.from(unitMap.entries()).map(([unitNo, { scores }]) => {
        const averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;

        return {
            value: averageScore,
            color: getColorForUnit(unitNo),
            text: averageScore.toString(),
            text2: unitNo.toString(),
            textSize: RFValue(10)
        };
    });
};

const getColorForUnit = (unitNumber: number): string => {
    const colors = [Colors.gray_300, Colors.gray_400, Colors.gray_500, Colors.gray_600];
    return colors[unitNumber - 1] || Colors.gray_300;
};

export { QuizPieChart };

const styles = StyleSheet.create({
    container: {
        gap: heightPercentageToDP(2),
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
    },
    heroSectionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: heightPercentageToDP(1),
        width: widthPercentageToDP(35),
    },
    iconStyle: {
        width: widthPercentageToDP(4),
        height: widthPercentageToDP(4),
        marginRight: widthPercentageToDP(2),
    },

})
