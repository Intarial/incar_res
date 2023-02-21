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
import {AuthContext} from "../../../../App";

export const NamingScreen: FC<{ navigation: any }> = ({ navigation }) => {

  useEffect(() => {
    HandlerUtils.disabled.backOff()
  }, [navigation]);

  const [name, setName] = useState('')

  const completeRegistration = () => {

  }

  return (
    <AuthContext.Consumer>
      {
        auth => (
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
                      Как вас зовут?
                    </Text>
                    <Text
                      style={[
                        Typography.default,
                        { color: Colors.switchCD(mode.value) }
                      ]}
                    >
                      Нам нужно знать как к вам обращаться
                    </Text>
                    <View style={{ height: 70 }}>
                      <Input
                        value={ name }
                        change={ (value) => setName(value) }
                        autoFocus={ true }
                        placeholder={ 'Иван' }
                      />
                    </View>
                  </View>
                  <Button
                    style={ styles.button }
                    deactivated={ name.length < 3 }
                    type={ name.length < 3 ? 'prev' : 'default'}
                    onPress={ () => auth.update(true) }
                  >
                    Закончить регистрацию
                  </Button>
                </SafeAreaView>
              )
            }
          </ScreenModeContexts.Consumer>
        )
      }
    </AuthContext.Consumer>
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