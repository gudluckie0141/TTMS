import React, {useState} from 'react';
import {StyleSheet, View, Modal, Button, Platform} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import AppText from "../components/AppText";




export default function DatePicker2() {

    const [isPickerShow, setIsPickerShow] = useState(false);
    const [date, setDate] = useState(new Date(Date.now()));
    
  
    const showPicker = () => {
      setIsPickerShow(true);
    };
  
    const onChange = (event, value) => {
      setDate(value);
      if (Platform.OS === 'android') {
        setIsPickerShow(false)
    }
    };

    return (

        <View >

        {/* The button that used to trigger the date picker */}
        {!isPickerShow && (
          <View style={styles.btnContainer}>
            <Button title="Select Start Date " color="purple" onPress={showPicker} />
          </View>
        )}


          {/* The date picker */}
          {isPickerShow && (
              <>
          <DateTimePicker
            value={date}
            mode={'date'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={false}
            onChange={onChange}
            style={styles.datePicker}
          />
          <Button title="Close" onPress={() => setIsPickerShow(false)} />
          </>
        )}
    
        
      


        {/* Display the selected date */}
        <View style={styles.pickedDateContainer}>
            <AppText style={styles.pickedDate}> {date.toDateString()} </AppText>
        </View>

        </View>
  
        
        
  
      
    )
};


// just add some styles to make our app look more beautiful
// This is not the focus of this article
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  },
  pickedDateContainer: {
    padding: 20,
    backgroundColor: '#eee',
    borderRadius: 25,
    marginVertical: 10
  },
  pickedDate: {
    fontSize: 18,
    color: 'black',
  },
  btnContainer: {
    padding: 5,
  },
  // This only works on iOS
  datePicker: {
    width: 320,
    height: 260,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
