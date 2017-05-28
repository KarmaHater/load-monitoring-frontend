import React, { Component } from 'react';
import { connect } from 'react-redux';
import Alert from 'react-alert';
import _meanBy from 'lodash/meanBy';
import {
    selectCurrentTimerCount,
    selectUptimes
} from './../../store/selectors';

// const AVERAGE_UPTIME_INTERVAL = 120000;
const AVERAGE_UPTIME_INTERVAL = 15000;

const ALERT_OPTIONS = {
    offset: 14,
    position: 'top right',
    time: 5000,
    transition: 'scale'
};

class AlertContainer extends Component {
    componentWillReceiveProps(nextProps) {
        if (
            nextProps.currentTimerCount !== this.props.currentTimerCount &&
            nextProps.currentTimerCount % AVERAGE_UPTIME_INTERVAL === 0
        ) {
            this.showAlert('error');
        }
    }

    message() {
        const { currentTimerCount, uptimes } = this.props;
        const average = _meanBy(uptimes.toArray(), u => u.y).toFixed(2);
        console.log(average, "this is the average")
        return `High load generated an alert - load = ${average}, triggered at ${currentTimerCount}`;
    }

    showAlert(type) {
        if (this.alert) {
            this.alert.show(this.message(), {
                time: 4000,
                type
            });
        }
    }

    render() {
        return <Alert ref={a => (this.alert = a)} {...ALERT_OPTIONS} />;
    }
}

const mapStateToProps = state => ({
    currentTimerCount: selectCurrentTimerCount(state),
    uptimes: selectUptimes(state)
});

export default connect(mapStateToProps)(AlertContainer);

// https://github.com/codesuki/react-d3-components#other-charts
