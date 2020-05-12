import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer  } from '@react-navigation/native';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import DrawerNavigator from './drawerStack';
import Header from '../shared/header';


const Stack = createStackNavigator();

export default function Navigator()  {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'papayawhip', height:60} }}>
                <Stack.Screen
                    name="My App"
                    component={DrawerNavigator}
                    options={({ navigation }) => ({
                        headerTitle: () => (
                            <Header navigation={navigation} HeaderTitle={'On A NEW'}/>
                        )
                    })}
                />
                <Stack.Screen
                    name="Review"
                    component={ReviewDetails}
                    options={{ title: 'My Review' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
