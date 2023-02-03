import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

const Login = () => {
    return(
        <SafeAreaView>
            <View>
                <Text>Log In to BlursApp</Text>
            </View>
            <View>
                <Text>New here? Create Free Account</Text>
            </View>
            <View></View>
            <View></View>
            <View>
                <TouchableOpacity style={styles.buttonL}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
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
    }
});

export default Login;