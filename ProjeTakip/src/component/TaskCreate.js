import React, { Component } from 'react';
import {
    View, Text, TextInput, TouchableOpacity, Image, ListView, ScrollView
} from 'react-native';
import _ from 'lodash';
import LabelSelect from 'react-native-label-select';
import ModalFilterPicker from 'react-native-modal-filter-picker'
import { Card, CardSection, Button } from './common';
import { connect } from 'react-redux';
import { taskUpdate, taskCreate, userFetch, projectFetch, addUser } from '../actions';

class TaskCreate extends Component {
    componentWillMount() {
        this.props.userFetch();
        this.props.projectFetch();
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
            expanded: 0,
            userListe: [],
            visible: false,
            picked: null,
        }
        this.selectConfirm = this.selectConfirm.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    selectConfirm(list) {
        let { users } = this.props;
        for (let item of list) {
            let index = users.findIndex(ele => ele === item);
            if (~index) users[index].ID = 1;
            else continue;
        }
        this.setState({ userListResponse: list });
    }
    deleteItem(item) {
        let { users } = this.props;
        let index = users.findIndex(a => a === item);
        users[index].ID = 3;
        this.setState({ userListResponse: users });
    }
    onShow = () => {
        this.setState({ visible: true });
    }

    onSelect = (picked) => {
        this.setState({
            picked: picked,
            visible: false
        })
    }

    onCancel = () => {
        this.setState({
            visible: false
        });
    }
    render() {
        const { visible, picked } = this.state;

        return (
            <Card style={{ backgroundColor: 'white', flexDirection: 'column', flex: 1 }}>
                <CardSection style={{ flex: 1 }}>
                    <ScrollView style={{ flex: 1 }}>
                        <Text style={styles.text}>Atanacak Kişi</Text>
                        <LabelSelect
                            title="Kullanıcı Adı"
                            ref="select"
                            style={styles.labelSelect}
                            onConfirm={this.selectConfirm}
                        >
                            {this.props.users.filter(item => item.ID === 1).map((item, index) =>
                                <LabelSelect.Label
                                    key={'label-' + index}
                                    data={item}
                                    onCancel={() => { this.deleteItem(item); }}
                                >{item.Username}</LabelSelect.Label>
                            )}
                            {this.props.users.filter(item => item.ID !== 1).map((item, index) =>
                                <LabelSelect.ModalItem
                                    key={'modal-item-' + index}
                                    data={item}
                                >{item.Username}</LabelSelect.ModalItem>
                            )}
                        </LabelSelect>
                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onShow}>
                            <Text style={styles.emailSubject}>Proje Adı</Text>
                        </TouchableOpacity>
                        <Text >{picked}</Text>
                        <ModalFilterPicker
                            visible={visible}
                            onSelect={this.onSelect}
                            onCancel={this.onCancel}
                            options={this.props.projects}
                        />
                    </ScrollView>
                </CardSection>
                <CardSection style={{ flex: 1 }}>
                    <TextInput style={styles.textInputStyle}
                        value={this.props.Title}
                        autoCorrect={false}
                        placeholder={"Görev Başlığı"}
                        onChangeText={text => this.props.taskUpdate({ prop: 'Title', value: text })} />
                </CardSection>
                <CardSection style={{ flex: 7 }}>
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
        borderColor: '#CCC',
        borderRadius: 20,
        borderWidth: 1,
        flex: 1,
        marginLeft: 10,
        paddingLeft: 60,
        paddingRight: 60,
    }, text: {
        fontSize: 16,
        color: 'rgb(13, 131, 144)'
    },
    labelSelect: {
        marginTop: 5,
        marginBottom: 20,
        padding: 5,
        borderWidth: 1,
        borderRadius: 6,
        borderStyle: 'dashed',
        borderColor: '#6dc2a2'
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
    const { name, phone, shift, userList } = state.taskForm;
    const users = _.map(state.userListResponse, (val, uid) => {
        return { ...val, uid }
    });
    const projects = _.map(state.projectListResponse, (val, uid) => {
        return { ...val, uid }
    });
    return { name, phone, shift, users, projects, userList };
}
export default connect(mapStateProps, { taskUpdate, taskCreate, userFetch, projectFetch, addUser })(TaskCreate);