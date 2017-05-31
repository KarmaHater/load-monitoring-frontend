import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectThresholds } from './../../store/selectors';
import Threshold from './Threshold';
import styles from './ThresholdStyles';

class ThresholdContainer extends Component {
    render() {
        return (
            <div>
                <h1>These are the thresholds:</h1>
                {this.props.thresholds.map(t => <Threshold item={t} />)}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    thresholds: selectThresholds(state) || [{ average: 1, time: 2 }]
});

export default connect(mapStateToProps)(ThresholdContainer);
