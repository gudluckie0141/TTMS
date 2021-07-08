import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import SubcategoryCard from "../components/SubcategoryCard";
import Screen from "../components/Screen";
import listingApi from "../api/listings";



function SubcategoryScreen({navigation}) {

  const [listings, setListings] = useState([]);

  const loadListings = async() => {
    const response = await listingApi.getSubcategories();
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
          <SubcategoryCard
            id={item.id}
            name={item.name}
            categoryid={item.categoryid}
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

export default SubcategoryScreen;