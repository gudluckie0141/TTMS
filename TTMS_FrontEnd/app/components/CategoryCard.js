import React from "react";
import { View, StyleSheet, Image, TouchableWithoutFeedback } from "react-native";

import Text from "./Text";
import colors from "../config/colors";

function CategoryCard ({  id ,name, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.card}>
      <View style={styles.detailsContainer}>
      <Text style={styles.ticketID} numberOfLines={1}>
          Category ID: {id}
        </Text>
        <Text style={styles.openedBy} numberOfLines={1}>
          Category name: {name}
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

export default CategoryCard;
