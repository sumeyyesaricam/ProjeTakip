import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from '../component/LoginForm';
import TaskList from '../component/TaskList';
import TaskCreate from '../component/TaskCreate';
import TaskEdit from '../component/TaskEdit';
import { NavigationBar } from '../component/common';
import TaskDetail from '../component/TaskDetail';
import { taskUpdate, taskCreate, userFetch, projectFetch, addUser } from '../actions';


class RouterComponent extends Component {

    render() {
        return (
            <Router  {...this.props}>
                <Scene key="root" hideNavBar>
                    <Scene key="auth">
                        <Scene key="login" hideNavBar component={LoginForm} />
                    </Scene>
                    <Scene key="main">
                        <Scene
                            rightButtonImage={require('../img/heart1.png')}
                            onRight={() => Actions.taskCreate()}
                            key="taskList"
                            component={TaskList}
                            title="Görevler" initial />
                        <Scene key="taskCreate" hideNavBar component={TaskCreate} title="Create Task" />
                        <Scene key="taskEdit"
                            rightButtonImage={require('../img/tick.png')}
                            onRight={() => this.props.taskSave()
                            }
                            component={TaskEdit} title="Görevi Düzenle" />
                        <Scene key="taskDetail" hideNavBar component={TaskDetail} />

                    </Scene>
                </Scene>
            </Router>
        );
    }
}

export default RouterComponent;