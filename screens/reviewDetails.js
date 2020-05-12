import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import {globalStyles, images} from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetails({route, navigation}){
    const submitHandler = () => {
        navigation.goBack();
    }
    const rating = route.params.rating;
    return(
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.titleText}>
                    {route.params.name}
                </Text>
                <Text style={globalStyles.titleText}>
                    {route.params.body}
                </Text>
                <View style={styles.ratings}>
                    <Text>My rating</Text>
                    <Image source={images.ratings[rating]}/>
                </View>
                {/*<Text style={globalStyles.titleText}>*/}
                {/*    {route.params.rating}*/}
                {/*</Text>*/}
            </Card>

            <Button title='Go back to Home screen.' onPress={submitHandler}/>
        </View>
    );
}

const styles= StyleSheet.create({
    ratings:{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop:15,
        borderTopWidth:1,
        borderTopColor: '#eee'
    }
})

