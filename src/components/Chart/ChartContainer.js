import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { nextUptime } from './../../store/actions';
import { selectUptime } from './../../store/selectors';
import Chart from './Chart';

class ChartContainer extends Component {
    componentDidMount() {
        const that = this.props;
        setInterval(function() {
            that.nextUptime();
            console.log(that.nextUptime())
        }, 3000);
    }
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

const mapDispatchToProps = (dispatch) => {
    return { nextUptime: bindActionCreators(nextUptime, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChartContainer);

// https://github.com/codesuki/react-d3-components#other-charts
