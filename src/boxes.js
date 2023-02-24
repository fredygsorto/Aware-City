import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal  } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; 

export default function Boxes(){
    const [modalVisible, setModalVisible] = useState(false);

        return(
            <View style={styles.container}>

            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <View style={styles.box}>

                    <View style={styles.inner}>
                    <Ionicons name="call-sharp" size={50} color="green" />
                        <Text style={styles.text}>Hotlines</Text>
                    </View>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity>
                <View style={styles.box}>
                    <View style={styles.inner}>
                    <Ionicons name="help-buoy-sharp" size={50} color="green" />
                        <Text style={styles.text}>Questions</Text>
                    </View>
                </View>
            </TouchableOpacity>  

            <TouchableOpacity>  
                <View style={styles.box}>
                    
                    <View style={styles.inner}>
                    <Ionicons name="heart-half-sharp" size={50} color="green" />
                        <Text style={styles.text}>Charity</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.box}>
                    <View style={styles.inner}>
                    <Ionicons name="people-sharp" size={50} color="green" />
                        <Text style={styles.text}>About Us</Text>
                    </View>
                </View>
            </TouchableOpacity>

                <Modal
                    visible={modalVisible}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modal}>
                    <Text style={styles.modalTitle}>Hotlines</Text>
                    <Text style={styles.modalText}>Homeless Youth and Teen Victims: 800-708-6600</Text>
                    <Text style={styles.modalText}>Victims of Crime and their Families: 866-689-4357</Text>
                    <Text style={styles.modalText}>Rape and Sexual Assault Victims: 212-227-3000</Text>
                    <Text style={styles.modalText}>Substance Abuse Problems: 888-692-9355</Text>
                    <Text style={styles.modalText}>People with Disabilities: 212-533-4358 </Text>
                    <Text style={styles.modalText}>Elderly Crime Victims: 866-689-4537</Text>
                    <Text style={styles.modalText}>National Child Abuse Hotline: 800-422-4452</Text>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <Text style={styles.modalClose}>Close</Text>
                    </TouchableOpacity>
                    </View>
                </Modal>

            </View>
        );
    }

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '50%',
        padding: 50, 
        flexDirection: 'column',        
    },
    box: {
        width: '100%',
        height: '45%', 
        padding: 5,
        borderRadius: 50,
        backgroundColor: "#FCE9D8",
        borderColor: "brown",
        borderWidth: 2,

    },
    inner:{
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',  
    },
    text:{
        fontSize: 25,
    },

    modal: {
        flex: 1,
        backgroundColor: 'gray',
        margin: '10%',
        padding: '5%',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
      },
      modalTitle: {
        fontSize: 50,
        fontWeight: 'bold',
        padding: 30,
        marginBottom: 50,
        borderColor: '#FCE9D8',
        borderWidth: 3, 
        borderRadius: 35,
      },
      modalText: {
        fontSize: 30,
        marginBottom: 50,
        borderBottomWidth: 3,
        borderBottomStyle: 'solid',
        borderBottomColor: 'black',
      },
      modalClose: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'blue',
        alignSelf: 'center',
      },
})