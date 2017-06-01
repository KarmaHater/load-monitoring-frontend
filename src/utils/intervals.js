import _meanBy from 'lodash/meanBy';

// I feel like this could be smarter is it really hard coded for ten minutes.
// the array pop off sets of 120 depending on the interval

const x = interval => {
    const baseItems = 20;
    switch (interval) {
    case 1:
            //1nd two minutes
        return 0;
    case 2:
            //2nd two minutes
        return baseItems;
    case 3:
            //3nd two minutes
        return baseItems * 2;
    case 4:
            //4th two minutes
        return baseItems * 3;
    case 5:
            //5th two minutes
        return baseItems * 4;
    default:
            //first two minutes
        return [];
    }
};

export const currentAverage = (interval, uptimes) => {
    const start = x(interval, uptimes);
    const currentUptimes = uptimes.toArray().slice(start, uptimes.size);
    return _meanBy(currentUptimes, u => parseFloat(u.y)).toFixed(2);
};
