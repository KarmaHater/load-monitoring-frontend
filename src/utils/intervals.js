import _meanBy from 'lodash/meanBy';
import { UPDATE_TIMER, UPDATE_INTERVAL, INTERVAL_LIMIT } from './constants';

const baseItems = 20;
const x = {};

let condition = INTERVAL_LIMIT; //5

while (condition > 0) {
    x[condition] = baseItems * (condition - 1)
    condition -= 1;
}

export const currentAverage = (interval, uptimes) => {
    console.log(interval,  "interval")
    const start = x[interval];
    console.log(start, 'start')
    const currentUptimes = uptimes.toArray().slice(start, uptimes.size -1);
    return _meanBy(currentUptimes, u => parseFloat(u.y)).toFixed(2);
};
