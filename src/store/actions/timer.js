import { UPDATE_TIMER, UPDATE_AVERAGE_INTERVAL } from '../constants';

export const updateTimer = () => {
    return {
        type: UPDATE_TIMER
    };
};

export const updateAverageInterval = () => {
    return {
        type: UPDATE_AVERAGE_INTERVAL
    };
};
