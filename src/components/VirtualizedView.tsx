import React from 'react';
import {ScrollViewProps, FlatList} from 'react-native';

const VirtualizedView = (props: ScrollViewProps) => {
  return (
    <FlatList
      keyboardShouldPersistTaps="always"
      style={props.style}
      data={[]}
      bounces={props.bounces}
      ListEmptyComponent={null}
      showsHorizontalScrollIndicator={props.showsHorizontalScrollIndicator}
      showsVerticalScrollIndicator={props.showsHorizontalScrollIndicator}
      keyExtractor={() => 'dummy'}
      renderItem={null}
      ListHeaderComponent={<React.Fragment>{props.children}</React.Fragment>}
      {...props}
    />
  );
};
export {VirtualizedView};
