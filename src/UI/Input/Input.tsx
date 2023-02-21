import React, {FC, useState} from "react";
import {StyleSheet, TextInput, View} from "react-native";
import {InputTypings} from "../../typings/UI.typings/Input.typings";
import {Colors} from "../Colors/Colors";
import {ScreenModeContexts} from "../../contexts/ScreenMode/ScreenMode.contexts";
import MaskInput from 'react-native-mask-input';


export const Input: FC<InputTypings> = (
  {
    value,
    change,
    placeholder,
    autoFocus,
    icon,
    mask,
    error,
    style ,
    color,
    maxLength
  }) => {

  return (
    <ScreenModeContexts.Consumer>
      {
        mode => (
          <View
            style={[
              styles.wrapper, {
                backgroundColor: color ? color : Colors.switchBGInput(mode.value),
                borderColor: error ? '#ea4949' : 'rgba(0,0,0,0)',
                borderWidth: 1
              }
            ]}
          >
            { icon }
            {
              mask ? (
                <View style={ styles.maskInputs }>
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    style={[
                      styles.inputFake, {
                        color: Colors.switchCInput(mode.value)
                      },
                      style
                    ]}
                    autoFocus={ false }
                    value={ '+7' }
                  />
                  <MaskInput
                    value={ value }
                    autoFocus={autoFocus}
                    placeholderTextColor={'#657189'}
                    placeholder={placeholder}
                    onChangeText={(masked, unmasked) => {
                      change(masked);
                    }}
                    style={[
                      styles.input, {
                        color: Colors.switchCInput(mode.value),
                        marginLeft: -3
                      },
                      style
                    ]}
                    mask={['(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
                  />
                </View>
              ) : (
                <TextInput
                  placeholderTextColor={'#657189'}
                  autoFocus={autoFocus}
                  value={value}
                  onChange={(event) => change(event.nativeEvent.text)}
                  placeholder={placeholder}
                  style={[
                    styles.input, {
                      color: Colors.switchCInput(mode.value)
                    },
                    style
                  ]}
                  maxLength={ maxLength }
                />
              )
            }
          </View>
        )
      }
    </ScreenModeContexts.Consumer>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    position: 'relative',
    paddingHorizontal: 20,
    paddingVertical: 25,
    borderRadius: 12,
    borderWidth: 1
  },
  input: {
    width: '90%',
    height: 70,
  },
  inputFake: {
    height: 70,
    width: 25,
  },
  maskInputs: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 0
  }
})