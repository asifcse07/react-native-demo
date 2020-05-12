import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {globalStyles} from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetails({route, navigation}){
    const submitHandler = () => {
        navigation.goBack();
    }

    return(
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.titleText}>
                    {route.params.name}
                </Text>
                <Text style={globalStyles.titleText}>
                    {route.params.body}
                </Text>
                <Text style={globalStyles.titleText}>
                    {route.params.rating}
                </Text>
            </Card>

            <Button title='Go back to Home screen.' onPress={submitHandler}/>
        </View>
    );
}

