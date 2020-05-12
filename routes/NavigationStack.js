import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/home';
import About from '../screens/about';
import {NavigationContainer} from '@react-navigation/native';
import Header from '../shared/header';

const Drawer = createDrawerNavigator();

export default function NavigationStack() {
    return(
        <NavigationContainer>
            <Drawer.Navigator screenOptions={{ headerStyle: { backgroundColor: 'papayawhip', height:60, width:'100%'} }}>
                <Drawer.Screen name="Home" component={Home}/>
                <Drawer.Screen name="About" component={About}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
