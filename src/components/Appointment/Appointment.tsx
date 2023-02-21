import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {Typography} from "../../UI/Typography/Typography";
import {Colors} from "../../UI/Colors/Colors";
import {ScreenModeContexts} from "../../contexts/ScreenMode/ScreenMode.contexts";

export const Appointment = () => {
  const [appointment, setAppointment] = useState<undefined>()

  return (
    <ScreenModeContexts.Consumer>
      {
        mode => (
          <View
            style={[
              styles.activeAppointment,
              { backgroundColor: Colors.mainBG(mode.value) }
            ]}
          >
            {
              appointment === undefined && (
                <Text
                  style={[
                    Typography.default16_500,
                    { color: Colors.mainColor(mode.value) }
                  ]}>
                  Активных записей нет
                </Text>
              )
            }
          </View>
        )
      }
    </ScreenModeContexts.Consumer>
  )
}

const styles = StyleSheet.create({
  activeAppointment: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    height: 60
  }
})