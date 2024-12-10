import { ColorsType } from 'src/interfaces';

export const Colors: Record<ColorsType, string> = {
  fontPrimary: '#0B0A0A',
  fontSecondary: '#0B0A0A',
  fontTertiary: '#363636',
  designPrimary: '#F62D93',
  designSecondary: '#0B0A0A',
  designTertiary: '#5a6268',
  designBase: '#000000',
  error: '#dc3545',
  black: '#000000',
  white: '#ffffff',
  gray: '#6c757d',
  blue: '#007bff',
  green: '#28a745',
  yellow: '#ffc107',
  borderColour: '#D0D5DD',
  backgroundColor: '#E9E9E9',
  borderColour2: 'rgba(11, 10, 10, 0.5)',
};

export const getRandomBackgroundColor = () => {
  const colors = ['#DCDDDD', '#C9CACE', '#F8F6F9', '#D9D8D4'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

