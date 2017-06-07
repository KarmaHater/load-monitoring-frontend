import { expect } from 'chai';
import { getAverage } from './../src/utils/average';
import mockedUptimes from './data/mockedUptimes';

describe('averge', () => {
    it('find the correct average when given interval of 1', () => {
        const interval = 1;
        expect(getAverage(interval, mockedUptimes)).to.eql(1.16);
    });

    it('find the correct average when given interval other than 1', () => {
        const interval = 2;
        expect(getAverage(interval, mockedUptimes)).to.eql(1.05);
    });
});
