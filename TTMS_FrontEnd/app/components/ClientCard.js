import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";

import Text from "./Text";
import colors from "../config/colors";

function ClientCard ({  id, firstname, lastname , onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.card}>
      <View style={styles.detailsContainer}>
      <Text style={styles.ticketID} numberOfLines={1}>
          Client ID: {id}
        </Text>
        <Text style={styles.openedBy} numberOfLines={1}>
          Firstname: {firstname}
        </Text>
        <Text style={styles.subTitle} numberOfLines={1}>
          Lastname: {lastname}
        </Text>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  openedBy: {
    marginBottom: 7,
  },
  ticketID: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default ClientCard;
