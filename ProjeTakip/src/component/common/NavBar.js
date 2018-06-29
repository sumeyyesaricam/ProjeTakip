import React, { Component } from 'react';
import {
    Text, View, TouchableOpacity, Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './CardSection';
import { Card } from './Card';

const NavBar = ({task}) => {
    ConfirmDelete = () => {
        Alert.alert(
            'Uyarı',
            'Silmek istediğinden emin misin?',
            [
                { text: 'İptal', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: () => this.props.taskDelete({ uid: this.props.task.ID }) },
            ],
            { cancelable: false }
        )
    }
    return (
        <Card>
            <CardSection>
                <TouchableOpacity  style={{ marginLeft: 250 }} onPress={() => {
                    Actions.taskDetail({ task: {task} });
                }}>
                    <Image source={require('../../img/tick.png')} />
                </TouchableOpacity >
                <TouchableOpacity  style={{ marginLeft: 5 }} onPress={() => {
                    Actions.taskDetail({ task: {task} });
                }}>
                    <Image source={require('../../img/like.png')} />
                </TouchableOpacity >
                <TouchableOpacity  style={{ marginLeft: 5 }} onPress={() => {
                    Actions.taskEdit({ task: {task} });
                }}>
                    <Image source={require('../../img/edit.png')} />
                </TouchableOpacity >
                <TouchableOpacity  style={{ marginLeft: 5 }} onPress={() =>{
                    {this.ConfirmDelete}
                }}>
                    <Image source={require('../../img/setting.png')} />
                </TouchableOpacity >
            </CardSection>
        </Card>
    );
}
export { NavBar };