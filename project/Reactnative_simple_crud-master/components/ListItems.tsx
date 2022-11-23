import React,{useRef} from 'react';
import {View,Text,StyleSheet,Animated} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler';

let colors = ["#ff8e42", "#4F6384"];

export default function ListItems = ({item,index,navigation,onDelete,onEdit})=>{
     const inputEl = useRef(null);

     const RightActions = ({progress,dragX,onPress,item})=>{
         const scale = dragX.interpolate({
                inputRange:[-100,0],
                outputRange:[1,0],
                extrapolate:'clamp'
            });

        return(
            <View style={styles.buttons}></View>
        )
     }
}


const styles = StyleSheet.create({
    row:{
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor:"#ccc",
        backgroundColor: '#FFF',
        padding: 10
    },

    container:{
        padding: 10
    },

    author: {
        marginTop: 25,
        marginBottom: 10,
        fontFamily: 'HelveticaNeue-Medium',
        fontSize: 15,
        color: '#FFF',
        textAlign: "right"
    },

    quote: {
        marginTop: 5,
        fontFamily: 'HelveticaNeue-Medium',
        fontSize: 17,
        lineHeight: 21,
        color: '#FFF',
    },

    buttons:{
        width: 190,
        flexDirection: 'row'
    },

    rightAction: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: 95,
    },

    editAction: {
        backgroundColor: '#497AFC'
    },

    deleteAction: {
        backgroundColor: '#dd2c00'
    },

    actionText: {
        color: '#fff',
        fontWeight: '600',
        padding: 20,
    }
});
