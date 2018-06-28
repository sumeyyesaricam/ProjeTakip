import React, { Component } from 'react';
import {
    Text, View, TouchableHighlight, Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './CardSection';

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
        <View>
            <CardSection>
                <TouchableHighlight style={{ marginLeft: 250 }} onPress={() => {
                    Actions.taskDetail({ task: {task} });
                }}>
                    <Image source={require('../../img/tick.png')} />
                </TouchableHighlight>
                <TouchableHighlight style={{ marginLeft: 5 }} onPress={() => {
                    Actions.taskDetail({ task: {task} });
                }}>
                    <Image source={require('../../img/like.png')} />
                </TouchableHighlight>
                <TouchableHighlight style={{ marginLeft: 5 }} onPress={() => {
                    Actions.taskEdit({ task: {task} });
                }}>
                    <Image source={require('../../img/edit.png')} />
                </TouchableHighlight>
                <TouchableHighlight style={{ marginLeft: 5 }} onPress={() =>{
                    {this.ConfirmDelete}
                }}>
                    <Image source={require('../../img/setting.png')} />
                </TouchableHighlight>
            </CardSection>
        </View>
    );
}
export { NavBar };