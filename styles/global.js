import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    'container' : {
        flex:1,
        padding: 15,
    },
    'titleText' :{
        fontFamily: "vincHand",
        fontSize:30,
        color: 'blue',
    },
    'paragraphText' : {
        marginVertical : 8,
        lineHeight : 6,
    }
});

export const images = {
    'ratings' : {
        '1' : require('../assets/rating-1.png'),
        '2' : require('../assets/rating-2.png'),
        '3' : require('../assets/rating-3.png'),
        '4' : require('../assets/rating-4.png'),
        '5' : require('../assets/rating-5.png'),
    }
}
