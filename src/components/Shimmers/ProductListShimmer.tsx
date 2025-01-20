import React from 'react';
import {FlatList, View} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {ProductCardShimmer} from './ProductCardShimmer';

const ProductListShimmer = () => {
  return (
    <FlatList
      data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
      numColumns={2}
      renderItem={() => <ProductCardShimmer />}
      keyExtractor={item => item.toString()}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={() => (
        <View style={{height: heightPercentageToDP(1)}} />
      )}
      columnWrapperStyle={{justifyContent: 'space-between'}}
      ListFooterComponentStyle={{height: heightPercentageToDP(15)}}
      style={{marginTop: heightPercentageToDP(2)}}
    />
  );
};

export {ProductListShimmer};
