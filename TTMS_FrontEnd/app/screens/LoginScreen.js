import React, {useState, useContext} from "react";
import { StyleSheet, Image, ImageBackground } from "react-native";
import * as Yup from "yup";
import jwtDecode from 'jwt-decode';

import Screen from "../components/Screen";
import { ErrorMessage, AppForm, AppFormField, SubmitButton } from "../components/forms";

import authApi from '../api/auth';
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().min(2).label("Username"),
  //email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});



function LoginScreen(props) {

  const authContext = useContext(AuthContext)

  const [loginFailed, setLoginFailed] = useState(false);


  const handleSubmit = async ({ username,  password }) => {
    const result = await authApi.login( username, password );
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    const user  = jwtDecode(result.data.token) 
    authContext.setUser(user);
    //const user = result.data
    //const user = () => result.data;
    //authContext.setUser(user);
    //console.log(user.user);
    //console.log(result.data.token);
    console.log(user);
    authStorage.storeToken(result.data.token);
  }
  

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo1.png")} />

      <AppForm
        initialValues={{ username: "",  password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error="Invalid email and/or password" visible={loginFailed} />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="username"
          placeholder="Username"
          textContentType="emailAddress"
        />
        
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
  }

const styles = StyleSheet.create({
  back: {
    flex: 1
  },
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 50,
    borderRadius: 40
  },
});

export default LoginScreen;
