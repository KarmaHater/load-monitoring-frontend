import React from 'react';
import styles from './ThresholdStyles';

const Threshold = ({ item }) => {
    return (
        <div className={styles.thresholdContainer(item.average)}>
            The threshold average at
            {' '}
            {item.time / 1000}
            {' '}
            is
            {' '}
            {item.average}
        </div>
    );
};

export default Threshold;
