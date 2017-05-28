import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { nextUptime, updateTimer } from './../../store/actions';
import { selectCurrentTimerCount } from './../../store/selectors';
import Timer from './Timer';

const TIME_LIMIT = 600000;
const TIMER_INTERVAL = 10000;

class TimerContainer extends Component {
    componentDidMount() {
        this.sinterval = setInterval(() => this.uptimeTimer(), 1000);
    }

    componentWillMount() {
        if (this.props.currentTimerCount === TIME_LIMIT) {
            clearInterval(this.interval);
        }
    }

    uptimeTimer() {
        if (this.props.currentTimerCount % TIMER_INTERVAL === 0) {
            this.props.nextUptime();
            this.props.updateTimer();
        } else {
            this.props.updateTimer();
        }
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
