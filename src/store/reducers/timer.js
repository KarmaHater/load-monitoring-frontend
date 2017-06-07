import { Map } from 'immutable';
import { UPDATE_TIMER, UPDATE_AVERAGE_INTERVAL } from '../constants';

const initialState = Map({
    currentTimerCount: 1000,
    currentAverageInterval: 1
});

export default (state = initialState, action) => {
    switch (action.type) {
    case UPDATE_TIMER:
        const nextTimerCount = state.get('currentTimerCount') + 1000;
        return state.set('currentTimerCount', nextTimerCount);
    case UPDATE_AVERAGE_INTERVAL:
        return state.set('currentAverageInterval', state.get('currentAverageInterval') + 1);
    default:
        return state;
    }
};
