import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectThresholds } from './../../store/selectors';
import Threshold from './Threshold';

class ThresholdContainer extends Component {
    render() {
        return (
            <div>
                <h1>These are the thresholds:</h1>
                {this.props.thresholds.map((t, i) => (
                    <Threshold key={i} item={t} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    thresholds: selectThresholds(state) || [{ average: 0, time: 0 }]
});

export default connect(mapStateToProps)(ThresholdContainer);
