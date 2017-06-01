import { Map } from 'immutable';
import { UPDATE_TIMER, UPDATE_INTERVAL } from '../constants';

const initialState = Map({
    currentTimerCount: 1000,
    currentInterval: 1
});

export default (state = initialState, action) => {
    switch (action.type) {
    case UPDATE_TIMER:
        const nextTimerCount = state.get('currentTimerCount') + 1000;
        return state.set('currentTimerCount', nextTimerCount);
    case UPDATE_INTERVAL:
        return state.set('currentInterval', state.get('currentInterval') + 1)
    default:
        return state;
    }
};
