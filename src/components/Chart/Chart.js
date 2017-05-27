import React from 'react';
import { AreaChart } from 'react-d3-components';

export default ({ data }) => {
    const chartData = [
        {
            label: 'somethingA',
            values: data.toArray() || []
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
            ;
        </div>
    );
};
