import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Typography} from "../../../../UI/Typography/Typography";
import {Colors} from "../../../../UI/Colors/Colors";
import {ScreenModeContexts} from "../../../../contexts/ScreenMode/ScreenMode.contexts";
import {SearchContent} from "../SearchContent/SearchContent";
import {Appointment} from "../../../../components/Appointment/Appointment";
import {SearchContexts} from "../../../../contexts/Search/Search.contexts";

export const HeaderHome = () => {
  return (
    <SearchContexts.Consumer>
      {
        search => (
          <ScreenModeContexts.Consumer>
            {
              mode => (
                <>
                  <View style={styles.header}>
                    <Text style={[
                      Typography.small,
                      {color: Colors.smallText(mode.value)}
                    ]}>
                      Добрый день,
                    </Text>
                    <Text style={[
                      Typography.default24,
                      {color: Colors.switchCL(mode.value)}
                    ]}>
                      Никита
                    </Text>
                  </View>
                  <View
                    style={ styles.innerHeaderContent }
                  >
                    <SearchContent
                      search={ search.value }
                      mode={ mode.value }
                      update={ (val) => search.update(val) }
                    />
                    <Appointment />
                  </View>
                </>
              )
            }
          </ScreenModeContexts.Consumer>
        )
      }
    </SearchContexts.Consumer>
  )
}


const styles = StyleSheet.create({
  header: {
    gap: 4,
    paddingHorizontal: 16
  },

  innerHeaderContent: {
    gap: 20,
    paddingHorizontal: 16
  },
})