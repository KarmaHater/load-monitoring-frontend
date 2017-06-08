import { selectUptimes, selectAverageInterval } from './';
import { getAverage } from './../../utils/average';
export const selectAverage = state =>
    getAverage(selectAverageInterval(state), selectUptimes(state));
