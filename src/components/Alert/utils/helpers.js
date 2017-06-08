import {
    UPTIME_FECTH_INTERVAL,
    AVERAGE_UPTIME_INTERVAL
} from '../../../utils/constants';

export const shouldFireAlert = (nextProps, currentTimerCount) =>
    nextProps.currentTimerCount !== currentTimerCount &&
    currentTimerCount % UPTIME_FECTH_INTERVAL === 0;

export const nextAverageInterval = (nextProps, currentTimerCount) =>
    //every two minutes change the interval
    nextProps.currentTimerCount !== currentTimerCount &&
    currentTimerCount % AVERAGE_UPTIME_INTERVAL === 0;
