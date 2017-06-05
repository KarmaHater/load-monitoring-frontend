import React from 'react';
import styles from './ThresholdStyles';

const Threshold = ({ item }) => {
    return (
        <div className={styles.thresholdContainer(item.average)}>
            The threshold for past 2 minutes
            {' '}
            {item.time / 1000}
            {' '}
            seconds was
            {' '}
            {item.average}
        </div>
    );
};

export default Threshold;
