import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import ClientCard from "../components/ClientCard";
import Screen from "../components/Screen";
import listingApi from "../api/listings";



function ClientsScreen({navigation}) {

  const [listings, setListings] = useState([]);

  const loadListings = async() => {
    const response = await listingApi.getClients();
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
          <ClientCard
            id={item.id}
            firstname={item.firstname}
            lastname={item.lastname}
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

export default ClientsScreen;