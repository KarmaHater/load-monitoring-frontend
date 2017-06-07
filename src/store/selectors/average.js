import { selectUptimes, selectCurrentInterval } from './';
import { getAverage } from './../../utils/average';
export const selectAverage = state =>
    getAverage(selectCurrentInterval(state), selectUptimes(state));
