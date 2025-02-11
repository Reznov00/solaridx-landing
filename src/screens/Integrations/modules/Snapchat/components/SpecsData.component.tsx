import React, { Fragment, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { PieChart } from "react-native-gifted-charts";
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { SpecsDataShimmer, TextMedium, VirtualizedView } from 'src/components';
import { Colors } from 'src/themes';


const PieChartComp = () => {
    const pieData = [
        { value: 9, color: Colors.gray_300, text: '9' },
        { value: 9, color: Colors.gray_400, text: '9' },
        { value: 9, color: Colors.gray_500, text: '9' },
    ];

    return (
        <PieChart
            showText
            textColor="black"
            radius={widthPercentageToDP(20)}
            textSize={RFValue(16)}
            data={pieData}
        />
    )
}

const QuizComp = ({ marks, title }: { marks: string, title: string }) => {
    return (
        <View style={[styles.charComponent]}>
            <View style={styles.quizContainer}>
                <TextMedium fontSize='bt'>{title}</TextMedium>
                <View style={styles.quizMapOuterContainer}>
                    <View style={styles.quizMapInnerContainer}>
                        <TextMedium >{`${parseInt(marks)}/10`}</TextMedium>
                    </View>
                </View>
            </View>
        </View>
    )
}

const SpecsDataComponent = () => {
    const [isPending, setIsPending] = useState(true)

    const getData = async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsPending(false)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <Fragment>
            {!isPending ? <VirtualizedView style={styles.container}>
                <View style={styles.charComponent}>
                    <PieChartComp />
                    <TextMedium fontSize='bt' >Collective Score</TextMedium>
                </View>
                <View style={{ marginBottom: heightPercentageToDP(4) }}>
                    <QuizComp marks='9' title='Unit # 1 - Lesson # 1' />
                    <QuizComp marks='9' title='Unit # 1 - Lesson # 2' />
                    <QuizComp marks='9' title='Unit # 2 - Lesson # 1' />
                </View>
            </VirtualizedView >
                : <SpecsDataShimmer />
            }
        </Fragment>
    )
}

export { SpecsDataComponent };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: heightPercentageToDP(2),
        paddingBottom: heightPercentageToDP(5)
    },
    charComponent: {
        marginBottom: heightPercentageToDP(2),
        backgroundColor: Colors.white,
        shadowRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 6 },
        elevation: 10,
        paddingVertical: heightPercentageToDP(2),
        borderRadius: widthPercentageToDP(5),
        zIndex: 1,
        marginHorizontal: widthPercentageToDP(5),
        justifyContent: 'center',
        alignItems: 'center',
    },
    quizContainer: {
        width: '100%',
        paddingHorizontal: widthPercentageToDP(5),
        gap: heightPercentageToDP(2)
    },
    quizMapOuterContainer: {
        width: widthPercentageToDP(40),
        height: widthPercentageToDP(40),
        borderRadius: widthPercentageToDP(40),
        backgroundColor: Colors.gray_500,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    quizMapInnerContainer: {
        width: widthPercentageToDP(33),
        height: widthPercentageToDP(33),
        borderRadius: widthPercentageToDP(33),
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
})