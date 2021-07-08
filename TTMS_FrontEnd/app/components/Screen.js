import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View, ImageBackground } from "react-native";

function Screen({ children, style }) {
  return (
    
    <ImageBackground blurRadius={10} style={styles.background} source={require('../assets/background.png')} >
      <SafeAreaView style={[styles.screen, style]}>
        <View style={style}>{children}</View>
      </SafeAreaView>
    </ImageBackground>
   
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  background: {
    flex: 1,
    
  }
  });

export default Screen;
