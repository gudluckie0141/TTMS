import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import listingApi from "../api/listings";



function ListingTicketScreen({navigation}) {

  const [listings, setListings] = useState([]);

  const loadListings = async() => {
    const response = await listingApi.getListings();
    setListings(response.data);
  } 
  
  useEffect(() => {
    console.log("useEffect");
    loadListings();
    }, []);
    
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            ticketID={item.id}
            openedBy={item.user}
            openedAt={item.opendate}
            customerName={item.clientid}
            category={item.categoryid}
            subcategory={item.subcategoryid}
            description={item.comments}
            onPress={()=>navigation.navigate("ViewTicket", item)}
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

export default ListingTicketScreen;