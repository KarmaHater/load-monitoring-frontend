import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Alert from 'react-alert';
import { selectCurrentTimerCount } from './../../store/selectors';

class AlertContainer extends Component {
    alertOptions = {
        offset: 14,
        position: 'top right',
        time: 5000,
        transition: 'scale'
    };

    componentDidMount() {
        this.showAlert();
    }

    showAlert() {
        this.msg.show('Some text or component', {
            time: 2000,
            type: 'error'
        });
    }

    render() {
        return (
            <div>
                <Alert ref={a => (this.msg = a)} {...this.alertOptions} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentTimerCount: selectCurrentTimerCount(state)
});

export default connect(mapStateToProps)(AlertContainer);

// https://github.com/codesuki/react-d3-components#other-charts
