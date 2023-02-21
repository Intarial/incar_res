import React, {FC} from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import { Search } from "../../../../components/Search/Search";
import { Colors } from "../../../../UI/Colors/Colors";
import { IconMap } from "../../../../UI/Icons/Icons";

export const SearchContent: FC<{ search: string, update: (val: string) => void, mode: 'light' | 'dark' }> = ({ search, update, mode }) => {
  return (
    <View
      style={ styles.searchContent }
    >
      <View
        style={ styles.innerSearch }
      >
        <Search
          search={ search }
          update={ (val) => update(val) }
        />
      </View>
      <TouchableOpacity
        style={[
          styles.mapIcon,
          { backgroundColor: Colors.mainBG(mode) }
        ]}
      >
        <IconMap
          fill={ '#8897B7' }
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  searchContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10
  },
  innerSearch: {
    width: '80%',
  },
  mapIcon: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20
  }
})