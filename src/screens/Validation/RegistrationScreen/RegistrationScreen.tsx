import React, {FC, useEffect, useState} from "react";

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text
} from "react-native";

import {ScreenModeContexts} from "../../../contexts/ScreenMode/ScreenMode.contexts";
import {Colors} from "../../../UI/Colors/Colors";
import {Typography} from "../../../UI/Typography/Typography";
import {HandlerUtils} from "../../../utils/Handlers";

import {Button} from "../../../UI/Button/Button";
import {Input} from "../../../UI/Input/Input";
import {IconRussia} from "../../../UI/Icons/Icons";

export const RegistrationScreen: FC<{ navigation: any }> = ({ navigation }) => {

  useEffect(() => {
    HandlerUtils.disabled.backOff()
  }, [navigation]);

  const [number, setNumber] = useState('')
  const [error, setError] = useState('')

  const updateNumber = (value: any) => {
    setError('')
    setNumber(value)
  }

  const goToSendCode = async () => {
    if (number.length === 15) navigation.navigate('code_verification', { phone: '+7 ' + number })
    else setError('number')

    await fetch(`https://smsc.ru/sys/send.php?login=intarial&psw=100903Nik&phones=+7${number}&mes=Ваш код: 2405`, {
      method: 'post',
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        if (err) console.log(err)
      })
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
                Номер мобильного телефона
              </Text>
              <Text
                style={[
                  Typography.default,
                  { color: Colors.switchCD(mode.value) }
                ]}
              >
                Номер телефона для входа в приложение
              </Text>
              <View style={{ height: 70 }}>
                <Input
                  value={ number }
                  change={ (value) => updateNumber(value) }
                  autoFocus={ true }
                  placeholder={ '' }
                  icon={ <IconRussia /> }
                  mask={ true }
                  error={ error === 'number' }
                />
              </View>
            </View>
            <Button
              style={ styles.button }
              onPress={ () => goToSendCode() }
              deactivated={ number.length < 15 }
              type={ number.length < 15 ? 'prev' : 'default'}
            >
              Далее
            </Button>
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
  button: {
    marginTop: 'auto'
  }
})