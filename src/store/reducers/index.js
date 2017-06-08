import { combineReducers } from 'redux-immutable';
import uptime from './uptime';
import timer from './timer';
import threshold from './threshold';

export default combineReducers({
    uptime,
    timer,
    threshold
});
