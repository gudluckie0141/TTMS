import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import CategoryCard from "../components/CategoryCard";
import Screen from "../components/Screen";
import listingApi from "../api/listings";

function CategoryScreen({navigation}) {

  const [listings, setListings] = useState([]);

  const loadListings = async() => {
    const response = await listingApi.getCategories();
    setListings(response.data);
  } 
  
  useEffect(() => {
    loadListings();
    }, []);
    
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <CategoryCard
            id={item.id}
            name={item.name}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
});

export default CategoryScreen;