import React, { Component } from 'react';
import _ from 'lodash';
import {
    View, Text, Image, ScrollView, TextInput
} from 'react-native';
import { CardSection, Input } from './common';
import { connect } from 'react-redux';
import { taskUpdate, taskSave, taskDelete } from '../actions';

class TaskEdit extends Component {

    state = { showModal: false }
    componentWillMount() {
        _.each(this.props.task, (value, prop) => {
            this.props.taskUpdate({ prop, value });
        });
    }
    onButtonPress() {
        const { Title, Description, AssignsName } = this.props.task;
        this.props.taskSave({ Title, Description, AssignsName, uid: this.props.task.ID });
    }
    render() {
        return (
            <ScrollView style={{ backgroundColor: 'white' }}>
                <CardSection>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, marginLeft: 10, marginTop: 5, marginBottom: 5 }}>
                        {this.props.Title}
                    </Text>
                </CardSection>
                <View style={styles.editStyle}>
                    <Image source={require('../img/person.png')} />
                    <TextInput style={styles.textInputStyle}
                        value={this.props.AssignsName}
                        onChangeText={text => this.props.taskUpdate({ prop: 'AssignsName', value: text })} />
                </View>
                <View style={styles.editStyle}>
                    <Image source={require('../img/calendar.png')} />
                    <TextInput style={styles.textInputStyle}
                        value={this.props.DueDate}
                        onChangeText={text => this.props.taskUpdate({ prop: 'DueDate', value: text })} />
                </View>
                <View style={styles.editStyle}>
                    <Image source={require('../img/description.png')} />
                    <TextInput style={styles.textInputStyle}
                        value={this.props.Description}
                        multiline={true}
                        onChangeText={text => this.props.taskUpdate({ prop: 'Description', value: text })} />
                </View>
                <View style={styles.editStyle}>
                    <Image source={require('../img/project1.png')} />
                    <TextInput style={styles.textInputStyle}
                        value={this.props.ProjectName}
                        onChangeText={text => this.props.taskUpdate({ prop: 'ProjectName', value: text })} />
                </View>
                <View style={styles.editStyle}>
                    <Image source={require('../img/file.png')} />
                    <TextInput style={styles.textInputStyle}
                        value={this.props.Description}
                        onChangeText={text => this.props.taskUpdate({ prop: 'Description', value: text })} />
                </View>
            </ScrollView>
        );
    };
}
const styles = {
    editStyle: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15,
    },
    textInputStyle: {
        margin: 5,
        borderBottomWidth: 1,
        borderColor: '#ddd',
        width: '100%'
    }
}
const mapStateProps = (state) => {
    const { Title, Description, AssignsName, ProjectName, DueDate } = state.taskForm;
    return { Title, Description, AssignsName, ProjectName, DueDate };
}
export default connect(mapStateProps, { taskUpdate, taskSave, taskDelete })(TaskEdit);