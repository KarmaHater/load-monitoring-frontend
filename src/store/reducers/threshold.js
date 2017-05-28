import { List } from 'immutable';
import { UPDATE_THRESHOLD } from '../constants';

const initialState = List();

export default (state = initialState, action) => {
    switch (action.type) {
    case UPDATE_THRESHOLD:
        return state.push(action.payload);
    default:
        return state;
    }
};
