import _ from 'lodash';
import React, { Component } from 'react';
import {
    View, Text, ListView
} from 'react-native';
import { connect } from 'react-redux';
import { taskFetch } from '../actions';



class TaskList extends Component {
   componentWillMount() {
        this.props.taskFetch();
        console.log("Süm");
        debugger;
        this.createDataSource(this.props);
    }
     componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }
    createDataSource({ tasks }) {
        const ds = ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(tasks);
    }
    render() {
        console.log(this.props);
        return (
            <View>
               
            </View>
        );
    };
}

const mapStateProps = (state) => {
    debugger;
    const  tasks  = _.map(state.tasks,(val,uid)=>{
        return {...val,uid}
    });
    return { tasks };
}
export default connect(mapStateProps, { taskFetch })(TaskList);