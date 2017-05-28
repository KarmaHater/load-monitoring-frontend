import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AlertContainer from '../components/Alert/AlertContainer';
import ChartContainer from '../components/Chart/ChartContainer';
import TimerContainer from '../components/Timer/TimerContainer';

const HomePage = () => (
    <div>
        <ChartContainer />
        <TimerContainer />
        <AlertContainer />
    </div>
);

export default HomePage;

// https://github.com/codesuki/react-d3-components#other-charts
