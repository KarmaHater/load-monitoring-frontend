import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Alert from 'react-alert';

import { updateThershold, updateAverageInterval } from './../../store/actions';
import {
    selectCurrentInterval,
    selectUptimes,
    selectCurrentTimerCount,
    selectAverage
} from './../../store/selectors';

import {
    TIME_LIMIT,
    UPTIME_FECTH_INTERVAL,
    AVERAGE_UPTIME_INTERVAL
} from '../../utils/constants';
import { ALERT_OPTIONS } from './alertOptions';
import { errorMessage, sucessMessage } from './alertMessages';

const message = (type, currentTimerCount, average) =>
    type === 'success'
        ? sucessMessage(average, currentTimerCount)
        : errorMessage(average, currentTimerCount);

const shouldFireAlert = (nextProps, currentTimerCount) =>
    nextProps.currentTimerCount !== currentTimerCount &&
    currentTimerCount % UPTIME_FECTH_INTERVAL === 0;

const nextAverageInterval = (nextProps, currentTimerCount) =>
    //every two minutes change the interval
    nextProps.currentTimerCount !== currentTimerCount &&
    currentTimerCount % AVERAGE_UPTIME_INTERVAL === 0;

class AlertContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorHasOccured: false
        };
    }

    componentWillReceiveProps(nextProps) {
        const { currentTimerCount } = this.props;

        if (shouldFireAlert(nextProps, currentTimerCount)) {
            this.fireAlert(currentTimerCount);
        }

        if (nextAverageInterval(nextProps, currentTimerCount)) {
            debugger;
            this.props.updateAverageInterval();
        }
    }

    fireAlert(time) {
        const { average } = this.props;
        this.props.updateThershold(average, time);

        if (average > 1) {
            this.fireHighLoadAlert();
        }

        if (this.state.errorHasOccured && average < 1) {
            this.fireRecoveryAlert();
        }
    }

    fireHighLoadAlert() {
        this.showAlert('error', this.props.average);
        this.setState({ errorHasOccured: true });
    }

    fireRecoveryAlert() {
        this.showAlert('success', this.props.average);
        this.setState({ errorHasOccured: false });
    }

    showAlert(type) {
        const { average, currentTimerCount } = this.props;
        if (this.alert) {
            this.alert.show(message(type, currentTimerCount, average), {
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
    average: selectAverage(state)
});

const mapDispatchToProps = dispatch => {
    return {
        updateThershold: bindActionCreators(updateThershold, dispatch),
        updateAverageInterval: bindActionCreators(updateAverageInterval, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlertContainer);
