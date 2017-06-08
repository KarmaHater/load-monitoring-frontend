import { expect } from 'chai';
import {
    shouldFireAlert,
    nextAverageInterval
} from './../src/components/Alert/utils/helpers';
import {
    AVERAGE_UPTIME_INTERVAL,
    UPTIME_FECTH_INTERVAL
} from './../src/utils/constants';

const ONE_SECOND = 1000;

describe('alerts', () => {
    it('should run fire alert logic', () => {
        const nextProps = {
            currentTimerCount: UPTIME_FECTH_INTERVAL - ONE_SECOND
        };

        const currentTimerCount = UPTIME_FECTH_INTERVAL;
        expect(shouldFireAlert(nextProps, currentTimerCount)).to.eql(true);
    });

    it('should not run fire alert logic', () => {
        const nextProps = {
            currentTimerCount: 8000
        };

        const currentTimerCount = 9000;
        expect(shouldFireAlert(nextProps, currentTimerCount)).to.eql(false);
    });

    it('should update current average interval', () => {
        const nextProps = {
            currentTimerCount: AVERAGE_UPTIME_INTERVAL - ONE_SECOND
        };

        const currentTimerCount = AVERAGE_UPTIME_INTERVAL;
        expect(nextAverageInterval(nextProps, currentTimerCount)).to.eql(true);
    });

    it('should not update current average interval', () => {
        const nextProps = {
            currentTimerCount: 120000
        };

        const currentTimerCount = 121000;
        expect(nextAverageInterval(nextProps, currentTimerCount)).to.eql(false);
    });
});
