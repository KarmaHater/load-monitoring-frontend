import _meanBy from 'lodash/meanBy';
import { UPDATE_TIMER, UPDATE_INTERVAL, INTERVAL_LIMIT } from './constants';

const intervalsHash = {};
const createIntervalsHash = () => {
    const baseItemCount = 12;
    let currentInterval = INTERVAL_LIMIT; //5

    while (currentInterval > 0) {
        intervalsHash[currentInterval] = baseItemCount * (currentInterval - 1);
        currentInterval -= 1;
    }
};

createIntervalsHash();

const setStartIndex = interval => intervalsHash[interval];

export const currentAverage = (interval, uptimes) => {
    console.log(interval, 'interval');
    console.log(setStartIndex(interval), 'start');
    const currentUptimes = uptimes
        .toArray()
        .slice(setStartIndex(interval), uptimes.size);
    console.log(currentUptimes);
    return parseFloat(_meanBy(currentUptimes, u => parseFloat(u.y)).toFixed(2));
};
