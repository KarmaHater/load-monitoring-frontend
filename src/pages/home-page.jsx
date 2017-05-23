import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import DummyActions from "./../store/actions/dummy-actions.js";
import Test from "./../components/test/Test";

const HomePage = () => <Test />;

function mapStateToProps(state) {
  return {
    state: state
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dummyActions: bindActionCreators(DummyActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
