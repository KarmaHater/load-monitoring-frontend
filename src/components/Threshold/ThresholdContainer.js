import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectThresholds } from './../../store/selectors';
import Threshold from './Threshold';

const ThresholdContainer = ({ thresholds }) =>
    <div>
        <h1>These are the thresholds:</h1>
        {thresholds.map((t, i) => <Threshold key={i} item={t} />)}
    </div>;

const mapStateToProps = state => ({
    thresholds: selectThresholds(state)
});

export default connect(mapStateToProps)(ThresholdContainer);
