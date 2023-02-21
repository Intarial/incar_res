import React, {FC} from "react";
import {StyleSheet, View, TouchableOpacity, Image, Text} from "react-native";
import {Typography} from "../../UI/Typography/Typography";
import {Colors} from "../../UI/Colors/Colors";
import {ScreenModeContexts} from "../../contexts/ScreenMode/ScreenMode.contexts";
import {ConvertingPrice} from "../../services/ConvertingPrice";
import {IconGEO, IconGEOBig, IconRating} from "../../UI/Icons/Icons";
import {CarWashTypings} from "../../typings/CarWash.typings";

export const CarWash: FC<CarWashTypings> = ({ url, name, rating, price, distance, advertisement }) => {
  return (
    <ScreenModeContexts.Consumer>
      {
        mode => (
          <TouchableOpacity
            style={styles.wrapper}
          >
            <View
              style={styles.washBlock}
            >
              <Image
                style={styles.image}
                source={{uri: url}}
              />
              <View
                style={ styles.filterContent }
              >
                <TouchableOpacity
                  style={ styles.position }
                >
                  <IconGEO
                    width={ 14 }
                    height={ 14 }
                  />
                  <Text
                    style={[
                      Typography.small,
                      { color: '#1F2531', fontWeight: '500' }
                    ]}
                  >
                    { distance > 1000 ? `${ (distance / 1000).toFixed(1) } км` : `${ distance } м` }
                  </Text>
                </TouchableOpacity>
                <View
                  style={ styles.location }
                >
                  <IconGEOBig
                    width={ 20 }
                    height={ 20 }
                  />
                </View>
                {
                  advertisement && (
                    <View
                      style={styles.adv}
                    >
                      <Text
                        style={[
                          Typography.small,
                          {color: '#FFFFFF', fontWeight: '500'}
                        ]}
                      >
                        Реклама
                      </Text>
                    </View>
                  )
                }
              </View>
            </View>
            <View
              style={styles.contentInfo}
            >
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View
                  style={styles.name}
                >
                  <Text
                    style={[
                      Typography.button,
                      {color: Colors.switchCL(mode.value)}
                    ]}
                  >
                    { name }
                  </Text>
                  <ConvertingPrice price={ price } />
                </View>
                <View style={ styles.rating }>
                  <IconRating />
                  <Text
                    style={[
                      Typography.small,
                      { color: '#FFDD2D' }
                    ]}
                  >
                    { rating }
                  </Text>
                </View>
              </View>
              <View style={ styles.advantages }>
                <View style={[
                  styles.advantageBlock,
                  { backgroundColor: Colors.mainBG(mode.value) }
                ]}>
                  <Text style={[
                    Typography.small,
                    { color: '#8897B7' }
                  ]}>
                    Близко
                  </Text>
                </View>
                <View style={[
                  styles.advantageBlock,
                  { backgroundColor: Colors.mainBG(mode.value) }
                ]}>
                  <Text style={[
                    Typography.small,
                    { color: '#8897B7' }
                  ]}>
                    Лучший рейтинг
                  </Text>
                </View>
                <View style={[
                  styles.advantageBlock,
                  { backgroundColor: Colors.mainBG(mode.value) }
                ]}>
                  <Text style={[
                    Typography.small,
                    { color: '#8897B7' }
                  ]}>
                    Все виды мойки
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )
      }
    </ScreenModeContexts.Consumer>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingHorizontal: 16,
    gap: 15
  },
  washBlock: {
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 10,
    height: 170
  },
  image: {
    borderRadius: 10,
    width: '100%',
    height: '100%'
  },
  contentInfo: {
    gap: 10
  },
  name: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center'
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2
  },
  advantages: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  advantageBlock: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 22
  },
  filterContent: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    padding: 15
  },
  position: {
    bottom: 15,
    left: 15,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255,255,255,0.65)',
    borderRadius: 22
  },
  location: {
    top: 15,
    right: 15,
    position: 'absolute',
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: 'rgba(255,255,255,0.65)',
    borderRadius: 12
  },
  adv: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#1F2531',
    borderRadius: 20,
    position: 'absolute',
    right: 15,
    bottom: 15
  }
})