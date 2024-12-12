import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { BackArrowIcon, MessageIcon } from 'src/assets';
import {
  FullScreenView,
  PrimaryButton,
  TextBold,
  TextRegular,
  Touchable,
} from 'src/components';
import { SCREENS_ENUM } from 'src/enums';
import { AuthStackProps } from 'src/interfaces';
import { Colors } from 'src/themes';
import { dissmissKeyBoard, NavigationService } from 'src/utilities';

const TIMER_LENGTH = 60;
const OTP_LENGTH = 6;
const OTPInputScreen = ({ route }: AuthStackProps<SCREENS_ENUM.OTP_SCREEN>) => {
  const email = route?.params?.email;
  const mode = route?.params?.mode || 'EMAIL_VERIFICATION';
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(''));
  const [timer, setTimer] = useState<number>(TIMER_LENGTH);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);
  const isPending = false
  const loading = false
  const inputs = Array.from({ length: OTP_LENGTH }, () =>
    useRef<TextInput>(null),
  );

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isTimerRunning) {
      intervalId = setInterval(() => {
        setTimer(prevTimer => {
          if (prevTimer === 0) {
            setIsTimerRunning(false);
            clearInterval(intervalId);
            return 0;
          } else {
            return prevTimer - 1;
          }
        });
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isTimerRunning]);

  const resendOTP = async () => {
    setTimer(TIMER_LENGTH);
    setIsTimerRunning(true);
    setOtp(Array(OTP_LENGTH).fill(''));
  };

  const focusInput = (index: number) => {
    if (inputs[index] && inputs[index].current) {
      inputs[index].current.focus();
    }
  };

  const handleKeyPress = (index: number, { nativeEvent }) => {
    if (nativeEvent.key === 'Backspace' && index > 0 && !otp[index]) {
      setOtp(prevOtp => {
        const newOtp = [...prevOtp];
        newOtp[index - 1] = '';
        return newOtp;
      });
      focusInput(index - 1);
    }
  };

  const handleChange = (index: number, text: string) => {
    if (text.length <= 1) {
      setOtp(prevOtp => {
        const newOtp = [...prevOtp];
        newOtp[index] = text;
        return newOtp;
      });
      if (text && index < OTP_LENGTH - 1) {
        focusInput(index + 1);
      }
    }
  };
  const handleVerifyOTP = () => {
    dissmissKeyBoard;
    if (mode === 'EMAIL_VERIFICATION') handleEmailVerify(otp.join(''));
    else handleForgotPassVerfy(otp.join(''));
    setOtp(Array(OTP_LENGTH).fill(''));
  };

  const handleEmailVerify = (pin: string) => {
    return pin
  };
  const handleForgotPassVerfy = (pin: string) => {
    return pin
  };

  const isOTPComplete = () => {
    return otp.every(digit => digit !== '');
  };

  return (
    <FullScreenView>
      <View style={styles.container}>
        <Touchable
          // disabled={isPending}
          style={styles.backButtonContainer}
          onPress={() => NavigationService.goBack()}>
          <BackArrowIcon size={2.5} color={Colors.gray_600} />
        </Touchable>
        <View style={styles.mainBodyContainer}>
          <View style={styles.logoContainer}>
            <MessageIcon size={10} />
            <TextBold color='primary_600' fontSize="h2">Enter OTP</TextBold>
          </View>
          <View style={{ alignItems: 'center', marginTop: heightPercentageToDP(2) }}>
            <TextRegular fontSize="st" color="gray_700">
              {'Please enter the code we just sent to email'}
            </TextRegular>
            <TextBold fontSize="st" color="primary_600">
              {email}
            </TextBold>
          </View>
          <View >
            <View style={styles.otpForm}>
              {inputs.map((inputRef, index) => (
                <TextInput
                  key={index}
                  ref={inputRef}
                  value={otp[index]}
                  editable={!isPending || !loading}
                  keyboardType="number-pad"
                  maxLength={1}
                  placeholder=""
                  placeholderTextColor={Colors.gray_100}
                  style={styles.codeVerifyBlock}
                  selectTextOnFocus
                  onFocus={() => focusInput(index)}
                  onChangeText={text => handleChange(index, text)}
                  onKeyPress={event => handleKeyPress(index, event)}
                />
              ))}
            </View>
            <PrimaryButton
              title="Verify OTP"
              onPress={handleVerifyOTP}
              disabled={!isOTPComplete()}
              loading={isPending || loading}
              buttonStyle={{
                opacity: isOTPComplete() ? 1 : 0.8,
                marginVertical: heightPercentageToDP(1),
              }}
            />
          </View>
          <View style={styles.noCodeReceivedContainer}>
            <TextRegular fontSize="st" color="gray_900">
              {'Didn’t recieve a code?'}
            </TextRegular>
            <Touchable
              style={{
                opacity: isTimerRunning ? 0.5 : 1,
                paddingVertical: heightPercentageToDP(1),
                flexDirection: 'row',
                alignItems: 'center',
                gap: widthPercentageToDP(1),
              }}
              disabled={isTimerRunning}
              onPress={resendOTP}>
              <TextRegular fontSize="st" color="primary_600">
                {`Resend (${timer})`}
              </TextRegular>
            </Touchable>
          </View>
        </View>
      </View>
    </FullScreenView>
  );
};

export { OTPInputScreen };

const styles = StyleSheet.create({
  container: {
    marginHorizontal: widthPercentageToDP(5),
    marginTop: heightPercentageToDP(2),
    flex: 1,
  },
  authBox: {
    width: '100%',
    alignSelf: 'center',
    marginTop: heightPercentageToDP(2.5),
    alignItems: 'center',
  },
  backButtonContainer: {
    alignSelf: 'flex-start',
    padding: RFValue(8),
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#E6E6E6',
  },
  otpForm: {
    flexDirection: 'row',
    justifyContent: 'center',
    overflow: 'hidden',
    paddingVertical: heightPercentageToDP(3),
    paddingHorizontal: widthPercentageToDP(3),
  },
  codeVerifyBlock: {
    borderRadius: widthPercentageToDP(3),
    width: heightPercentageToDP(6),
    height: heightPercentageToDP(7),
    textAlign: 'center',
    fontSize: RFValue(16),
    color: Colors.gray_900,
    marginHorizontal: widthPercentageToDP(1),
    backgroundColor: Colors.gray_50,
    borderWidth: 1,
    borderColor: Colors.gray_100
  },
  noCodeReceivedContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: widthPercentageToDP(2),
  },
  registerButton: {
    marginTop: heightPercentageToDP(2),
    paddingVertical: heightPercentageToDP(1.5),
    backgroundColor: Colors.primary_600,
    alignItems: 'center',
    borderRadius: 5,
  },
  mainBodyContainer: {
    marginTop: heightPercentageToDP(3),
  },
  logoContainer: {
    alignItems: 'center',
    gap: heightPercentageToDP(2)
  },
  textStyle: {
    fontSize: RFValue(12),
    color: Colors.gray_700,
    lineHeight: heightPercentageToDP(2.5),
    marginVertical: heightPercentageToDP(2),
    textAlign: 'center',
  },
  spanTextStyle: {
    fontSize: RFValue(12),
    color: Colors.gray_700,
    lineHeight: heightPercentageToDP(2.5),
    marginBottom: heightPercentageToDP(2),
    textAlign: 'center',
  },
});
