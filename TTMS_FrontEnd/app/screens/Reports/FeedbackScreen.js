import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../../components/forms";
import Screen from "../../components/Screen";

import DatePicker from "../../components/DatePicker";

const validationSchema = Yup.object().shape({
  reportName: Yup.string().required().min(1).label("Full Name"),
  openedBy: Yup.string().required().min(1).label("Opened By"),
  description: Yup.string().label("Description"),
  location: Yup.object().required().nullable().label("Select location's feedback response "),
  technician: Yup.object().required().nullable().label("Select technician receive response")
});

const location = [
  { label: "Kijitonyama", value: 1 },
  { label: "Mwananyamala", value: 2 },
  { label: "Mwenge", value: 3 },
];

const technician = [
    { label: "Joseph Kajo", value: 4 },
    { label: "Queen Bee", value: 5 },
    { label: "Kwetta", value: 6 },
    { label: "Badman Killy", value: 7 },
  ];

function FeedbackScreen() {
  return (
    <Screen style={styles.container}>
      <ScrollView>
        <Form
          initialValues={{
            reportName: "",
            openedBy: "",
            description: "",
            location: null,
            technician: null,

          }}
          
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <FormField 
          maxLength={255} 
          name="reportName" 
          placeholder="Report Name" 
          />
          <FormField
            maxLength={255}
            name="openedBy"
            placeholder="Opened By"
          />
          <DatePicker 
            title="Select feedback response from: " 
          />
          <DatePicker 
            title="Select feedback response to: " 
          />
          <Picker 
            items={technician} 
            name="technician" 
            placeholder="Select technician receive response" 
          /> 
          <Picker 
            items={location} 
            name="location" 
            placeholder="Select location's feedback response" 
          /> 
          <SubmitButton title="Generate Report" />
        </Form>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default FeedbackScreen;
