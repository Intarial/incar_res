import React, {FC, useState} from "react";
import {StyleSheet, View} from "react-native";
import {Input} from "../../UI/Input/Input";
import {IconHome, IconRussia, IconSearch} from "../../UI/Icons/Icons";

export const Search: FC<{ search: string, update: (val: string) => void }> = ({ search, update }) => {

  return (
    <View style={ styles.wrapper }>

      <Input
        icon={ <IconSearch /> }
        placeholder={ 'Поиск по всем автомойкам' }
        color={ '#171D29' }
        value={ search }
        change={ (val) => update(val) }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    height: 60,
  }
})