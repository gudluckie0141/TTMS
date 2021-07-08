import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AppText from './AppText'
import colors from '../config/colors'

function Ticket({ ticket_id, client_name, Open_date, Assigned_to, Problem_category }) {
    return (
        <View style={styles.ticket}>
            <View style={styles.ticketin}>
                <Text style={styles.headers}>Ticket ID :</Text>
                <AppText style={styles.title}> {ticket_id} </AppText> 
            </View>

            <View style={styles.ticketin}>
                <Text style={styles.headers}>Client Name :</Text>
                <AppText style={styles.title}> {client_name} </AppText> 
            </View>

            <View style={styles.ticketin}>
                <Text style={styles.headers}>Open Date :</Text>
                <AppText style={styles.title}> {Open_date} </AppText> 
            </View>

            <View style={styles.ticketin}>
                <Text style={styles.headers}>Assigned To :</Text>
                <AppText style={styles.title}> {Assigned_to} </AppText> 
            </View>

            <View style={styles.ticketin}>
                <Text style={styles.headers}>Problem Category :</Text>
                <AppText style={styles.title}> {Problem_category} </AppText> 
            </View>
     
        </View>
    );
}

const styles = StyleSheet.create({
    headers: {
        color: '#8a2be2',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    ticket: {
        borderRadius: 15,
        backgroundColor: colors.secondary,
        marginBottom: 20,
        padding: 20

    },
    ticketin: {
        flexDirection: 'row',
    },
    title: {
        marginBottom: 7
    }
})

export default Ticket;