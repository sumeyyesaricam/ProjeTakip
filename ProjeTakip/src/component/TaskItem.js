import React, { Component } from 'react';
import {
    View, Icon, Text, TouchableWithoutFeedback, TouchableHighlight, Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class TaskItem extends Component {

    onRowTaskPress() {
        Actions.taskDetail({ task: this.props.task });
    }
    render() {
        const { Title } = this.props.task;
        return (

            <TouchableWithoutFeedback
                onPress={this.onRowTaskPress.bind(this)}
            >
                <View >
                    <CardSection>
                        <TouchableHighlight style={{ marginLeft: 5, flex: 1 }} onPress={() => console.log("icon press")}>
                            <Image source={require('../img/tick.png')} />
                        </TouchableHighlight>
                        <Text style={{ flex: 6, marginTop: 5, justifyContent: 'center', alignItems: 'center' }}>
                            {Title}
                        </Text>
                    </CardSection>

                </View>
            </TouchableWithoutFeedback >
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.task.ID;
    return { expanded };
}

export default connect(mapStateToProps, actions)(TaskItem);