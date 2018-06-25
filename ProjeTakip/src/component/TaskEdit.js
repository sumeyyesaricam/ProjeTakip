import React, { Component } from 'react';
import _ from 'lodash';
import {
    View, Text, Picker
} from 'react-native';
import { Card, CardSection, Button, Input } from './common';
import { connect } from 'react-redux';
import { taskEdit } from '../actions';
import TaskForm from './TaskForm';


class TaskEdit extends Component {
    componentWillMount() {
        _.each(this.props.task,(value,prop)=>{
            this.props.taskEdit({prop,value});
        });
    }
    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.taskEdit({ name, phone, shift: shift || 'Monday' });
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
                    <Button onPress={this.onButtonPress.bind(this)}>
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
export default connect(mapStateProps, { taskEdit })(TaskEdit);