import React, { Component } from 'react';
import {
    Text, View
} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const UserDetail = (props) => {

    return (
        <Card>
            <CardSection>
                <Text>
                    {props.user.Name}-{props.user.Surname}
                </Text>
            </CardSection>
            <CardSection>
                <Text>
                    {props.user.Name}-{props.user.Surname}
                </Text>
            </CardSection>
        </Card>
    );
}

export default UserDetail;