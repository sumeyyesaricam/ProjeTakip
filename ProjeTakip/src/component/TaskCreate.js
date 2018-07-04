import React, { Component } from 'react';
import {
    View, Text, TextInput, TouchableOpacity, Image, ListView, ScrollView
} from 'react-native';
import _ from 'lodash';
import { Akira } from 'react-native-textinput-effects';
import LabelSelect from 'react-native-label-select';
import ModalFilterPicker from 'react-native-modal-filter-picker'
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
            picked: 'Proje Adı',
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
        debugger;
        let item = this.props.projects.filter(x => {
            return x.ID === picked;
        });
        this.setState({
            picked: item[0].Name,
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
        const options = [];
        this.props.projects.forEach(element => {
            options.push({
                key: element.ID,
                label: element.Name,
            });
        });

        return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <ScrollView style={{ backgroundColor: 'white', flex: 1 }}>
                <View style={{
                    flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 5,
                    borderBottomWidth: 1, borderColor: '#ddd'
                }}>
                    <ScrollView style={{ flex: 3, marginLeft: 5 }}>
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
                    </ScrollView>
                    <View style={{ flex: 1, margin: 5, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onShow}>
                            <Text style={styles.emailSubject}>{picked}</Text>
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
                    borderBottomWidth: 1, borderColor: '#ddd'
                    ,backgroundColor:'red'
                }}>
                    <Akira
                        label={'Görev Başlığı'}
                        borderColor={'#a5d1cc'}
                        labelStyle={{ color: '#ac83c4' }}
                    />

                </View>
                <View style={{
                    margin: 5,
                    borderBottomWidth: 1,
                    borderColor: '#ddd',backgroundColor:'yellow'
                }}>
                    <Akira
                        borderColor={'#a5d1cc'}
                        labelStyle={{ color: '#ac83c4' }}
                        value={this.props.Title}
                        autoCorrect={false}
                        label={"Görev Açıklaması"}
                        multiline={true}
                        numberOfLines={25}
                        inputHeight={150}
                        onChangeText={text => this.props.taskUpdate({ prop: 'Description', value: text })} />

                </View>
            </ScrollView>
            <View style={{
                flexDirection: 'row',
                margin: 10,
                alignItems: 'center',
                margin: 5,
                borderBottomWidth: 1,
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
                <TouchableOpacity style={styles.touchOpacityText} onPress={() => {
                    console.log("press");
                }}>
                    <Image source={require('../img/calendar.png')} />
                </TouchableOpacity >

                <TouchableOpacity style={[styles.touchOpacityText, { right: 0 }]} onPress={() => {
                    console.log("press");
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
        borderRadius: 15,
        marginLeft: 15,
        marginRight: 15,
        padding: 15,
        borderWidth: 1,
        borderColor: '#6dc2a2'
    },
    text: {
        fontSize: 16,
        color: 'rgb(13, 131, 144)'
    },
    labelSelect: {
        marginTop: 5,
        marginBottom: 10,
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
        color: 'rgb(13, 131, 144)'
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