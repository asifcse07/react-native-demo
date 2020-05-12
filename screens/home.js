import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Modal} from 'react-native';
import {globalStyles} from '../styles/global';
import Card from '../shared/card';
import {Icon} from 'react-native-elements';


export default function Home({navigation}){
    const [review, setReview] = useState([
        {name: 'A first review', rating: 1, body:"lorem ipsum", key : "1"},
        {name: 'A 2nd review', rating: 4, body:"lorem ipsum 2", key : "2"},
        {name: 'A 3rd review', rating: 3, body:"lorem ipsum 3", key : "3"},
        {name: 'A 4th review', rating: 2, body:"lorem ipsum 4", key : "4"}
    ])
    const [openModal, setOpenModal] = useState(false);

    return(
        <View style={globalStyles.container}>
            <Modal visible={openModal}>
                <Icon
                    name='close'
                    type='material'
                    color='#517fa4'
                    size={40}
                    style={{...styles.modalToggle, ...styles.modalClose}}
                    onPress={() => setOpenModal(false)}
                />
                <View style={styles.modalContent}>
                    <Text style={styles.modalText}>Hi babe ite me modal!!</Text>
                </View>
            </Modal>

            <Icon
                name='add'
                type='material'
                color='#517fa4'
                size={40}
                style={styles.modalToggle}
                onPress={() => setOpenModal(true)}
            />
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

const styles =({
    modalText: {

    },
    modalToggle :{
        marginBottom:10,
        borderWidth:1,
        borderColor:'#f2f2f2',
        padding:10,
        borderRadius:10,
        alignSelf:'center',
    },
    modalClose:{
        marginTop:20,
        marginBottom:0,
    },
    modalContent:{
        flex:1
    }
})
