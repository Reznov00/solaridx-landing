import React from 'react';
import { View } from 'react-native';
import { HomeIcon, LearningIcon, ProfileIcon, QuantiniumLogo } from 'src/assets';
import { BottomTabTypes } from 'src/interfaces';
import { Colors } from 'src/themes';

interface Props {
  route: BottomTabTypes;
  isFocused: boolean;
}

const BottomTabIcon = ({ route, isFocused }: Props) => {
  const renderIcon = (route: BottomTabTypes, isFocused: boolean) => {
    const color = isFocused ? Colors.white : Colors.gray_900;
    switch (route) {
      case 'HOME_MAIN_SCREEN':
        return <HomeIcon size={3} color={color} />;
      case 'PROFILE_MAIN_SCREEN':
        return <ProfileIcon size={3} color={color} />;
      case 'LEARNING_MAIN_SCREEN':
        return <LearningIcon size={3} color={color} />;
      case 'QUANTINIUM_MAIN_SCREEN':
        return <QuantiniumLogo size={3} color={color} />;
      default:
        break;
    }
  };

  return <View>{renderIcon(route, isFocused)}</View>;
};

export { BottomTabIcon };
