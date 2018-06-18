import React, { Component } from 'react';
import {
    Text, View
} from 'react-native';


const UserDetail=(props)=>{

    return(
        <View>
             <Text>
            {props.user.Name}-{props.user.Surname}
            </Text>
        </View>
    );
}

export default UserDetail;