import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/home';
import About from '../screens/about';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return(
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="About" component={About}/>
        </Drawer.Navigator>
    );
}
