import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import  AppLoading  from 'expo-app-loading';

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import { Form } from "formik";
import { render } from "react-dom";

export default function App() {

const [user, setUser] = useState();
const [decoded, setDecoded] = useState();
const [isReady, setIsReady] = useState(false);

const restoreToken = async () => {
  const token = await authStorage.getToken();
  if (!token) return;
   setUser(token);
};


  if (!isReady)
    return (
      <AppLoading 
        startAsync={restoreToken} 
        onFinish={()=> setIsReady(true)}
        onError={console.warn} 
        />
  );

  return (
    <AuthContext.Provider value = { { user, setUser } }>
      <NavigationContainer theme={navigationTheme}>
        { user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
