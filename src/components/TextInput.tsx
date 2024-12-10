import React, {useState} from 'react';
import {
  I18nManager,
  TextInput as RNTextInput,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import {Control, Controller, RegisterOptions} from 'react-hook-form';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {HidePasswordIcon, ShowPasswordIcon} from 'src/assets';
import {Colors} from 'src/themes';
import {TextRegular} from './Text';

type TextInputProps = React.ComponentProps<typeof RNTextInput> & {
  label?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  touched?: boolean;
  error?: any;
  containerStyle?: StyleProp<ViewStyle>;
  optionalText?: string;
  name: string;
  rules?: RegisterOptions;
  initialValue?: string;
  control: Control<any>;
  labelStyle?: StyleProp<TextStyle>;
  editable?: boolean;
};

const TextInput = (props: TextInputProps) => {
  const {editable = true} = props;
  const [secureTextEntry, setSecureTextEntry] = useState(props.secureTextEntry);

  return (
    <Controller
      name={props.name}
      control={props.control}
      rules={props.rules ?? {}}
      defaultValue={props.initialValue}
      render={({field: {onChange, value, onBlur}}) => {
        return (
          <View style={styles.mainContainer}>
            {!!props.label && (
              <View style={{marginBottom: 5, alignSelf: 'flex-start'}}>
                <TextRegular fontSize="st" color="designSecondary">
                  {props.label}
                </TextRegular>
              </View>
            )}

            <View style={[styles.container, props.containerStyle]}>
              {props.leftIcon && (
                <View style={[styles.leftIconContainer]}>
                  <View style={styles.leftIconSubContainer}>
                    {props.leftIcon}
                  </View>
                </View>
              )}
              <View
                style={[
                  styles.textInputContainer,
                  {
                    paddingLeft: props.leftIcon ? 5 : 0,
                  },
                ]}>
                <RNTextInput
                  {...props}
                  secureTextEntry={secureTextEntry}
                  placeholder={props.placeholder || ''}
                  style={[
                    styles.textInput,
                    props.style,
                    {
                      color: editable
                        ? Colors.fontPrimary
                        : Colors.designSecondary,
                      opacity: !editable ? 0.5 : 1,
                      textAlign: I18nManager.isRTL ? 'right' : 'left',
                      height: true ? '100%' : heightPercentageToDP(4.5),
                    },
                  ]}
                  placeholderTextColor={
                    props.placeholderTextColor || '#rgba(11, 10, 10, 0.5)'
                  }
                  autoCorrect={props.autoCorrect ?? false}
                  onBlur={onBlur}
                  value={value}
                  textAlignVertical="center"
                  onChangeText={onChange}
                />
              </View>
              {props.rightIcon && (
                <View style={[styles.rightIconContainer]}>
                  {props.rightIcon}
                </View>
              )}
              {props.secureTextEntry && (
                <View style={[styles.rightIconContainer]}>
                  <TouchableOpacity
                    onPress={() => setSecureTextEntry(prev => !prev)}
                    style={{padding: 7}}>
                    {secureTextEntry ? (
                      <HidePasswordIcon size={3} />
                    ) : (
                      <ShowPasswordIcon size={3} />
                    )}
                  </TouchableOpacity>
                </View>
              )}
            </View>
            {props.touched && props.error && (
              <TextRegular fontSize="sxt" style={styles.errorMessage}>
                {props.error}
              </TextRegular>
            )}
            {props.optionalText && (
              <View style={styles.optionalContainer}>
                <TextRegular style={styles.optionalMessage}>
                  {props.optionalText}
                </TextRegular>
              </View>
            )}
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: heightPercentageToDP(2),
  },
  container: {
    width: '100%',
    height: heightPercentageToDP(5),
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: Colors.borderColour,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 1,
    shadowOpacity: 0.1,
    shadowColor: Colors.black,
    elevation: 2,
    paddingHorizontal: widthPercentageToDP(3),
  },
  textInput: {
    fontSize: RFValue(12),
    color: Colors.black,
    fontFamily: 'FunnelDisplay-Regular',
    fontWeight: '400',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  leftIconContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
  },
  divider: {
    height: '70%',
    width: 1,
    backgroundColor: Colors.designSecondary,
  },
  leftIconSubContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputContainer: {
    flex: 8,
  },
  rightIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  errorMessage: {
    color: Colors.error,
    marginTop: 2,
    marginLeft: widthPercentageToDP(4),
    alignSelf: 'flex-start',
  },
  optionalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: heightPercentageToDP(0.5),
  },
  optionalMessage: {
    color: Colors.designSecondary,
    marginTop: 2,
    marginLeft: 5,
    fontSize: RFValue(11),
  },
});

export {TextInput};
