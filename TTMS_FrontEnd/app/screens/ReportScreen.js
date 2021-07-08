import React from "react";
import { StyleSheet, View } from "react-native";

import Card3 from "../components/Card3";
import Screen from "../components/Screen";




function ReportScreen({navigation}) {


  return (
    <View style={styles.container}>
      <Screen style={styles.screen}>
        <>
        
        <Card3
              title="Click to Add Customer Problems"
              onPress={()=>navigation.navigate("Ticket")}
        />
        </>
      </Screen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    padding: 20,
    justifyContent: "center"
  },
  Feedback: {
    padding: 10,
    marginBottom: 10,
  },
});

export default ReportScreen;