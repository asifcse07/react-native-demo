import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, FlatList, TouchableOpacity} from 'react-native';
import {globalStyles} from '../styles/global';
import Card from '../shared/card';


export default function Home({navigation}){
    const [review, setReview] = useState([
        {name: 'A first review', rating: 5, body:"lorem ipsum", key : "1"},
        {name: 'A 2nd review', rating: 4, body:"lorem ipsum 2", key : "2"},
        {name: 'A 3rd review', rating: 3, body:"lorem ipsum 3", key : "3"},
        {name: 'A 4th review', rating: 2, body:"lorem ipsum 4", key : "4"}
    ])

    return(
        <View style={globalStyles.container}>
            <FlatList
                data={review}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Review', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.name}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
