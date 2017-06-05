import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { nextUptime, updateTimer } from './../../store/actions';
import { selectCurrentTimerCount } from './../../store/selectors';
import Timer from './Timer';
import { RUN_TIME_LIMIT, UPTIME_FECTH_INTERVAL } from '../../utils/constants';

class TimerContainer extends Component {
    componentDidMount() {
        this.interval = setInterval(::this.uptimeTimer, 1000);
    }

    componentWillMount() {
        if (this.props.currentTimerCount === RUN_TIME_LIMIT) {
            clearInterval(this.interval);
        }
    }

    uptimeTimer() {
        if (this.props.currentTimerCount % UPTIME_FECTH_INTERVAL === 0) {
            this.props.nextUptime();
            this.props.updateTimer();
        }

        this.props.updateTimer();
    }

    render() {
        return <Timer currentTimerCount={this.props.currentTimerCount} />;
    }
}

const mapStateToProps = state => ({
    currentTimerCount: selectCurrentTimerCount(state)
});

const mapDispatchToProps = dispatch => {
    return {
        nextUptime: bindActionCreators(nextUptime, dispatch),
        updateTimer: bindActionCreators(updateTimer, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TimerContainer);
