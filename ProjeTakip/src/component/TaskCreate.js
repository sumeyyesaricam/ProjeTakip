import React, { Component } from 'react';
import {
    View, Text, TextInput, TouchableOpacity, Image, ListView,ScrollView
} from 'react-native';
import _ from 'lodash';
import SearchInput, { createFilter } from 'react-native-search-filter';
import { Card, CardSection, Button } from './common';
import { connect } from 'react-redux';
import { taskUpdate, taskCreate, userFetch } from '../actions';

const KEYS_TO_FILTERS = ['Username', 'Name'];
class TaskCreate extends Component {
    componentWillMount() {
        this.props.userFetch();
        this.createDataSource(this.props);
    }
    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }
    createDataSource(nextProps) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(nextProps.users);
    }

    onButtonPress() {
        const { Title, Description, ProjectName } = this.props;
        this.props.taskCreate({ Title, Description, ProjectName });
    }
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
    }
    searchUpdated(term) {
        this.setState({ searchTerm: term })
    }
    render() {
        debugger;
        const filteredEmails = this.props.users.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
        return (
            <Card style={{ backgroundColor: 'white', flexDirection: 'column', flex: 1 }}>
                <CardSection style={{ flex: 1 }}>
                    <SearchInput
                        onChangeText={(term) => { this.searchUpdated(term) }}
                        style={styles.searchInput}
                        placeholder="Kullanıcı Adı"
                    />
                    <ScrollView>
                        {filteredEmails.map(email => {
                            return (
                                <TouchableOpacity onPress={() => alert(email.Username)} key={email.ID} style={styles.emailItem}>
                                    <View>
                                        <Text>{email.Name}</Text>
                                        <Text style={styles.emailSubject}>{email.Username}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                    </ScrollView>
                </CardSection>
                <CardSection style={{ flex: 1 }}>
                    <TextInput style={styles.textInputStyle}
                        value={this.props.Title}
                        autoCorrect={false}
                        placeholder={"Görev Başlığı"}
                        onChangeText={text => this.props.taskUpdate({ prop: 'Title', value: text })} />
                </CardSection>
                <CardSection style={{ flex: 8 }}>
                    <TextInput
                        style={[styles.textInputStyle, { position: 'absolute', width: '100%', height: '100%' }]}
                        value={this.props.Description}
                        autoCorrect={false}
                        editable={true}
                        numberOfLines={5}
                        placeholder={"Görev Açıklamasi"}
                        onChangeText={text => this.props.taskUpdate({ prop: 'Description', value: text })} />
                </CardSection>
                <CardSection style={{ flex: 1 }}>
                    <View style={{
                        flexDirection: 'row',
                        margin: 10,
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity style={styles.touchOpacityText} onPress={() => {
                            console.log("press");
                        }}>
                            <Image source={require('../img/file.png')} />
                        </TouchableOpacity >
                        <TouchableOpacity style={styles.touchOpacityText} onPress={() => {
                            console.log("press");
                        }}>
                            <Image source={require('../img/person.png')} />
                        </TouchableOpacity >
                        <TouchableOpacity style={styles.touchOpacityText} onPress={() => {
                            console.log("press");
                        }}>
                            <Image source={require('../img/calendar.png')} />
                        </TouchableOpacity >
                        <TouchableOpacity style={[styles.touchOpacityText, {}]} onPress={() => {
                            console.log("press");
                        }}>
                            <Image source={require('../img/send.png')} />
                        </TouchableOpacity >
                    </View>
                </CardSection>
            </Card>
        );
    };
}
const styles = {
    textInputStyle: {
        flex: 1,
        margin: 10
    }, searchInput: {
        padding: 10,
        borderColor: '#CCC',
        borderWidth: 1
    },
    touchOpacityText: {
        margin: 5
    }, emailItem: {
        borderBottomWidth: 0.5,
        borderColor: 'rgba(0,0,0,0.3)',
        padding: 10
    },
    emailSubject: {
        color: 'rgba(0,0,0,0.5)'
    },
}
const mapStateProps = (state) => {
    const { name, phone, shift } = state.taskForm;
    const users = _.map(state.userListResponse, (val, uid) => {
        return { ...val, uid }
    });
    return { name, phone, shift, users };
}
export default connect(mapStateProps, { taskUpdate, taskCreate, userFetch })(TaskCreate);