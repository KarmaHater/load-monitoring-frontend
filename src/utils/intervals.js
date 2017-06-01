import _meanBy from 'lodash/meanBy';

// I feel like this could be smarter is it really hard coded for ten minutes.
// the array pop off sets of 120 depending on the interval

const x = interval => {
    const baseItems = -120;
    // switch (interval) {
    // case 1:
    //         //2nd two minutes
    //     return baseItems;
    // case 2:
    //         //3nd two minutes
    //     return baseItems * 2;
    // case 3:
    //         //4nd two minutes
    //     return baseItems * 3;
    // case 4:
    //         //5th two minutes
    //     return baseItems * 4;
    // case 5:
    //         //5th two minutes
    //     return baseItems * 5;
    // default:
    //         //first two minutes
    //     return baseItems;
    // }
};

export const currentAverage = (interval, uptimes) => {
    const numToRemove = x(interval)
    const currentUptimes = uptimes.toArray()
    // .slice(numToRemove);
    return _meanBy(currentUptimes, u => parseFloat(u.y)).toFixed(2);
};
