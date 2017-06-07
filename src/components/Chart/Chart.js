import React from 'react';
import { AreaChart } from 'react-d3-components';
import styles from './ChartStyles'

export default ({ data }) => {
    if (data.length  === 0) return <h1>No uptimes yet.</h1>;

    const chartData = [
        {
            label: 'somethingA',
            values: [...data, {x: 0, y: 0}]
        }
    ];
    return (
        <div>
            <AreaChart
                data={chartData}
                width={800}
                height={400}
                margin={styles.chartSyles}
            />
        </div>
    );
};
