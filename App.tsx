import React, {createContext, useState} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {ScreenModeContexts} from "./src/contexts/ScreenMode/ScreenMode.contexts";
import {useRoutes} from "./src/services/NavigationServices";

export const AuthContext = createContext<{ update: (val: boolean) => void }>({} as { update: (val: boolean) => void })

function App(): JSX.Element {
  const [isAuth, setIsAuth] = useState(false)
  const [screenMode, setScreenMode] = useState<'dark' | 'light'>('dark')

  const routes = useRoutes(isAuth)

  return (
    <AuthContext.Provider
      value={
        {
          update: (bool: boolean) => setIsAuth(bool)
        }
      }>
      <ScreenModeContexts.Provider
        value={
          {
            value: screenMode,
            update: (bool: 'dark' | 'light') => setScreenMode(bool)
          }
        }>
        <NavigationContainer>
          {
            routes
          }
        </NavigationContainer>
      </ScreenModeContexts.Provider>
    </AuthContext.Provider>
  );
}

export default App;