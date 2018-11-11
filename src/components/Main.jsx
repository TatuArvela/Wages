import React from 'react';
import PropTypes from 'prop-types'

import Sidebar from './Sidebar';
import Reports from './Reports';
import InfoModal from './InfoModal';

const Main = ({ date, changeMonth, changeYear, fetchAllData, wageData, timeData, infoModal, tabs, toggleInfoModal, toggleActiveTab, handleUpload }) => (
  <div className="App container-flex bg-light">
    <header className="bg-success text-white col-md-12 mb-0 rounded-0 p-2 text-center fixed-top">
      <h1>Wages</h1>
    </header>
    <div className="row d-block d-lg-flex m-0">
      <Sidebar toggleInfoModal={toggleInfoModal} handleUpload={handleUpload} />
      <Reports date={date} wageData={wageData} timeData={timeData} tabs={tabs} toggleActiveTab={toggleActiveTab} changeMonth={changeMonth} changeYear={changeYear} fetchAllData={fetchAllData} />
      <InfoModal visible={infoModal.visible} toggleInfoModal={toggleInfoModal} handleUpload={handleUpload} />
    </div>
  </div>
)

Main.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  changeMonth: PropTypes.func.isRequired,
  changeYear: PropTypes.func.isRequired,
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
