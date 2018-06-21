import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';
import AuthReducer from './AuthReducer';
import TaskFormReducer from './TaskFormReducer';

export default combineReducers({
    auth:AuthReducer,
    taskForm:TaskFormReducer,
    libraries: LibraryReducer,
    selectedLibraryId:SelectionReducer
})