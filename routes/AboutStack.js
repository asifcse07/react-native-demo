import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ReviewDetails from '../screens/reviewDetails';
import About from '../screens/about';


const Stack = createStackNavigator();


export default function Navigator() {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'papayawhip', height:60 } }}>
                <Stack.Screen
                    name="About"
                    component={About}
                    options={{ title: 'About' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
