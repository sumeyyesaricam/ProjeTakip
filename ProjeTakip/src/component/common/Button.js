import React, { Component } from 'react';
import {
    Text, TouchableOpacity
} from 'react-native';
import Dimensions from 'Dimensions';

const Button = ({ onPress, children }) => {

    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={buttonStyle}
            onPress={onPress}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>

    );
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        paddingBottom: 10,
        paddingTop: 10
    },
    buttonStyle: {
        width: DEVICE_WIDTH - 40,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#fff',
        marginLeft: 35,
        marginRight: 35
    }
}
export { Button };