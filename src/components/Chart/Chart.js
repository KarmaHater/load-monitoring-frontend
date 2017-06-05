import React from 'react';
import { AreaChart } from 'react-d3-components';

export default ({ data }) => {
    if (data.length  === 0) return <h1>No uptimes yet.</h1>;

    const chartData = [
        {
            label: 'somethingA',
            values: [{x: 0, y: 0}].concat(data)
        }
    ];
    return (
        <div>
            <AreaChart
                data={chartData}
                width={800}
                height={400}
                margin={{ top: 10, bottom: 50, left: 50, right: 10 }}
            />
        </div>
    );
};
