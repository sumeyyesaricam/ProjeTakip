import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';
import AuthReducer from './AuthReducer';
import TaskFormReducer from './TaskFormReducer';
import TaskReducer from './TaskReducer';

export default combineReducers({
    auth:AuthReducer,
    taskForm:TaskFormReducer,
    libraries: LibraryReducer,
    tasks:TaskReducer,
    selectedLibraryId:SelectionReducer
})