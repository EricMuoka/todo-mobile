// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/views/boardingScreen';
import Register from './src/views/auth';
import Login from './src/views/auth/login';




const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register Screen" component={Register} />
        <Stack.Screen name="Login Screen" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;