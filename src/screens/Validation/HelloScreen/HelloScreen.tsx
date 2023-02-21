import React, {FC} from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image
} from "react-native";
import {ScreenModeContexts} from "../../../contexts/ScreenMode/ScreenMode.contexts";
import {Colors} from "../../../UI/Colors/Colors";
import {Typography} from "../../../UI/Typography/Typography";
import {Button} from "../../../UI/Button/Button";
import {LoadingScreen} from "../../../components/LoadingScreen/LoadingScreen";

export const HelloScreen: FC<{ navigation: any }> = ({ navigation }) => {

  return (
    <ScreenModeContexts.Consumer>
      {
        mode => (
          <>
            <LoadingScreen
              pointerEventsDisable={ true }
              timing={ 3500 }
              visibled={ true }
            />
            <SafeAreaView
              style={[{ backgroundColor: Colors.switchBG(mode.value) }, styles.wrapper]}
            >
              <Image style={{flex: 1,
                alignSelf: 'stretch',
                width: '100%',
                height: 'auto' }} source={{ uri: 'https://i.imgur.com/cYH37Wx.png' }}
              />
              <View
                style={ styles.textContent }
              >
                <Text
                  style={[
                    Typography.title,
                    { color: Colors.switchCL(mode.value) }
                  ]}
                >
                  Привет
                </Text>
                <Text
                  style={[
                    Typography.default,
                    { color: Colors.switchCD(mode.value) }
                  ]}
                >
                  Безусловно, современная методология разработки способствует повышению качества переосмысления внешнеэкономических политик.
                </Text>
              </View>
              <Button onPress={ () => navigation.navigate('registration', { headerLeft: null }) }>
                Далее
              </Button>
            </SafeAreaView>
          </>
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
    justifyContent: 'flex-end',
    gap: 40
  },
  textContent: {
    flexDirection: "column",
    gap: 20
  }
})