import React, { useState, memo } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { LoadingScreen } from "../../components/LoadingScreen/LoadingScreen";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { HeaderHome } from "./components/HeaderHome/HeaderHome";
import { SearchContexts } from "../../contexts/Search/Search.contexts";
import { List } from "../../components/List/List";
import Categories from '../../bucket/categories.json'
import Wash from '../../bucket/carWashs.json'
import { CarWash } from "../../components/CarWash/CarWash";

const MemoizedCarWash = memo(CarWash);

export const Home: React.FC = () => {

  const [search, setSearch] = useState<string>('')
  const [category, setCategory] = useState<number>(0)

  const updateSearch = (val: string) => {
    setSearch(val)
  }

  const updateCategory = (val: number) => {
    if (val === category) return
    setCategory(val)
  }

  return (
    <SearchContexts.Provider value={{ value: search, update: (val) => updateSearch(val) }}>
      <>
        <LoadingScreen
          pointerEventsDisable={ true }
          timing={ 3500 }
          visibled={ true }
        />
        <SafeAreaView
          style={styles.wrapper}
        >
          <ScrollView
            showsVerticalScrollIndicator={ false }
            contentContainerStyle={{ gap: 20 }}
          >
            <HeaderHome />
            <List
              title={ 'Категории' }
              listType={ 'image' }
              content={ Categories }
              active={ category }
              updateActive={ (val) => updateCategory(val) }
            />
            <View style={ styles.listWash }>
              {
                Wash.map((carWash, index) => (
                  <MemoizedCarWash
                    key={ index }
                    url={ carWash.url }
                    distance={ carWash.distance }
                    price={ carWash.price }
                    rating={ carWash.rating }
                    name={ carWash.name }
                    advertisement={ carWash.advertisement}
                  />
                ))
              }
            </View>
          </ScrollView>
          <Sidebar />
        </SafeAreaView>
      </>
    </SearchContexts.Provider>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#0E121A',
    height: '100%',
    paddingVertical: 20,
    paddingBottom: 0
  },
  header: {
    gap: 4
  },
  listWash: {
    gap: 20,
    paddingBottom: 116
  }
})