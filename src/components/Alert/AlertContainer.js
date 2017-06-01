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
        const { currentTimerCount } = this.props;

        if (
            nextProps.currentTimerCount !== currentTimerCount &&
            currentTimerCount % UPTIME_FECTH_INTERVAL === 0
        ) {
            this.fireAlert(nextProps.currentTimerCount);
        }

        if (
            nextProps.currentTimerCount !== currentTimerCount &&
            nextProps.currentTimerCount % TWO_MINUTES === 0
        ) {
            //every two minutes change the interval
            this.props.updateInterval();
        }
    }

    fireAlert(time) {
        const { average } = this.props;
        this.props.updateThershold(average, time);

        if (parseFloat(average) > 1) {
            this.fireHighLoadAlert();
        }

        if (this.state.errorHasOccured && parseFloat(average) < 1) {
            debugger;
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

    message(type) {
        const { currentTimerCount, average } = this.props;
        return type === 'success'
            ? sucessMessage(average, currentTimerCount)
            : errorMessage(average, currentTimerCount);
    }

    showAlert(type) {
        if (this.alert) {
            this.alert.show(this.message(this.props.average, type), {
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
    average: currentAverage(selectCurrentInterval(state), selectUptimes(state))
});

const mapDispatchToProps = dispatch => {
    return {
        updateThershold: bindActionCreators(updateThershold, dispatch),
        updateInterval: bindActionCreators(updateInterval, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlertContainer);
