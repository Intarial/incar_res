import React, {FC, useEffect, useState} from "react";
import {Image, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {Colors} from "../../UI/Colors/Colors";
import {ScreenModeContexts} from "../../contexts/ScreenMode/ScreenMode.contexts";
import Fade from "../../utils/Fade/Fade";

export const LoadingScreen: FC<{ pointerEventsDisable?: boolean, timing: number, visibled: boolean }> = ({ pointerEventsDisable, timing, visibled }) => {
  const [visible, setVisible] = useState(visibled)

  useEffect(() => {
    setTimeout(setVisible, timing, !visibled)
  })

  return (
    <ScreenModeContexts.Consumer>
      {
        mode => (
          <Fade
            pointerEvents={ pointerEventsDisable && (!visible ? 'none' : 'auto')  }
            style={[
              styles.wrapper,
              {backgroundColor: Colors.switchBG(mode.value)}
            ]}
            visible={ visible }
          >
            <SafeAreaView>
              <Image
                style={[
                  { width: 191, height: 70 }
                ]}
                source={{
                  uri: 'https://i.imgur.com/aE3moPB.png'
                }}
              />
            </SafeAreaView>
          </Fade>
        )
      }
    </ScreenModeContexts.Consumer>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    width: '100%',
    padding: 0,
    margin: 0,
    position: 'absolute',
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center'
  }
})