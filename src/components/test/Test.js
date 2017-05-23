import React from 'react';
import styles from './TestStyles';
import { COLORS } from '../../styles/constants/colors.js';

const Test = () => {
    return (
        <div>
            <h1 className={styles.textColor(COLORS.yellow)}>Test</h1>
            <h1 className={styles.textColor(COLORS.blue)}>Test</h1>
            <h1 className={styles.textColor(COLORS.dark)}>Test</h1>
            <h1 className={styles.textColor(COLORS.orangeDark)}>Test</h1>
        </div>
    );
};

export default Test;
