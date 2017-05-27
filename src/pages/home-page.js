import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ChartContainer from '../components/Chart/ChartContainer';
import upstreamData from '../store/data/mockedUpstreamData'

const HomePage = () => (
    <div>
        <ChartContainer />
    </div>
);

export default HomePage;

// https://github.com/codesuki/react-d3-components#other-charts
