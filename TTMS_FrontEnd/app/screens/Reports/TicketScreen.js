import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import * as Yup from "yup";
import listingsApi from '../../api/listings';


import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../../components/forms";
import Screen from "../../components/Screen";

import DatePicker from "../../components/DatePicker";

const validationSchema = Yup.object().shape({
  createdBy: Yup.string().required().min(1).label("Full Name"),
  description: Yup.string().required().min(1).label("Description"),
  category: Yup.string().required().min(1).label("Category"),
  subcategory: Yup.string().required().min(1).label("Subcategory"),
});

const handleSubmit = async (listing,data) => {
  const result = await listingsApi.addProblem({...listing})
  if (!result.ok) 
    return alert('Could not save the listing');
  alert('Success');
  console.log(data)
}

function TicketScreen() {
  return (
    <Screen style={styles.container}>
      <ScrollView>
        <Form
          initialValues={{
            createdBy: "",
            description: "",
            category: "",
            subcategory: "",

          }}
          
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <FormField 
          maxLength={255} 
          name="createdBy" 
          placeholder="Created By" 
          />
          <FormField 
          maxLength={255} 
          name="category" 
          placeholder="Category" 
          />
          <FormField 
          maxLength={255} 
          name="subcategory" 
          placeholder="Sub Category" 
          /> 
          <FormField
          autoCapitalize="none"
          autoCorrect={false}
          name="description"
          placeholder="More details"
          numberOfLines={3}
          multiline
          />
          <SubmitButton title="Add Problem"  />
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
export default TicketScreen;
