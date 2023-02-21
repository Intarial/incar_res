import React, {FC} from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";
import {Typography} from "../Typography/Typography";
import {Colors} from "../Colors/Colors";
import {ScreenModeContexts} from "../../contexts/ScreenMode/ScreenMode.contexts";
import {ButtonTypings} from "../../typings/UI.typings/Button.typings";

export const Button: FC<ButtonTypings> = ({ children, type = 'default', onPress, style, deactivated }) => {
  return (
    <ScreenModeContexts.Consumer>
      {
        mode => (
          <TouchableOpacity
            disabled={ deactivated }
            style={[
              styles.wrapper,
              { backgroundColor: Colors.switchButton(mode.value, type), opacity: deactivated ? .5 : 1 },
              style
            ]}
            onPress={ () => onPress ? onPress() : ''}
          >
            <Text
              style={[
                Typography.button,
                { color: Colors.switchButtonText(mode.value, type) }
              ]}
            >
              {children}
            </Text>
          </TouchableOpacity>
        )
      }
    </ScreenModeContexts.Consumer>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 70,
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 20,
  }
})