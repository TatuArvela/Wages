import React, { Component } from 'react';
import { connect } from 'react-redux'

import Main from '../components/Main';
import { toggleInfoModal, toggleActiveTab, fetchAllData, handleUpload, changeMonth, changeYear } from '../actions'

const mapStateToProps = (state) => {
  return state
}

class App extends Component {
  componentWillMount() {
    this.props.fetchAllData(this.props.date);
  }

  render() {
    return (
      <Main {...this.props} />
    )
  }
}

export default connect(
  mapStateToProps,
  { toggleInfoModal, toggleActiveTab, fetchAllData, handleUpload, changeMonth, changeYear }
)(App)