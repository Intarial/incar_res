import React, {FC} from "react";
import {ListTypings} from "../../typings/List.typings";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import {Typography} from "../../UI/Typography/Typography";
import {Colors} from "../../UI/Colors/Colors";
import {ScreenModeContexts} from "../../contexts/ScreenMode/ScreenMode.contexts";
import {TextToIcon} from "../../services/TextToIcon";

export const List: FC<ListTypings> = ({ title, content, scroll, listType, active, updateActive }) => {

  return (
    <ScreenModeContexts.Consumer>
      {
        mode => (
          <View style={ styles.wrapper }>
            <Text
              style={[
                Typography.default24,
                {
                  fontWeight: '700',
                  paddingLeft: 16,
                  color: Colors.switchCL(mode.value)
                }
              ]}
            >
              {title}
            </Text>
            <ScrollView
              showsHorizontalScrollIndicator={ scroll ? scroll : false }
              showsVerticalScrollIndicator={ scroll ? scroll : false }
              contentContainerStyle={{ gap: 20 }}
              horizontal={ true }
              style={ styles.list }
            >
              {
                content.map(
                  (cont, index) => (
                    <View style={[
                      styles.content,
                      {
                        marginRight: index === content.length - 1 ? 32 : 0,
                      }
                    ]}>
                      <TouchableOpacity
                        onPress={ () => updateActive(index) }
                        style={[
                          styles.contentBlock,
                          {
                            backgroundColor:
                              active === index ? Colors.activeBG(mode.value) :
                                Colors.mainBG(mode.value)
                          }
                        ]}
                      >
                        {
                          listType === 'image' ? (
                            TextToIcon(
                              cont.label,
                              active === index ? '#1AACFF' : undefined
                            )
                          ) : (
                            <Text>{ cont.name }</Text>
                          )
                        }
                      </TouchableOpacity>
                      {
                        listType === 'image' && (
                          <Text style={[
                            Typography.small,
                            { color: active === index ? '#FFFFFF' : Colors.mainColor(mode.value) }
                          ]}>
                            {
                              cont.name
                            }
                          </Text>
                        )
                      }
                    </View>
                  )
                )
              }
            </ScrollView>
          </View>
        )
      }
    </ScreenModeContexts.Consumer>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    gap: 20,
  },
  list: {
    gap: 20,
    paddingHorizontal: 16,
    width: '100%',
  },
  content: {
    gap: 8,
    alignItems: "center",
  },
  contentBlock: {
    padding: 18,
    borderRadius: 20
  },
  activeBlock: {

  },
  image: {
    width: 24,
    height: 24
  }
})