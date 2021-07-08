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
  location: Yup.object().required().nullable().label("Considering your overall experience, how likely would you be to recommend us to a friend or a colleague?"),
});

const location = [
  { label: "Kijitonyama", value: 1 },
  { label: "Mwananyamala", value: 2 },
  { label: "Mwenge", value: 3 },
];




function CustomerScreen() {
  return (
    <Screen style={styles.container}>
      <ScrollView>
        <Form
          initialValues={{
            reportName: "",
            openedBy: "",
            description: "",
            location: null,

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
            title="Select customers registered from: " 
          />
          <DatePicker 
            title="Select customers registered to: " 
          />
          <Picker 
            items={location} 
            name="location" 
            placeholder="Select cuctomer's location" 
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
export default CustomerScreen;
