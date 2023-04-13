import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash, TodoListScreen } from './src/screens/index';

 const Stack = createNativeStackNavigator();
 const App: React.FC = () => {
   return (
     <NavigationContainer>
       <Stack.Navigator screenOptions={{headerShown: false}}>
         <Stack.Screen name="Splash" component={Splash} />
         <Stack.Screen name="TodoListScreen" component={TodoListScreen} />
       </Stack.Navigator>
     </NavigationContainer>
   );
 }
 export default App;