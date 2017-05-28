import { Map } from 'immutable';
import { UPDATE_TIMER } from '../constants';

const initialState = Map({ currentTimerCount: 1000 });

export default (state = initialState, action) => {
    switch (action.type) {
    case UPDATE_TIMER:
        const nextTimerCount = state.get('currentTimerCount') + 1000;
        return state.set('currentTimerCount', nextTimerCount);
    default:
        return state;
    }
};
