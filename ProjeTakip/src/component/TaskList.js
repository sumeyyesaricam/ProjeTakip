import _ from 'lodash';
import React, { Component } from 'react';
import {
     ListView
} from 'react-native';
import { connect } from 'react-redux';
import { taskFetch } from '../actions';
import TaskItem from './TaskItem';


class TaskList extends Component {
   componentWillMount() {
        this.props.taskFetch();
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
        return <TaskItem task={task}/>;
    }
    render() {
        console.log(this.props.tasks);
        return (
            <ListView dataSource={this.dataSource}
                renderRow={this.renderRow} />
        );
    };
}

const mapStateProps = ({taskListResponse}) => {
    const  tasks  = _.map(taskListResponse,(val,uid)=>{
        return {...val,uid}
    });
    return { tasks };
}
export default connect(mapStateProps, { taskFetch })(TaskList);