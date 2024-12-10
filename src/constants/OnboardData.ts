import { ImageProps } from 'react-native';

export interface PageInterface extends Pick<ImageProps, 'source'> {
  title: string;
  description: string;
}
export const PAGES: PageInterface[] = [
  {
    title: 'The Most Accessible Digital Fashion Experience',
    description: "For anyone who wants direct interaction with their favorite brand.",
    source: require('src/assets/pngs/OnBoarding1.png'),
  },
  {
    title: 'Find What You Want & Try It On',
    description: 'Get a discount and ask your network how it looks.',
    source: require('src/assets/pngs/OnBoarding2.png'),
  },
  {
    title: 'FashX: The Ultimate Digital Try-On Experience',
    description: 'See and share how you look in your favorite brands.',
    source: require('src/assets/pngs/OnBoarding3.png'),
  },
];

