import { combineReducers } from 'redux-immutable';
import uptime from './uptime';
import timer from './timer';

export default combineReducers({
    uptime,
    timer
});
