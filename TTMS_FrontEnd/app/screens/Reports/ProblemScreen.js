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
  subCategory: Yup.object().required().nullable().label("Select problem's sub-category"),
  category: Yup.object().required().nullable().label("Select problem's category"),
  technician: Yup.object().required().nullable().label("Select technician that add problem")
});

const category = [
    { label: "Router", value: 1 },
    { label: "Switch", value: 2 },
    { label: "Fiber", value: 3 },
  ];
const subCategory = [
    { label: "Cat-6", value: 8 },
    { label: "All", value: 9 },
    { label: "D-link", value: 10 },
];

const technician = [
    { label: "Joseph Kajo", value: 4 },
    { label: "Queen Bee", value: 5 },
    { label: "Kwetta", value: 6 },
    { label: "Badman Killy", value: 7 },
  ];

function ProblemScreen() {
  return (
    <Screen style={styles.container}>
      <ScrollView>
        <Form
          initialValues={{
            reportName: "",
            openedBy: "",
            description: "",
            category: null,
            technician: null,
            subCategory: null,
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
            title="Select problems added from: " 
          />
          <DatePicker 
            title="Select problems added to: " 
          />
          <Picker 
            items={technician} 
            name="technician" 
            placeholder="Select technician that add problem" 
          /> 
          <Picker 
            items={category} 
            name="category" 
            placeholder="Select problem's category" 
          /> 
          <Picker 
            items={subCategory} 
            name="subCategory" 
            placeholder="Select problem's sub-category" 
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
export default ProblemScreen;
