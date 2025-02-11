import { Image } from 'react-native-compressor';

interface Props {
  filePath: string;
  quality?: number;
  maxWidth?: number;
}
const MediaCompressor = async ({
  filePath,
  quality = 0.8,
  maxWidth = 1000,
}: Props): Promise<string> => {
  return await Image.compress(filePath, {
    compressionMethod: 'manual',
    maxWidth: maxWidth,
    quality: quality,
  });
};
export { MediaCompressor };
