import React from 'react';
import {
 StyleSheet,
 StatusBar,
 SafeAreaView,
 TouchableOpacity,
 Text,
 View
} from 'react-native';


const Splash = ({navigation}) => {

  setTimeout(()=> {
    navigation.navigate('TodoListScreen')
  }, 3000);

  return (
    <SafeAreaView style={{ flex: 1, flexDirection: 'column', justifyContents: 'center',
      alignItems: 'center', backgroundColor: '#FF0000'}}>
      <StatusBar
        barStyle="light-content" hidden={false}
        backgroundColor="#FF0000"
      />
      <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#fff', paddingTop: 400}}>Eric Todo App</Text>
    </SafeAreaView>
  )
};

export default Splash;

const styles = StyleSheet.create({});