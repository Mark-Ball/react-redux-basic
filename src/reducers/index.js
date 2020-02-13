import { combineReducers } from 'redux';
import nameReducer from './name_reducer';

export default combineReducers({
    name: nameReducer
});