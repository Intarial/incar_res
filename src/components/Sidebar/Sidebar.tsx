import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import { IconHome } from "../../UI/Icons/Icons";

export const Sidebar = () => {
  const [selected, setSelected] = useState<number>(0);

  const navigation = [
    { id: 0, name: "Дом", icon: <IconHome fill={ selected != 0 ? '#0E121B' : 'white' } /> },
    { id: 1, name: "Поиск", icon: <IconHome fill={ selected != 1 ? '#0E121B' : 'white' } /> },
    { id: 2, name: "Бронь", icon: <IconHome fill={ selected != 2 ? '#0E121B' : 'white' } /> },
    { id: 4, name: "Бронь", icon: <IconHome fill={ selected != 4 ? '#0E121B' : 'white' } /> },
    { id: 3, name: "Профиль", icon: <IconHome fill={ selected != 3 ? '#0E121B' : 'white' } /> },
  ]

  const handlePress = (id: number) => setSelected(id);

  return (
    <View style={ styles.layout }>

      <View style={ styles.wrapper }>
        { navigation.map((nav) => {
            return (
              <TouchableOpacity
                key={ nav.id }
                style={[
                  styles.containerNav,
                  { backgroundColor: nav.id === selected ? "#0E121B" : 'rgba(0,0,0,0)' }
                ]}
                onPress={() => handlePress(nav.id)}
              >
                { nav.icon }
              </TouchableOpacity>
            );
          })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  layout: {
    paddingHorizontal: 16,
    alignItems: "center"
  },
  wrapper: {
    width: '100%',
    height: 78,
    backgroundColor: "white",
    borderRadius: 24,
    padding: 15,
    display: "flex",
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
  },
  containerNav: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    borderRadius: 12,
    maxWidth: 55,
    justifyContent: 'center',
    height: 55
  },
  containerText: { color: 'rgba(255, 24, 67, 1)', fontSize: 14 }
})


// import React, { useState } from "react";
// import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
//
// export const Sidebar = () => {
//   const [selected, setSelected] = useState<null | number>(null);
//
//   const handlePress = (index: number) => {
//     setSelected(index);
//   };
//
//   return (
//     <View style={styles.container}>
//       <View style={styles.innerContainer}>
//         {[0, 1, 2, 3].map(index => {
//           return (
//             <View key={index} style={styles.box}>
//               <TouchableOpacity
//                 style={[
//                   styles.innerBox,
//                   { backgroundColor: index === selected ? "blue" : 'rgba(0,0,0,0)' }
//                 ]}
//                 onPress={() => handlePress(index)}
//               >
//                 {index === selected && (
//                   <Text style={styles.text}>Home</Text>
//                 )}
//               </TouchableOpacity>
//             </View>
//           );
//         })}
//       </View>
//     </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     height: 91,
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 24,
//     padding: 24,
//     width: '100%'
//   },
//   innerContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   box: {
//     paddingVertical: 9.5,
//     paddingHorizontal: 12,
//     minWidth: 24,
//   },
//   innerBox: {
//     borderRadius: 12
//   },
//   text: {
//     color: "white",
//     fontWeight: "bold"
//   }
// });

