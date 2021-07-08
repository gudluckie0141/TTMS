import React from "react";
import { View, StyleSheet, Image, TouchableWithoutFeedback } from "react-native";

import Text from "./Text";
import colors from "../config/colors";

function Card({ ticketID, openedBy, description, customerName, category, subcategory, openedAt, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.card}>
      <View style={styles.detailsContainer}>
      <Text style={styles.ticketID} numberOfLines={1}>
          Ticket ID: {ticketID}
        </Text>
        <Text style={styles.openedBy} numberOfLines={1}>
          Opened By: {openedBy}
        </Text>
        <Text style={styles.subTitle} numberOfLines={1}>
          Opened At: {openedAt}
        </Text>
        <Text style={styles.openedBy} numberOfLines={1}>
          Customer Name: {customerName}
        </Text>
        <Text style={styles.subTitle} numberOfLines={1}>
          Category: {category}
        </Text>
        <Text style={styles.openedBy} numberOfLines={1}>
          Subcategory: {subcategory}
        </Text>
        <Text style={styles.subTitle} numberOfLines={10}>
          Description: {description}
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

export default Card;
