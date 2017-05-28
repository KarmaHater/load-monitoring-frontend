import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUptime } from './../../store/selectors';
import Chart from './Chart';

class ChartContainer extends Component {
    render() {
        return (
            <div>
                <Chart data={this.props.uptime} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    uptime: selectUptime(state)
});

export default connect(mapStateToProps)(ChartContainer);

// https://github.com/codesuki/react-d3-components#other-charts
