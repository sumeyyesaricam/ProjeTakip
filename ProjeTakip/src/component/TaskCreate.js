import React, { Component } from 'react';
import {
    View, Text, Picker, TouchableHighlight, Image
} from 'react-native';
import { Card, CardSection, Button, Input, NavBar } from './common';
import { connect } from 'react-redux';
import { taskUpdate, taskCreate } from '../actions';
import TaskForm from './TaskForm';


class TaskCreate extends Component {
    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.taskCreate({ name, phone, shift: shift || 'Monday' });
    }
    render() {
        return (
            <View>
                <NavBar />
                <Card>
                    <TaskForm {...this.props} />
                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)}>
                            Kaydet
                        </Button>
                    </CardSection>
                </Card>
            </View>
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
export default connect(mapStateProps, { taskUpdate, taskCreate })(TaskCreate);