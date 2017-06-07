import _meanBy from 'lodash/meanBy';
import { UPDATE_TIMER, UPDATE_INTERVAL, INTERVAL_LIMIT } from './constants';

//creates a hash that stores the starting index of each averageInterval
const startingIndexStore = {};

const createStartingIndexStore = () => {
    const baseItemCount = 12;
    let averageInterval = INTERVAL_LIMIT; //5

    while (averageInterval > 0) {
        startingIndexStore[averageInterval] = baseItemCount * (averageInterval - 1);
        averageInterval -= 1;
    }
};

createStartingIndexStore();

const start = interval => startingIndexStore[interval];

export const getAverage = (interval, uptimes) => {
    const currentUptimes = uptimes
        .toArray()
        .slice(start(interval), uptimes.size);
    return parseFloat(_meanBy(currentUptimes, u => parseFloat(u.y)).toFixed(2));
};
