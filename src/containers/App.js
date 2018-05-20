import React, { Component } from 'react';
import { connect } from 'react-redux'

import Main from '../components/Main';
import { toggleInfoModal, toggleActiveTab, fetchWageData, fetchTimeData, handleUpload } from '../actions'

const mapStateToProps = (state) => {
  return state
}

class App extends Component {
  componentWillMount() {
    this.props.fetchWageData();
    this.props.fetchTimeData();
  }

  render() {
    return (
      <Main {...this.props} />
    )
  }
}

export default connect(
  mapStateToProps,
  { toggleInfoModal, toggleActiveTab, fetchWageData, fetchTimeData, handleUpload }
)(App)