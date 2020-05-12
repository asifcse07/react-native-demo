import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { Icon } from 'react-native-elements';
import { DrawerActions, useNavigationState } from '@react-navigation/native';

export default function Header({navigation, HeaderTitle}) {
    const pressHandler = () => {
        navigation.dispatch(DrawerActions.toggleDrawer())
        // console.log(navigation.title)
    }
    return(
        <View style={styles.header}>
            <View style={styles.iconView}>
                <Icon
                    name='menu'
                    type='material'
                    color='#517fa4'
                    size={40}
                    style={styles.icons}
                    onPress={pressHandler}
                />
            </View>
            <View>
                <Text style={styles.headerText}>{HeaderTitle}</Text>
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    header:{
        width:'100%',
        height: '100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center',
        // backgroundColor: 'red',
    },
    headerText:{
        fontWeight:'bold',
        fontSize:20,
        color:'#333',
        letterSpacing:1,
    },
    iconView: {
        // backgroundColor: 'green',
        position:'absolute',
        left: 5,
    }
})
