import React from 'react'; 
import { StyleSheet, View, Text, Image } from 'react-native';

const logo = require('../assets/ac_no_bg.png');

export default function Header(){

        return(
            <View style={styles.header}>
                <Image style={styles.logo} source={logo} />  
            </View>
        );
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: '15%',
        alignItems: 'center', 
        justifyContent: 'center',
    },
    logo: {
        width: '90%',
        height: '75%',
      },
})