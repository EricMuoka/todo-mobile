import React, {useState} from 'react';
import FastImage from 'react-native-fast-image';
import { TouchableOpacity, Image, Text, View, Button, FlatList, Picker, StyleSheet, SafeAreaView, Dimensions, StatusBar } from 'react-native';



 const { width, height } = Dimensions.get('window');


 const OnboardScreen = ({navigation}) => {
   const options = ['English', 'English', 'English', 'English', 'English'];
   const [ selectedOptions, setSelectedOptions ] = useState(options[0]);

    return(
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#262261"/>
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
                    and hospitable online environment that encourages anonymity and privacy.
                    A social media platform with easy-to-use filters and audio features
                                        for audio and videos.
                </Text>
            </View>
            <View style={{ flexDirection: 'row'}}>
                <Button
                    style={styles.button}
                    title='Register'
                />
                <Button
                    style={styles.button}
                    title='Login'
                />
            </View>
            <View>
                <Text>English</Text>
            </View>
            <View>
                <View style={{ flexDirection: 'row'}}>
                    <Text>About</Text>
                    <Text>Privacy</Text>
                    <Text>GDPR</Text>
                </View>
                <View style={{ flexDirection: 'row'}}>
                    <Text>Terms&Conditions</Text>
                    <Text>FAQs</Text>
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
         height: 80,
         opacity: 1,
    },
    free: {
        top: 108,
        left: 16,
        color: '#ffffff',
        fontSize: 40,
        opacity: 1,
    },
    paragraph: {
        top: 176,
        left: 17,
        width: 313,
        fontSize: 21,
        color: '#ffffff',
        height: 263,
        textAlign: 'left',
        letterSpacing: 2,
        opacity: 1,
    },
    text: {
        fontSize: 10,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#2E3191',
        top: 481,
    },
    buttonL: {
        color: '#2E3191',
    }
});

export default OnboardScreen;
