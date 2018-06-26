import React, { Component } from 'react';
import _ from 'lodash';
import {
    View, Text, Picker,Alert
} from 'react-native';
import Communications from 'react-native-communications';
import { Card, CardSection, Button, Confirm } from './common';
import { connect } from 'react-redux';
import { taskUpdate, taskSave, taskDelete } from '../actions';
import TaskForm from './TaskForm';

class TaskEdit extends Component {
     
    state = { showModal: false }
    componentWillMount() {
        _.each(this.props.task, (value, prop) => {
            this.props.taskUpdate({ prop, value });
        });
    }
    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.taskSave({ name, phone, shift, uid: this.props.task.uid });
    }
   
    
    ConfirmDelete= () => {

        Alert.alert(
            'Uyarı',
            'Silmek istediğinden emin misin?',
            [
              {text: 'İptal', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () =>  this.props.taskDelete({ uid:this.props.task.uid })},
            ],
            { cancelable: false }
          )
    }
    render() {
        
        return (
            <Card>
                <TaskForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Güncelle
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.ConfirmDelete}>
                        Sil
                    </Button>
                </CardSection>

            </Card>
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
    const { name, phone, shift } = state.taskForm;
    return { name, phone, shift };
}
export default connect(mapStateProps, { taskUpdate, taskSave, taskDelete })(TaskEdit);