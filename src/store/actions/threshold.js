import { UPDATE_THRESHOLD } from '../constants';

export const updateThershold = (average, time) => {
    return {
        type: UPDATE_THRESHOLD,
        payload: {
            average,
            time
        }
    };
};
