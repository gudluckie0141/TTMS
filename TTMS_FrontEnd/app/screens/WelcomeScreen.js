import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen({ navigation }) {
    return (
       <ImageBackground 
       blurRadius={10}
       style={styles.background}
       source={require('../assets/background.png')}
       >
           <View style={styles.logoContainer}>
                <Image source={require('../assets/logo1.png')} style={styles.logo} />
                <Text style={styles.tagline}>Trouble Ticketing Management System</Text>
           </View>

           <View style={styles.buttonsContainer}>
                <AppButton title="Login" color='primary' onPress={()=> navigation.navigate("Login")} />
           </View>
           
       </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    buttonsContainer: {
        padding: 20,
        width: '100 %'
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 45,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    tagline: {
        color: '#ffffff', 
        fontSize: 25,
        fontWeight: '600',
        paddingVertical: 20 

    }
})

export default WelcomeScreen;