import React, {FC} from "react";
import {StyleSheet, Text, View} from "react-native";
import {Typography} from "../UI/Typography/Typography";

export const ConvertingPrice: FC<{ price: number }> = ({ price }) => {
  return (
    <View style={ styles.pricing }>
      <Text style={[
        Typography.small,
        { color: price <= 150 ? '#FFFFFF' : '#FFFFFF'}
      ]}>
        ₽
      </Text>
      <Text style={[
        Typography.small,
        { color: price > 150 ? '#FFFFFF' : '#4A556C'}
      ]}>
        ₽
      </Text>
      <Text style={[
        Typography.small,
        { color: price > 250 ? '#FFFFFF' : '#4A556C'}
      ]}>
        ₽
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  pricing: {
    flexDirection: 'row',
    gap: 5
  }
})