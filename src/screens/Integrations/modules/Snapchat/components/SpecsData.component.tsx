import React, { Fragment } from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { RefreshControl } from 'react-native-gesture-handler';
import { PieChart } from "react-native-gifted-charts";
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { EmptyBoxIcon } from 'src/assets';
import { SpecsDataShimmer, TextMedium } from 'src/components';
import { QuizDataInterface } from 'src/interfaces';
import { useGetQuizDataService } from 'src/services';
import { Colors } from 'src/themes';
import { QuizPieChart } from './QuizPieChart.component';

const QuizComp = ({ item }: {
    item: QuizDataInterface;
}) => {
    return (
        <View style={[styles.charComponent]}>
            <View style={styles.quizContainer}>
                <TextMedium fontSize='bt'>{`Unit # ${item.unitNo} - Lesson # ${item.lessonNo}`}</TextMedium>
                <View style={styles.quizMapOuterContainer}>
                    <View style={styles.quizMapInnerContainer}>
                        <TextMedium >{`${item.score}/10`}</TextMedium>
                    </View>
                </View>
            </View>
        </View>
    )
}

const renderChatRooms = ({ item }: ListRenderItemInfo<QuizDataInterface>) => {
    return <QuizComp
        key={item._id}
        item={item}
    />
}

const SpecsDataComponent = () => {
    const { data, isPending, refetch } = useGetQuizDataService()

    const renderHeaderComponent = () => {
        return data.length > 0 ? <View style={styles.charComponent}>
            <QuizPieChart quizData={data} />
        </View> : <View />
    }


    return (
        <Fragment>
            {!isPending ? (
                <FlatList
                    data={data}
                    style={styles.listStyle}
                    renderItem={renderChatRooms}
                    ListHeaderComponent={renderHeaderComponent}
                    ListFooterComponent={<View />}
                    refreshControl={
                        <RefreshControl refreshing={isPending} onRefresh={refetch} />
                    }
                    keyExtractor={(item) => item._id}
                    ListEmptyComponent={<View style={styles.emptyListContainer}>
                        <EmptyBoxIcon size={10} />
                        <TextMedium>No data Found</TextMedium>
                    </View>}
                    showsVerticalScrollIndicator={false}
                    ListFooterComponentStyle={styles.listFooterStyle}
                />
            )
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
    emptyListContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    quizMapInnerContainer: {
        width: widthPercentageToDP(33),
        height: widthPercentageToDP(33),
        borderRadius: widthPercentageToDP(33),
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    listFooterStyle: {
        height: heightPercentageToDP(4)
    },
    listStyle: {
        paddingTop: heightPercentageToDP(2),
    },
})