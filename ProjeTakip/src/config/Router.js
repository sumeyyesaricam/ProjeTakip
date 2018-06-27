import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from '../component/LoginForm';
import TaskList from '../component/TaskList';
import TaskCreate from '../component/TaskCreate';
import TaskEdit from '../component/TaskEdit';

class RouterComponent extends Component {

    render() {
        return (
            <Router>
                <Scene key="root" hideNavBar>
                    <Scene key="auth">
                        <Scene key="login" component={LoginForm} />
                    </Scene>
                    <Scene key="main">
                        <Scene
                            rightButtonImage={require('../img/heart1.png')}
                            onRight={() => Actions.taskCreate()}
                            key="taskList"
                            component={TaskList}
                            title="Bana Atanan Görevler" initial />
                        <Scene key="taskCreate" component={TaskCreate} title="Create Task" />
                        <Scene key="taskEdit" component={TaskEdit} title="Edit Task" />

                    </Scene>
                </Scene>
            </Router>
        );
    }
}

export default RouterComponent;