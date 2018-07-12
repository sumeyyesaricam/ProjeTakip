import React, { Component } from 'react';
import {
    View, Text, TextInput, TouchableOpacity, Image, ListView, ScrollView
} from 'react-native';
import _ from 'lodash';
import LabelSelect from 'react-native-label-select';
import DateTimePicker from 'react-native-modal-datetime-picker';
import ModalFilterPicker from 'react-native-modal-filter-picker'
import { connect } from 'react-redux';
import { taskUpdate, taskCreate, userFetch, projectFetch, addUser } from '../actions';
import { auth } from 'firebase';

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
        const { Title, Description, ProjectID, AssignsID } = this.props;
        this.props.taskCreate({ Title, Description, ProjectID, AssignsID });
    }
    constructor(props) {
        super(props);
        this.state = {
            expanded: 0,
            userListe: [],
            visible: false,
            picked: 'Proje Adı',
            isDateTimePickerVisible: false,
            DueDate: '',
        }
        this.selectConfirm = this.selectConfirm.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    selectConfirm(list) {
        let { users } = this.props;
        for (let item of list) {
            let index = users.findIndex(ele => ele === item);
            if (~index) users[index].Type = 1;
            else continue;
        }
        this.setState({ userListResponse: list });
    }
    deleteItem(item) {
        let { users } = this.props;
        let index = users.findIndex(a => a === item);
        users[index].Type = 0;
        this.setState({ userListResponse: users });
    }
    onShow = () => {
        this.setState({ visible: true });
    }
    renderText = () => {
        debugger;
        if (this.state.DueDate !== '') {
            return <Text >{this.state.DueDate}</Text>;
        }
    }

    onSelect = (picked) => {
        let item = this.props.projects.filter(x => {
            return x.ID === picked;
        });
        this.setState({
            picked: item[0].Name,
            visible: false
        })
        this.props.taskUpdate({ prop: 'ProjectID', value: item[0].ID })
    }

    onCancel = () => {
        this.setState({
            visible: false
        });
    }

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        this.setState({ DueDate: date });
        this._hideDateTimePicker();
    };
    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    render() {
        const { visible, picked } = this.state;
        const options = [];
        this.props.projects.forEach(element => {
            options.push({
                key: element.ID,
                label: element.Name,
            });
        });  this.props.projects.forEach(element => {
            options.push({
                key: element.ID,
                label: element.Name,
            });
        });
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <ScrollView style={{ backgroundColor: 'white', flex: 1 }}>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
                        borderBottomWidth: 1, borderColor: '#ddd', flex: 1
                    }}>
                        <Text style={styles.text}>Atanacak Kişi</Text>
                        <View style={{
                            flex: 6,
                            marginLeft: 10,
                            marginTop: 15,
                            marginBottom: 10,
                        }}>
                            <ScrollView >
                                <LabelSelect
                                    title="Kullanıcı Adı"
                                    ref="select"
                                    onConfirm={this.selectConfirm}
                                >
                                    {this.props.users.filter(item => item.Type === 1).map((item, index) =>
                                        <LabelSelect.Label
                                            key={'label-' + index}
                                            data={item}
                                            onCancel={() => { this.deleteItem(item); }}
                                        >{item.Username}</LabelSelect.Label>
                                    )}
                                    {this.props.users.filter(item => item.Type !== 1).map((item, index) =>
                                        <LabelSelect.ModalItem
                                            key={'modal-item-' + index}
                                            data={item}
                                        >{item.Username}</LabelSelect.ModalItem>
                                    )}
                                </LabelSelect>

                            </ScrollView>
                        </View>
                        <View style={{ flex: 3, padding: 5, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity style={styles.buttonContainer} onPress={this.onShow}>
                                <Text>{picked}</Text>
                            </TouchableOpacity>
                            <ModalFilterPicker
                                visible={visible}
                                onSelect={this.onSelect}
                                onCancel={this.onCancel}
                                options={options}
                                cancelButtonText='İptal'
                                placeholderText='Proje Adı...'
                            />
                        </View>
                    </View>

                    <View style={{
                        marginLeft: 5,
                        borderBottomWidth: 1, borderColor: '#ddd'
                    }}>

                        <TextInput
                            placeholder='Görev Başlığı'
                            style={{ borderColor: '#a5d1cc', color: '#ddd' }}
                            value={this.props.Title}
                            onChangeText={text => this.props.taskUpdate({ prop: 'Title', value: text })}
                        />

                    </View>
                    <View style={{
                        margin: 5
                    }}>
                        <TextInput
                            textAlignVertical={'top'}
                            value={this.props.Description}
                            placeholder={"Görev Açıklaması"}
                            style={{
                                marginTop: 15,
                                height: 400,
                                color: '#ddd'
                            }}
                            multiline={true}
                            onChangeText={text => this.props.taskUpdate({ prop: 'Description', value: text })} />

                    </View>
                </ScrollView>
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                />
                <View style={{
                    flexDirection: 'row',
                    margin: 10,
                    alignItems: 'center',
                    margin: 5,
                    borderTopWidth: 1,
                    borderColor: '#ddd'
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
                    <TouchableOpacity style={styles.touchOpacityText} onPress={this._showDateTimePicker}>
                        <Image source={require('../img/calendar.png')} />
                    </TouchableOpacity >
                    {this.renderText}
                    <TouchableOpacity style={[styles.touchOpacityText, { right: 0 }]} onPress={() => {
                        debugger;
                        this.props.users.forEach(element => {
                            if (element.Type === 1) {
                                this.props.taskUpdate({ prop: 'AssignsID', value: element.ID })
                                this.onButtonPress();
                            }

                        });

                    }}>
                        <Image source={require('../img/send.png')} />
                    </TouchableOpacity >

                </View>
            </View>
        );
    };
}
const styles = {
    textInputStyle: {
        flex: 1,
        margin: 10
    }, buttonContainer: {
        borderColor: '#ddd',
        borderRadius: 10,
        borderWidth: 1,
        paddingLeft: 5,
        paddingRight: 5,
        marginLeft: 5,
        marginRight: 5,
    },
    text: {
        marginLeft: 10,
        marginTop: 15,
        marginBottom: 10,
        flex: 3,
        fontSize: 14
    },
    touchOpacityText: {
        margin: 5
    },
}
const mapStateProps = (state) => {
    const { user } = state.auth;
    const { Title, Description, AssignsID, ProjectID, userList } = state.taskForm;
    const users = _.map(state.userListResponse, (val, uid) => {
        return { ...val, uid }
    });
    const projects = _.map(state.projectListResponse, (val, uid) => {
        return { ...val, uid }
    });
    return { Title, Description, AssignsID, ProjectID, users, projects, userList, user };
}
export default connect(mapStateProps, { taskUpdate, taskCreate, userFetch, projectFetch, addUser })(TaskCreate);