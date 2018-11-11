import React from 'react';
import PropTypes from 'prop-types'
import { Button, Card } from 'reactstrap';
import ReactFileReader from 'react-file-reader';
import FileDrop from 'react-file-drop';

const Sidebar = ({ toggleInfoModal, handleUpload }) => (
  <div className="col-lg-3 col-md-12 bg-white sidebar p-2 p-md-3">
    <div className="row">
      <FileDrop onDrop={handleUpload} className="col-sm-6 col-lg-12">
        <ReactFileReader handleFiles={handleUpload} fileTypes={'.csv'} multipleFiles={true}>
          <Button outline={true} color="primary" className="data-upload p-3 w-100">
            <i className="material-icons">cloud_upload</i><br />
            <span className="font-weight-bold">Import data</span>
          </Button>
        </ReactFileReader>
      </FileDrop>
      <div className="col-sm-6 col-lg-12">
        <Button outline color="info" className="p-3 mt-3 mt-sm-0 mt-lg-3 w-100" onClick={toggleInfoModal}>
          <i className="material-icons">info</i><br />
          <span className="font-weight-bold">View format specification</span>
        </Button>
      </div>
    </div>
    <Card className="p-4 mt-3 rounded-0 border-0 bg-primary text-white text-left">
      <div>
        <h3>A simple worklog processor</h3>
        <p>With Wages, you can import the working time data of your employees and calculate their monthly wages automatically.</p>
      </div>
    </Card>
  </div>
)

Sidebar.propTypes = {
  toggleInfoModal: PropTypes.func.isRequired
}

export default Sidebar;
