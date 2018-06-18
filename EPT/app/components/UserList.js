import React, { Component } from 'react';
import {
    Text, View
} from 'react-native';

import axios from 'axios';

//http://172.16.17.98/ept/Person/GetUsers

class UserList extends Component {

    state ={ users:[]};

    componentWillMount() {
        axios.get('http://172.16.17.98/ept/Person/GetUsers')
        .then(response=> this.setState({ users: response.data}));

        console.log("hello süm");
    }
    render() {
        console.log(this.state);
        return (
            <View >
                <Text >User List</Text>
            </View>
        );
    }
}
export default UserList;