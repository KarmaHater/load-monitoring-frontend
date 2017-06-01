import { UPDATE_TIMER, UPDATE_INTERVAL } from '../constants';

export const updateTimer = () => {
    return {
        type: UPDATE_TIMER
    };
};

export const updateInterval = () => {
    return {
        type: UPDATE_INTERVAL
    };
};
