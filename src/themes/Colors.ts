import { ColorsType } from 'src/interfaces';

export const Colors: Record<ColorsType, string> = {
  gray_50: '#F5F9FE',
  gray_100: '#EAEFF5',
  gray_200: '#E0E5EC',
  gray_300: '#C8D2DE',
  gray_400: '#B1BAC8',
  gray_500: '#A0A9BF',
  gray_600: '#7C8BA0',
  gray_700: '#61677D',
  gray_800: '#3B4054',
  gray_900: '#262626',
  primary_50: '#F1F2F8',
  primary_100: '#D6DFFF',
  primary_200: '#AEC0FE',
  primary_300: '#85A0FE',
  primary_400: '#5D81FD',
  primary_500: '#3461FD',
  primary_600: '#2A4ECA',
  primary_700: '#1F3A98',
  primary_800: '#152765',
  primary_900: '#21212F',
  white: '#FFFFFF',
  danger: '#D54A4D',
  success: '#3A9C4C',
};

export const getRandomBackgroundColor = () => {
  const colors = ['#DCDDDD', '#C9CACE', '#F8F6F9', '#D9D8D4'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

