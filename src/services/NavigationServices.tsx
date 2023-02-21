import React from "react";
import {createNativeStackNavigator } from "@react-navigation/native-stack";
import {Home} from "../screens/Home/Home";
import {HelloScreen} from "../screens/Validation/HelloScreen/HelloScreen";
import {RegistrationScreen} from "../screens/Validation/RegistrationScreen/RegistrationScreen";
import {CodeScreen} from "../screens/Validation/CodeScreen/CodeScreen";
import {NamingScreen} from "../screens/Validation/NamingScreen/NamingScreen";

export const useRoutes = (isAuth: boolean) => {

  const Stack = createNativeStackNavigator();

  if (!isAuth) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          navigationKey='hello'
          name='hello'
          component={ HelloScreen }
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          navigationKey='registration'
          name='registration'
          component={ RegistrationScreen }
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          navigationKey='code_verification'
          name='code_verification'
          component={ CodeScreen }
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          navigationKey='register_naming'
          name='register_naming'
          component={ NamingScreen }
        />
      </Stack.Navigator>
    )
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false
        }}
        navigationKey='/'
        name='home'
        component={ Home }
      />
    </Stack.Navigator>
  )
}