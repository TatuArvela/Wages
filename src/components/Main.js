import React from 'react';
import PropTypes from 'prop-types'

import Sidebar from './Sidebar';
import Reports from './Reports';
import InfoModal from './InfoModal';

const Main = ({ wageData, timeData, infoModal, tabs, toggleInfoModal, toggleActiveTab, handleUpload }) => (
  <div className='App container-flex'>
    <header className='box-shadow bg-success text-white col-md-12 mb-0 rounded-0 p-2 text-center fixed-top'>
      <h1>Wages</h1>
    </header>
    <div className='row m-0'>
      <Sidebar toggleInfoModal={toggleInfoModal} handleUpload={handleUpload} />
      <Reports wageData={wageData} timeData={timeData} tabs={tabs} toggleActiveTab={toggleActiveTab} />
      <InfoModal visible={infoModal.visible} toggleInfoModal={toggleInfoModal} handleUpload={handleUpload} />
    </div>
  </div>
)

Main.propTypes = {
  wageData: PropTypes.arrayOf(
    PropTypes.shape({
      personId: PropTypes.number.isRequired,
      personName: PropTypes.string.isRequired,
      wages: PropTypes.number.isRequired,
      monthAndYear: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  timeData: PropTypes.arrayOf(
    PropTypes.shape({
      personId: PropTypes.number.isRequired,
      personName: PropTypes.string.isRequired,
      date: PropTypes.number.isRequired,
      start: PropTypes.string.isRequired,
      end: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  infoModal: PropTypes.shape({
    visible: PropTypes.bool.isRequired
  }).isRequired,
  toggleInfoModal: PropTypes.func.isRequired,
  toggleActiveTab: PropTypes.func.isRequired,
  handleUpload: PropTypes.func.isRequired
}

export default Main;
