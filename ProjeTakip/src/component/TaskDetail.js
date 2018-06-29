import React, { Component } from 'react';
import _ from 'lodash';
import {
    View, Text, Picker, Alert,ScrollView 
} from 'react-native';
import Communications from 'react-native-communications';
import { Card, CardSection, Button, NavBar } from './common';
import { connect } from 'react-redux';
import { taskUpdate, taskSave, taskDelete } from '../actions';
import TaskForm from './TaskForm';

class TaskDeatil extends Component {

    state = { showModal: false }
    componentWillMount() {
        _.each(this.props.task, (value, prop) => {
            this.props.taskUpdate({ prop, value });
        });
    }

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
    render() {

        return (
            <ScrollView  style={{ backgroundColor: 'white' }}>
                <NavBar task={this.props.task} />
                <Card>
                    <TaskForm {...this.props} />
                </Card>
            </ScrollView >
        );
    };
}
const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
}
const mapStateProps = (state) => {
    const { Title, Description, AssignsName, ProjectName } = state.taskForm;
    return { Title, Description, AssignsName, ProjectName };
}
export default connect(mapStateProps, { taskUpdate, taskSave, taskDelete })(TaskDeatil);