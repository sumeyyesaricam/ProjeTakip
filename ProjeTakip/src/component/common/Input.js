import React, { Component } from 'react';
import {
    Text, View, TextInput
} from 'react-native';



const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {

    const { inputStyle, labelStyle, containerStyle } = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>
                {label}
            </Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                style={inputStyle}
                value={value}
                autoCorrect={false}
                placeholder={placeholder}
                onChangeText={onChangeText}
                style={{ width: 100, height: 40 }} />
        </View>
    );
}
const styles = {
    inputStyle: {
        color: '#000',
        fontSize: 18,
        lineHeight: 23,
        flex: 5
    },
    labelStyle: {
        fontSize: 18,
        flex: 1,
        paddingLeft: 20,
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
}
export { Input };