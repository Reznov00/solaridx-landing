import React, { useLayoutEffect, useState } from 'react';
import Voice from '@react-native-voice/voice/dist/index';
import { StyleSheet, View } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withSequence, withTiming, SharedValue } from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { Colors } from 'src/themes';
import { PrimaryButton } from '../Buttons';
import { TextRegular } from '../Text';
import { showToast } from '../Toast';
import { BottomSheet } from './BottomSheet';
import { hasMicrophonePermission } from 'src/utilities';

interface Props {
  isOpen: SharedValue<boolean>;
  handleSpeech: (speech: string) => void;
}
const VoiceRecorderBottomSheet = ({ isOpen, handleSpeech }: Props) => {
  const [, setError] = useState('');
  const [, setEnd] = useState(false);
  const [started, setStarted] = useState(false);
  const [finalText, setFinalText] = useState('');

  const scale = useSharedValue(1);

  useLayoutEffect(() => {
    checkVoiceAvailability();
    Voice.onSpeechStart = () => setStarted(true);
    Voice.onSpeechEnd = () => setEnd(true);
    Voice.onSpeechError = (e) => showToast('error', e.error?.message || 'Speech recognition error');
    Voice.onSpeechVolumeChanged = (e) => setError(JSON.stringify(e.value));
    Voice.onSpeechResults = (e) => {
      setFinalText(e.value?.[0] || '');
    };
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  useLayoutEffect(() => {
    if (started) {
      scale.value = withRepeat(withSequence(
        withTiming(1, { duration: 500 }),
        withTiming(0.97, { duration: 500 })
      ), -1, true);
    } else {
      scale.value = withTiming(1, { duration: 200 });
    }
  }, [started]);

  const startRecognizing = async () => {
    setError('');
    setStarted(false);
    setEnd(false);
    setFinalText('');
    try {
      await Voice.start('en-US');
    } catch (e) {
      console.error(e);
    }
  };

  const cancelRecognizing = async () => {
    try {
      await Voice.cancel();
    } catch (e) {
      console.error(e);
    }
  };

  const destroyRecognizer = async () => {
    cancelRecognizing();
    try {
      await Voice.destroy();
    } catch (e) {
      console.error(e);
    }
    if (finalText.trim()) handleSpeech(finalText);
    toggleSheet();
    setError('');
    setStarted(false);
    setEnd(false);
    setFinalText('');
  };

  const checkVoiceAvailability = async () => {
    await hasMicrophonePermission();
    const hasPermission = await Voice.isAvailable();
    if (hasPermission === 0) {
      showToast('info', 'Speech recognition is not available on your device');
    }
  };

  const toggleSheet = () => {
    isOpen.value = !isOpen.value;
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <BottomSheet isOpen={isOpen} toggleSheet={() => {
      isOpen.value = started ? true : false;
    }}>
      <View style={styles.container}>
        {started && <View>
          <TextRegular fontSize='st'>
            {finalText.length > 0 ? finalText : 'listening.....'}
          </TextRegular>
        </View>}
        <View style={styles.subContainer}>
          <Animated.View style={[{ width: '100%' }, animatedStyle]}>
            <PrimaryButton
              title={started ? "End Recognizing" : "Start Recognizing"}
              onPress={started ? destroyRecognizer : startRecognizing}
              buttonStyle={{ marginVertical: 0, backgroundColor: started ? Colors.danger : Colors.primary_500 }}
            />
          </Animated.View>
        </View>
      </View>
    </BottomSheet>
  );
};

export { VoiceRecorderBottomSheet };

const styles = StyleSheet.create({
  container: {
    marginTop: heightPercentageToDP(1),
    marginBottom: heightPercentageToDP(2),
    width: '100%',
    alignItems: 'center',
    gap: widthPercentageToDP(3),
  },
  subContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    height: heightPercentageToDP(6),
    width: heightPercentageToDP(6),
    justifyContent: 'center',
    alignItems: 'center',
    padding: RFValue(8),
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Colors.gray_900,
  },
});