import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingTicketScreen from "../screens/ListingTicketScreen";
import ViewTicketScreen from "../screens/ViewTicketScreen";
import ListingEditScreen from "../screens/ListingEditScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listings" component={ListingTicketScreen} />
    <Stack.Screen name="ViewTicket" component={ViewTicketScreen} />
    <Stack.Screen name="Feedback" component={ListingEditScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
