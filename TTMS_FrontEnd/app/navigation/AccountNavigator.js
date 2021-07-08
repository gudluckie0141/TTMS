import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";
import CategoryScreen from "../screens/CategoryScreen";
import SubcategoryScreen from "../screens/SubcategoryScreen";
import ClientsScreen from "../screens/ClientsScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}> 
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen name="Messages" component={MessagesScreen} />
    <Stack.Screen name="Category" component={CategoryScreen} />
    <Stack.Screen name="Subcategory" component={SubcategoryScreen} />
    <Stack.Screen name="Client" component={ClientsScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
