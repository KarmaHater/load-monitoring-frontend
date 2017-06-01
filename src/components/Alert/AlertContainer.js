import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Alert from 'react-alert';

import { updateThershold, updateInterval } from './../../store/actions';
import {
    selectCurrentInterval,
    selectUptimes,
    selectCurrentTimerCount
} from './../../store/selectors';

import { currentAverage } from '../../utils/intervals';
import {
    TIME_LIMIT,
    UPTIME_FECTH_INTERVAL,
    TWO_MINUTES
} from '../../utils/constants';
import { ALERT_OPTIONS } from './alertOptions';
import { errorMessage, sucessMessage } from './alertMessages';

class AlertContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorHasOccured: false
        };
    }

    componentWillReceiveProps(nextProps) {
        const { currentInterval, uptimes, currentTimerCount } = nextProps;

        const average = currentAverage(currentInterval, uptimes);

        if (
            nextProps.currentTimerCount !== this.props.currentTimerCount &&
            this.props.currentTimerCount % UPTIME_FECTH_INTERVAL === 0
        ) {
            this.fireAlert;
            average, nextProps.currentTimerCount;
        }

        if (
            nextProps.currentTimerCount !== this.props.currentTimerCount &&
            nextProps.currentTimerCount % TWO_MINUTES === 0
        ) {
            //every two minutes change the interval
            this.props.updateInterval();
        }
    }

    fireAlert(average, time) {
        this.props.updateThershold(average, time);

        if (parseFloat(average) > 1) {
            this.fireErrorAlert();
        }

        if (this.state.errorHasOccured && parseFloat(average) < 1) {
            this.fireRecoverAlert();
        }
    }

    fireErrorAlert() {
        this.showAlert('error', average);
        this.setState({ errorHasOccured: true });
    }

    fireRecoverAlert() {
        this.showAlert('success', average);
        this.setState({ errorHasOccured: false });
    }

    message(average, type) {
        const { currentTimerCount } = this.props;
        return type === 'success'
            ? sucessMessage(average, currentTimerCount)
            : errorMessage(average, currentTimerCount);
    }

    showAlert(type, average) {
        if (this.alert) {
            this.alert.show(this.message(average, type), {
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
    currentInterval: selectCurrentInterval(state),
    currentTimerCount: selectCurrentTimerCount(state),
    uptimes: selectUptimes(state)
});

const mapDispatchToProps = dispatch => {
    return {
        updateThershold: bindActionCreators(updateThershold, dispatch),
        updateInterval: bindActionCreators(updateInterval, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlertContainer);
