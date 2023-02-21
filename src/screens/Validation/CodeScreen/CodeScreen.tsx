import React, {FC, LegacyRef, useEffect, useRef, useState} from "react";

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text, TextInput
} from "react-native";

import {ScreenModeContexts} from "../../../contexts/ScreenMode/ScreenMode.contexts";
import {Colors} from "../../../UI/Colors/Colors";
import {Typography} from "../../../UI/Typography/Typography";
import {HandlerUtils} from "../../../utils/Handlers";

import {Button} from "../../../UI/Button/Button";
import {Input} from "../../../UI/Input/Input";
import {IconRussia} from "../../../UI/Icons/Icons";
import {useRoute} from "@react-navigation/native";

export const CodeScreen: FC<{ navigation: any }> = ({ navigation }) => {

  useEffect(() => {
    HandlerUtils.disabled.backTo(navigation, 'registration')
  }, []);

  const route: any = useRoute()
  const codeVerification = '2405'
  const profile = false

  const [code, setCode] = useState( '');
  const [error, setError] = useState('')

  const handleInputChange = (text: string) => {
    setError('')
    setCode(text);
  };

  const nextPage = () => {
    let nav = profile ? 'home' : 'register_naming'
    if (codeVerification === code) navigation.navigate(nav)
    else setError('code')
  }

  const resendCode = () => {

  }

  return (
    <ScreenModeContexts.Consumer>
      {
        mode => (
          <SafeAreaView
            style={[{ backgroundColor: Colors.switchBG(mode.value) }, styles.wrapper]}
          >
            <View style={ styles.upView }>
              <Text
                style={[
                  Typography.title,
                  { color: Colors.switchCL(mode.value) }
                ]}
              >
                Введите код
              </Text>
              <Text
                style={[
                  Typography.default,
                  { color: Colors.switchCD(mode.value), gap: 15 }
                ]}
              >
                  Введите код отправленный на номер мобильного телефона: <Text style={ styles.yellow }> { route.params !== undefined && route.params.phone } </Text>
              </Text>
              <View
                style={ styles.inputs }
              >
                <View
                  style={ styles.inpBlock }
                >
                  <Input
                    autoFocus={ true }
                    style={{ padding: 0, alignItems: 'center', justifyContent: 'center', letterSpacing: 10 }}
                    value={ code }
                    placeholder={ '****' }
                    change={ (val: string) => handleInputChange(val) }
                    maxLength={ 4 }
                    error={ error === 'code' }
                  />
                </View>
              </View>
            </View>
            <View
              style={ styles.buttons }
            >
              <Button
                type={ "prev" }
                onPress={ () => resendCode() }
              >
                Отправить код повторно
              </Button>
              <Button
                deactivated={ code.length < 4 }
                type={ code.length < 4 ? 'prev' : 'default'}
                onPress={ () => nextPage() }
              >
                Продолжить
              </Button>
            </View>
          </SafeAreaView>
        )
      }
    </ScreenModeContexts.Consumer>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    padding: 24,
    paddingBottom: 30,
    flexDirection: "column",
    gap: 40
  },
  upView: {
    flexDirection: "column",
    gap: 20
  },
  yellow: {
    color: '#FFDD2D',
    paddingLeft: 5
  },
  inputs: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    height: 50,
    position: "relative"
  },
  inpBlock: {
    maxHeight: 50,
    padding: 0
  },
  buttons: {
    flexDirection: 'column',
    marginTop: 'auto',
    gap: 16
  }
})