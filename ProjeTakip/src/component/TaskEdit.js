import React, { Component } from 'react';
import _ from 'lodash';
import {
    View, Text, Picker, Alert
} from 'react-native';
import Communications from 'react-native-communications';
import { Card, CardSection, Button, NavBar, Input } from './common';
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
        const { Title, Description, AssignsName } = this.props;
        this.props.taskSave({ Title, Description, AssignsName, uid: this.props.task.ID });
    }
    render() {
        return (
            <View>
                <NavBar />
                <Card>
                    <CardSection>
                        <Text >
                            {this.props.Title}
                        </Text>
                    </CardSection>
                    <CardSection >
                        <Input
                            label="Atayan Kişi"
                            value={this.props.AssignsName}
                            onChangeText={text => this.props.taskUpdate({ prop: 'phone', value: text })} />
                    </CardSection>
                    <CardSection>
                        <Input
                            label="Açıklama"
                            value={this.props.Description}
                            onChangeText={text => this.props.taskUpdate({ prop: 'phone', value: text })} />
                    </CardSection>
                    <CardSection>
                        <Input
                            label="Dosya Ekle"
                            value={this.props.Description}
                            onChangeText={text => this.props.taskUpdate({ prop: 'phone', value: text })} />
                    </CardSection>
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
    const { Title, Description, AssignsName } = state.taskForm;
    return { Title, Description, AssignsName };
}
export default connect(mapStateProps, { taskUpdate, taskSave, taskDelete })(TaskEdit);