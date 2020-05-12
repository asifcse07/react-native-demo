import React from 'react';
import {View, Text, StyleSheet, Button, Image, ImageBackground, Modal} from 'react-native';
import { Icon } from "react-native-elements";
import { DrawerActions, useNavigationState } from '@react-navigation/native';

export default function Header({navigation, HeaderTitle}) {
    const pressHandler = () => {
        navigation.dispatch(DrawerActions.toggleDrawer())
        // console.log(navigation.title)
    }
    return(
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
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
            <View style={styles.headerContent}>
                <Image source={require('../assets/heart_logo.png')} style={styles.logoStyle}/>
                <Text style={styles.headerText}>{HeaderTitle}</Text>
            </View>
        </ImageBackground>
    );
}

const styles=StyleSheet.create({
    header:{
        width:'110%',
        height: '120%',
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
    },
    logoStyle:{
        height: 25,
        width: 25,
        marginHorizontal:10,
    },
    headerContent:{
        flexDirection: 'row',
    }
})
