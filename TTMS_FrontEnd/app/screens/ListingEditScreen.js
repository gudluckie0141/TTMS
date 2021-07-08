import React from "react";
import { StyleSheet, Image, ImageBackground, ScrollView } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton, AppFormPicker } from "../components/forms";
import listingsApi from '../api/listings';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  emailT: Yup.string().required().email().label("Email"),
  ticket: Yup.string().required().min(2).label("Ticket ID"),
  feedback: Yup.string().required().min(1).label("Feedback ID"),
  courteousness: Yup.object().required().nullable().label("The technician was courteous?"),
  experience: Yup.object().required().nullable().label("What would best describe your experience with the technician?"),
  knowledge: Yup.object().required().nullable().label("How satisfied are you with knowledge of technician? "),
  overall: Yup.object().required().nullable().label("How satisfied are you with overall satisfaction?"),
  QoS: Yup.object().required().nullable().label("How satisfied are you with quality of service?"),
  QoT: Yup.object().required().nullable().label("How satisfied are you with quality of technician? "),
  recommendation: Yup.object().required().nullable().label("Considering your overall experience, how likely would you be to recommend us to a friend or a colleague?"),
  replace: Yup.object().required().nullable().label("Over the next 12 months, how likely are you to replace our company with another company?"),
  resolved: Yup.object().required().nullable().label("How satisfied are you with process of getting problem resolved? "),
  responseTime: Yup.object().required().nullable().label("How satisfied are you with waiting time for your question to be answered?"),
  time: Yup.object().required().nullable().label("How satisfied are you with time taken by technician to solve your issue? "),
  comments: Yup.string().min(1).required().label("Other Comments"),
  location: Yup.string().min(1).required().label("Location")
});


const QoT = [
  { label: "Very Unsatisfied", value: 14 },
  { label: "Unsatisfied", value: 15 },
  { label: "Neutral", value: 16 },
  { label: "Satisfied", value: 17 },
  { label: "Very Satisfied", value: 18 },
];

const recommendation = [
  { label: "0 - 3", value: 1 },
  { label: "4 - 7", value: 2 },
  { label: "8 - 10", value: 3 },
];

const replace = [
  { label: "Certain", value: 50 },
  { label: "High chance", value: 51 },
  { label: "Equal chance", value: 52 },
  { label: "Low chance", value: 53 },
  { label: "Never", value: 54 },
];


const knowledge = [
  { label: "Very Unsatisfied", value: 24 },
  { label: "Unsatisfied", value: 25 },
  { label: "Neutral", value: 26 },
  { label: "Satisfied", value: 27 },
  { label: "Very Satisfied", value: 28 },
];

const overall = [
  { label: "Very Unsatisfied", value: 34 },
  { label: "Unsatisfied", value: 35 },
  { label: "Neutral", value: 36 },
  { label: "Satisfied", value: 37 },
  { label: "Very Satisfied", value: 38 },
];

const QoS = [
  { label: "Very Unsatisfied", value: 4 },
  { label: "Unsatisfied", value: 5 },
  { label: "Neutral", value: 6 },
  { label: "Satisfied", value: 7 },
  { label: "Very Satisfied", value: 8 },
];

const courteousness = [
  { label: "Strongly disagree", value: 39 },
  { label: "Somewhat disagree", value: 40 },
  { label: "Neutral", value: 41 },
  { label: "Somewhat agree", value: 42 },
  { label: "Strongly agree", value: 43 },
];

const experience = [
  { label: "Kept me waiting", value: 44 },
  { label: "Had to explain several times", value: 45 },
  { label: "Didn't know how to handle a problem", value: 46 },
  { label: "Had to ask other employees", value: 47 },
  { label: "Did not speak clearly", value: 48 },
  { label: "Other", value: 49 },
];

const resolved = [
  { label: "Very Unsatisfied", value: 9 },
  { label: "Unsatisfied", value: 10 },
  { label: "Neutral", value: 11 },
  { label: "Satisfied", value: 12 },
  { label: "Very Satisfied", value: 13 },
];

const responseTime = [
  { label: "Very Unsatisfied", value: 29 },
  { label: "Unsatisfied", value: 30 },
  { label: "Neutral", value: 31 },
  { label: "Satisfied", value: 32 },
  { label: "Very Satisfied", value: 33 },
];

const time = [
  { label: "Very Unsatisfied", value: 19 },
  { label: "Unsatisfied", value: 20 },
  { label: "Neutral", value: 21 },
  { label: "Satisfied", value: 22 },
  { label: "Very Satisfied", value: 23 },
];

function ListingEditScreen(props) {

const handleSubmit = async (listing,data) => {
  const result = await listingsApi.addListing({...listing})
  if (!result.ok) 
    return alert('Could not save the listing');
  alert('Success');
  console.log(data)
}

  return (
    <Screen style={styles.container}>
<ScrollView>
      <AppForm
        initialValues={{ email: "", ticket: "", feedback: "", emailT: "", courteousness: null, experience: null,
        overall: null, QoS: null, QoT: null, recommendation: null, replace: null, time: null,
        resolved: null, responseTime: null, knowledge: null, comments: "", location: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Customer Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="emailT"
          placeholder="Technician Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="map-marker-radius"
          keyboardType="email-address"
          name="location"
          placeholder="Location"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="identifier"
          name="ticket"
          placeholder="Ticket ID"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="identifier"
          name="feedback"
          placeholder="Feedback ID"
        />
        <AppFormPicker 
              items={recommendation}
              name="recommendation"
              icon="account-multiple-check"
              placeholder="Considering your overall experience, how likely would you be to recommend us to a friend or a colleague?"
            />
            <AppFormPicker 
              items={QoS}
              name="QoS"
              placeholder="How satisfied are you with quality of service?"
            />
            <AppFormPicker 
              items={QoT}
              name="QoT"
              placeholder="How satisfied are you with quality of technician?"
            />
            <AppFormPicker 
              items={resolved}
              name="resolved"
              placeholder="How satisfied are you with process of getting problem resolved?"
            />
            <AppFormPicker 
              items={courteousness}
              name="courteousness"
              placeholder="The technician was courteous?"
            />
            <AppFormPicker 
              items={experience}
              name="experience"
              placeholder="What would best describe your experience with the technician?"
            />
            <AppFormPicker 
              items={knowledge}
              name="knowledge"
              placeholder="How satisfied are you with knowledge of technician?"
            />
            <AppFormPicker 
              items={overall}
              name="overall"
              placeholder="How satisfied are you with overall satisfaction?"
            />
            <AppFormPicker 
              items={replace}
              name="replace"
              placeholder="Over the next 12 months, how likely are you to replace our company with another company?"
            />
            <AppFormPicker 
              items={responseTime}
              name="responseTime"
              placeholder="How satisfied are you with waiting time for your question to be answered?"
            />
            <AppFormPicker 
              items={time}
              name="time"
              placeholder="How satisfied are you with time taken by technician to solve your issue?"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="comment"
              keyboardType="email-address"
              name="comments"
              placeholder="Do you have any other comments or suggestions for us?"
              numberOfLines={3}
              multiline
              textContentType="emailAddress"
        />
        <SubmitButton title="Post Feedback" />
      </AppForm>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  back: {
    flex: 1
  },
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 50,
    borderRadius: 40
  },
});

export default ListingEditScreen;
