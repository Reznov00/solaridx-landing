import { ImageProps } from 'react-native';

export interface PageInterface extends Pick<ImageProps, 'source'> {
  title: string;
  description: string;
}
export const PAGES: PageInterface[] = [
  {
    title: 'Empower Your Solar Knowledge',
    description: "Access expert insights and essential solar data in one place.",
    source: require('src/assets/pngs/OnBoarding1.png'),
  },
  {
    title: 'Analyze & Optimize Energy Usage',
    description: "Track solar performance with interactive charts and real-time insights.",
    source: require('src/assets/pngs/OnBoarding2.png'),
  },
  {
    title: 'Smart Solar Solutions at Your Fingertips',
    description: "Discover the latest in solar technology and make informed decisions.",
    source: require('src/assets/pngs/OnBoarding3.png'),
  },
];

