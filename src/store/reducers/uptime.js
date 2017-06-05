import { List, Map } from 'immutable';
import { NEXT_UPTIME } from '../constants';
import { mockedUptime } from '../data/mockedUptime';

const initialState = Map({
    uptimes: List()
});

export default (state = initialState, action) => {
    switch (action.type) {
    case NEXT_UPTIME:
        return state.update('uptimes', list => list.push(mockedUptime()));
    default:
        return state;
    }
};
