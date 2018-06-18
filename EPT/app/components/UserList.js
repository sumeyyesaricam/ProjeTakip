import React, { Component } from 'react';
import {
    Text, View
} from 'react-native';

import axios from 'axios';
import UserDetail from './UserDetail';


class UserList extends Component {

    state ={ users:[]};

    componentWillMount() {
        axios.get('http://172.16.17.98/ept/Person/GetUsers')
        .then(response=> this.setState({ users: response.data}));

        console.log("hello süm");
    }

    renderUsers(){
       return  this.state.users.map(user=>
       <UserDetail key={user.ID} user={user} />
    );
    }
    render() {
        console.log(this.state);
        return (
            <View >
                {this.renderUsers()}
            </View>
        );
    }
}
export default UserList;