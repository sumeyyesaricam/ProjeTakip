import _ from 'lodash';
import React, { Component } from 'react';
import {
    ListView, View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { FloatingAction } from 'react-native-floating-action';
import { connect } from 'react-redux';
import { taskFetch,taskUpdate } from '../actions';
import TaskItem from './TaskItem';


class TaskList extends Component {
    componentWillMount() {
        this.props.taskFetch({ personid: this.props.user });
        this.createDataSource(this.props);
    }
    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }
    createDataSource(nextProps) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(nextProps.tasks);
    }
    renderRow(task) {
        return <TaskItem task={task} />;
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }} >
                <ListView
                    enableEmptySections={true}
                    dataSource={this.dataSource}
                    renderRow={this.renderRow} />
                <FloatingAction
                    actions={actions}
                    position='right'
                    onPressItem={
                        (name) => {
                            if (name === "fabTask") {
                                this.props.taskUpdate({ prop: 'Title', value: '' });
                                this.props.taskUpdate({ prop: 'Description', value: '' });
                                Actions.taskCreate();
                            }
                        }
                    }
                />
            </View>
        );
    };
}
const actions = [{
    text: 'Sohbet',
    icon: require('../img/chat.png'),
    name: 'fabChat',
    position: 2
}, {
    text: 'Görev Ekle',
    icon: require('../img/task.png'),
    name: 'fabTask',
    position: 1
}, {
    text: 'Proje Ekle',
    icon: require('../img/project.png'),
    name: 'fabProject',
    position: 3
}];
const mapStateProps = ({ taskListResponse,auth }) => {
    const { user } = auth;
    const tasks = _.map(taskListResponse, (val, uid) => {
        return { ...val, uid }
    });
    return { tasks ,user};
}
export default connect(mapStateProps, { taskFetch,taskUpdate })(TaskList);