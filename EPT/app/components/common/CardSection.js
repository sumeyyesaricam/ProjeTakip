import React, { Component } from 'react';
import {
    Text, View
} from 'react-native';

const CardSection = (props) => {

    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
}
const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative',
        borderColor: '#ddd',
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
}
export { CardSection };