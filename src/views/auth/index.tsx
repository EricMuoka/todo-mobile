import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  Input,
  TouchableOpacity,
  Text,
  Button,
  StyleSheet
} from 'react-native';


const Register = () => {

    const [email, setEmail] = useState('');
    const [selectedValue, setSelectedValue] = useState('option1');

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.view1}>
                <Text style={styles.text1}>Get A Free Account</Text>
            </View>
            <View style={styles.view2}>
                <Text style={styles.text2}>Already have an account?</Text>
                <Text style={styles.text3}>Log in</Text>
            </View>
            <View style={styles.view3}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => setEmail(text)}
                    value={email}
                    keyboardType="email-address"
                    placeholder="Your Email"
                />
            </View>
            <View style={styles.view4}>
                <TouchableOpacity
                    onPress={() => setSelectedValue('option1')}
                    style={styles.radioButton}
                >
                    {selectedValue === 'option1' && <View style={styles.selectedRadio} />}
                </TouchableOpacity>
                <Text style={styles.text4}>I agree with the privacy and terms and conditions</Text>
            </View>
            <View >
                <TouchableOpacity style={styles.button}>
                    <Text>Get Started</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomView}>
                <View style={styles.bottomView1}>
                    <Text style={styles.bottomText1}>About</Text>
                    <Text style={styles.bottomText1}>Privacy</Text>
                    <Text style={styles.bottomText1}>GDPR</Text>
                </View>
                <View>
                    <Text style={styles.bottomText}>Terms&Conditions</Text>
                </View>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    view1:  {
        top: 35,
        left: 25,
        fontStyle: 'MyriadPro-Regular'
    },
    text1:  {
       fontSize: 45,
       color: '#002b7F'
    },
    view2:  {
        top: 70,
        left: 22
    },
    text2:  {
        fontSize: 35,
        color: '#002b7F'
    },
    text3:  {
        fontSize: 40,
        color: '#0063b0'
    },
    view3:  {
        top: 130,
        left: 25,
        width: 342,
        height: 40
    },
    textInput: {
        color: 'red',
        borderColor: 'gray',
        borderWidth: 1
    },
    view4:  {
        flexDirection: 'row',
        top: 234,
        left: 30
    },
    radioButton: {
        width: 28,
        height: 28,
        borderWidth: 2,
        borderColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text4:  {
        left: 25,
        fontSize: 25,
        color: '#1a1818'
    },
    selectedRadio: {
        width: 14,
        height: 14,
        backgroundColor: '#ffffff',
    },
    button: {
        top: 329,
        color: '#ffffff',
        backgroundColor: '#2E3191',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: 132,
        marginBottom: 30,
        left: 155
    },
    bottomView: {
        top: 390,

    },
    bottomView1: {
        flexDirection: 'row'
    },
    bottomView2: {
        top: 20
    },
    bottomText: {
        color: '#1a1818',
        fontSize: 20,
        left: 190
    },
    bottomText1: {
        color: '#1a1818',
        fontSize: 20,
        padding: 60
    }
});

export default Register;