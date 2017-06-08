import { expect } from 'chai';
import {
    getAverage,
    createStartingIndexStore,
    startingIndexStore
} from './../src/utils/average';
import {
    firstIntervalUptimes,
    secondIntervalUptimes
} from './data/mockedUptimes';

describe('averge', () => {
    it('find the correct average when given interval of 1', () => {
        const interval = 1;
        expect(getAverage(interval, firstIntervalUptimes)).to.eql(1.22);
    });

    it('find the correct average when given interval other than 1', () => {
        const interval = 2;
        expect(getAverage(interval, secondIntervalUptimes)).to.eql(1.05);
    });

    it('builds correct store that includes start indexs', () => {
        const mockStartIntervalStore = {
            '1': 0,
            '2': 12,
            '3': 24,
            '4': 36,
            '5': 48
        };
        createStartingIndexStore();
        expect(startingIndexStore).to.eql(mockStartIntervalStore);
    });
});
