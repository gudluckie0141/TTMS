import React from 'react';
import {  StyleSheet, Text, TouchableOpacity} from 'react-native'

import colors from '../config/colors'

function AppButton({title, onPress}) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
        
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
        width: '100%'
    },
    text: {
        color: '#fffff0',
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})
export default AppButton;