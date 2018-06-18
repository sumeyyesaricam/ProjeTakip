import React, { Component } from 'react';
import {
    Text, View
} from 'react-native';


const Card = (props) => {

    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
}
const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowRadius:2,
        elevation:10,
        marginLeft: 5,
        marginRight: 5,

    }
}
export default Card;