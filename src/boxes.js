import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal  } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'; 

export default function Boxes(){
    const [modalVisible1, setModalVisible1] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const navigation = useNavigation();

        return(
            <View style={styles.container}>

            <TouchableOpacity onPress={() => setModalVisible1(true)}>
                <View style={styles.box}>

                    <View style={styles.inner}>
                    <Ionicons name="call-sharp" size={20} color="green" />
                        <Text style={styles.text}>Hotlines</Text>
                    </View>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => setModalVisible2(true)}>
                <View style={styles.box}>
                    <View style={styles.inner}>
                    <Ionicons name="help-buoy-sharp" size={20} color="green" />
                        <Text style={styles.text}>Questions</Text>
                    </View>
                </View>
            </TouchableOpacity>  

            <TouchableOpacity onPress={() => navigation.navigate('Charity')}> 
                <View style={styles.box}>
                    
                    <View style={styles.inner}>
                    <Ionicons name="heart-half-sharp" size={20} color="green" />
                        <Text style={styles.text}>Charity</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.box}>
                    <View style={styles.inner}>
                    <Ionicons name="people-sharp" size={20} color="green" />
                        <Text style={styles.text}>About Us</Text>
                    </View>
                </View>
            </TouchableOpacity>

                <Modal
                    visible={modalVisible1}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={() => setModalVisible1(false)}
                >
                    <View style={styles.modal}>
                    <Text style={styles.modalTitle}>Hotlines</Text>
                    <Text style={[styles.modalText, { textAlign: 'center' }]}> Homeless Youth and Teen Victims:{"\n"}800-708-6600</Text>
                    <Text style={[styles.modalText, { textAlign: 'center' }]}>Victims of Crime and their Families:{"\n"}866-689-4357</Text>
                    <Text style={[styles.modalText, { textAlign: 'center' }]}>Rape and Sexual Assault Victims:{"\n"}212-227-3000</Text>
                    <Text style={[styles.modalText, { textAlign: 'center' }]}>Substance Abuse Problems:{"\n"}888-692-9355</Text>
                    <Text style={[styles.modalText, { textAlign: 'center' }]}>People with Disabilities:{"\n"}212-533-4358 </Text>
                    <Text style={[styles.modalText, { textAlign: 'center' }]}>Elderly Crime Victims:{"\n"}866-689-4537</Text>
                    <Text style={[styles.modalText, { textAlign: 'center' }]}>National Child Abuse Hotline:{"\n"}800-422-4452</Text>
                    <Text style={[styles.modalText, { textAlign: 'center' }]}>Elderly Crime Victims:{"\n"}212-442-3103</Text>
                    <Text style={[styles.modalText, { textAlign: 'center' }]}>Immigrants:{"\n"}800-566-7636</Text>
                    <TouchableOpacity onPress={() => setModalVisible1(false)}>
                        <Text style={styles.modalClose}>Close</Text>
                    </TouchableOpacity>
                    </View>
                </Modal>

                <Modal
                    visible={modalVisible2}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={() => setModalVisible2(false)}
                >
                    <View style={styles.modal}>
                    <Text style={styles.modalTitle}>Frequently Asked Questions</Text>
                    <Text style={[styles.modalText, { textAlign: 'center' }]}>1. How do I find a shelter or other resources in my area?{"\n"}- The AwareCity app includes a live map of nearby resources, including shelters, food banks, and other organizations that offer services to people experiencing homelessness.</Text>
                    <Text style={[styles.modalText, { textAlign: 'center' }]}>2. How do I access emergency services like medical care or mental health support?{"\n"}- If you exit this popup, you can click on the hotlines tab to read more information on local emergency services, such as hospitals and mental health clinics. If you're in a crisis situation, there may also be emergency hotlines or other resources available through the app.</Text>
                    <Text style={[styles.modalText, { textAlign: 'center' }]}>3. How can I get involved in advocacy or activism to address homelessness in my community?{"\n"}- By clickin on the charity tab, you will find resources for getting involved in local advocacy efforts, such as joining a grassroots organization or attending community meetings. It will also include information on several organizations you can help by volunteering at their locations.</Text>
                    <TouchableOpacity onPress={() => setModalVisible2(false)}>
                        <Text style={styles.modalClose}>Close</Text>
                    </TouchableOpacity>
                    </View>
                </Modal>

            <Text style={styles.cp}> Copyright ©️ AwareCity 2023 </Text>
            
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
        fontSize: 20,
    },
    modal: {
        flex: 1,
        backgroundColor: 'gray',
        margin: '10%',
        padding: '5%',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 15,
        marginBottom: 10,
        borderColor: '#FCE9D8',
        borderWidth: 3, 
        borderRadius: 35,
      },
      modalText: {
        fontSize: 15,
        marginBottom: 10,
        // borderBottomWidth: 3,
        // borderBottomStyle: 'solid',
        // borderBottomColor: 'black',
      },
      modalClose: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue',
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderBottomStyle:'solid',
        borderBottomColor:'blue',
      },
    cp:{
        marginTop: 60,
        alignSelf: 'center',
    },
})