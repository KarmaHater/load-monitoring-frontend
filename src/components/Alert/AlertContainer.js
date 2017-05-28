import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Alert from 'react-alert';
import { updateThershold } from './../../store/actions';
import _meanBy from 'lodash/meanBy';

import {
    selectCurrentTimerCount,
    selectUptimes
} from './../../store/selectors';

// const AVERAGE_UPTIME_INTERVAL = 120000;
const AVERAGE_UPTIME_INTERVAL = 20000;

const averageUptimes = (currentTimerCount, uptimes) => {
    const currentUptimes = uptimes.toArray().slice(-2);
    return _meanBy(currentUptimes, u => parseFloat(u.y)).toFixed(2);
};

const ALERT_OPTIONS = {
    offset: 14,
    position: 'top right',
    time: 2000,
    transition: 'scale'
};

class AlertContainer extends Component {
    componentWillReceiveProps(nextProps) {
        if (
            nextProps.currentTimerCount !== this.props.currentTimerCount &&
            nextProps.currentTimerCount % AVERAGE_UPTIME_INTERVAL === 0
        ) {
            const { currentTimerCount, uptimes } = nextProps;
            const average = averageUptimes(currentTimerCount, uptimes);

            this.fireAlert(average, nextProps.currentTimerCount);
        }
    }

    fireAlert(average, time) {

        this.props.updateThershold(average, time);

        if (parseFloat(average) < 1) {
            this.showAlert('success', average);
        } else {
            this.showAlert('error', average);
        }
    }

    message(average) {
        const { currentTimerCount } = this.props;

        return `High load generated an alert - load = ${average}, triggered at ${currentTimerCount}`;
    }

    showAlert(type, average) {
        if (this.alert) {
            this.alert.show(this.message(average), {
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

const mapDispatchToProps = dispatch => {
    return {
        updateThershold: bindActionCreators(updateThershold, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlertContainer);
