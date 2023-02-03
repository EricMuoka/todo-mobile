import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../auth';
import {
  TouchableOpacity,
  Image,
  Text,
  View,
  Button,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  StatusBar
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

 interface Props {
    navigation: {
        navigate: (screenName: string) => void;
    };
 }

 const OnboardScreen: React.FC<Props> = ({ navigation }) => {

     const [selectedLanguage, setSelectedLanguage] = useState('English')

    return(
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#00011B"/>
            <View style={{ backgroundColor: '#00011b' }}>
                <Image
                    style={styles.img}
                    source={require('../../assets/blurs.png')}
                />
            </View>
            <View>
                <Text style={styles.free}>Free To Use</Text>
                <Text style={styles.paragraph}>
                    The first Social media platform for anonymous users. A safe
                    and hospitable online environment that encourages anonymity and privacy.{'\n'}
                    {'\n'}A social media platform with easy-to-use filters and audio features
                                        for Photos and videos.
                </Text>
            </View>
            <View style={styles.buttonView}>
                <View style={styles.buttonView1}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Register Screen')}
                        style={styles.buttonR}
                    >
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonView2}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login Screen')}
                        style={styles.buttonL}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.textView2}>
                <Picker
                    selectedValue={selectedLanguage}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                }>
                    <Picker.Item label="English" value="English" />
                    <Picker.Item label="English" value="English" />
                    <Picker.Item label="English" value="English" />
                    <Picker.Item label="English" value="English" />
                </Picker>
            </View>
            <View style={styles.bottomView}>
                <View style={styles.bottomView1}>
                    <Text style={styles.bottomText}>About</Text>
                    <Text style={styles.bottomText1}>Privacy</Text>
                    <Text style={styles.bottomText1}>GDPR</Text>
                </View>
                <View style={styles.bottomView2}>
                    <Text style={styles.bottomText}>Terms&Conditions</Text>
                    <Text style={styles.bottomText1}>FAQs</Text>
                </View>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#262261'
    },
    img: {
         top: 0.002197265625,
         left: 73,
         width: 270,
         height: 90,
         opacity: 1,
    },
    free: {
        top: 60,
        left: 30,
        color: '#ffffff',
        fontSize: 40,
        opacity: 1,
    },
    paragraph: {
        top: 130,
        left: 30,
        width: 400,
        fontSize: 23,
        color: '#ffffff',
        height: 270,
        letterSpacing: 0,
        opacity: 1,
    },
    text: {
        fontSize: 10,
        fontWeight: 'bold',
    },
    buttonView: {
        top: 100,
        flexDirection: 'row'
    },
    buttonView2: {
        left: 50,
        paddingLeft: 100
    },
    buttonR: {
        backgroundColor: '#2E3191',
        marginTop: 30,
        marginBottom: 30,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        left: 50,
        width: 132,
    },
    buttonL: {
        backgroundColor: '#2E3191',
        marginTop: 30,
        marginBottom: 30,
        marginRight: 10,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        left: 30,
        width: 132
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 20
    },
    textView2: {
        top: 150,
        paddingLeft: 50,
        borderWidth: 1,
        borderColor: '#ffffff'
    },
    text2: {
        color: '#ffffff',
        fontSize: 20
    },
    picker: {
       height: 50,
       width: 190,
       color: '#ffffff',
       left: 235,
       borderWidth: 1,
       borderColor: '#ffffff'
    },
    bottomView: {
        top: 200,
        padding: 45
    },
    bottomView1: {
        flexDirection: 'row'
    },
    bottomView2: {
        flexDirection: 'row',
        top: 20
    },
    bottomText: {
        color: '#ffffff',
        fontSize: 20
    },
    bottomText1: {
        color: '#ffffff',
        fontSize: 20,
        paddingLeft: 140
    }
});

export default OnboardScreen;
