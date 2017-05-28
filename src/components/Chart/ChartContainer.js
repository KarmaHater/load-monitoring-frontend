import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectUptimes } from './../../store/selectors';
import Chart from './Chart';

class ChartContainer extends Component {
    render() {
        return (
            <div>
                <Chart data={this.props.uptimes} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    uptimes: selectUptimes(state)
});

export default connect(mapStateToProps)(ChartContainer);

// https://github.com/codesuki/react-d3-components#other-charts
