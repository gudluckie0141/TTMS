import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import AppButton from "../components/AppButton";
import Card2 from "../components/Card";
import Screen from "../components/Screen";




function ViewTicketScreen({route,navigation}) {

const listing = route.params;

  return (
    <View style={styles.container}>
      <Screen style={styles.screen}>
        <Card2
              ticketID={listing.id}
              openedBy={listing.user}
              openedAt={listing.opendate}
              category={listing.categoryid}
              subcategory={listing.subcategoryid}
              customerName={listing.clientid}
              description={listing.comments}
          />
        <AppButton style={styles.Feedback}
          title="Feedback" 
          onPress={()=>navigation.navigate("Feedback", listing)}
        />
      </Screen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
    
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

export default ViewTicketScreen;