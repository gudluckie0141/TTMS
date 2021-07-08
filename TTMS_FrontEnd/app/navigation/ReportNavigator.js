import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProblemScreen from "../screens/Reports/ProblemScreen";
import CustomerScreen from "../screens/Reports/CustomerScreen";
import FeedbackScreen from "../screens/Reports/FeedbackScreen";
import TicketScreen from "../screens/Reports/TicketScreen";
import ReportScreen from "../screens/ReportScreen";

const Stack = createStackNavigator();

const ReportNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}> 
    <Stack.Screen name="Report" component={ReportScreen} />
    <Stack.Screen name="Problem" component={ProblemScreen} />
    <Stack.Screen name="Customer" component={CustomerScreen} />
    <Stack.Screen name="Feedback" component={FeedbackScreen} />
    <Stack.Screen name="Ticket" component={TicketScreen} />
  </Stack.Navigator>
);

export default ReportNavigator;
