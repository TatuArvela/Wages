import React from 'react';
import PropTypes from 'prop-types'
import { Button, Card, CardBody } from 'reactstrap';
import ReactFileReader from 'react-file-reader';
import FileDrop from 'react-file-drop';

const Sidebar = ({ toggleInfoModal, handleUpload }) => (
  <div className="box-shadow col-lg-3 col-md-12 p-0 border-right border-bottom">
    <Card className="box-shadow p-5 m-4 rounded-0 border-0 bg-primary text-white">
      <div>
        <h2>A simple worklog processor</h2>
        <p>With Wages, you can import the working time data of your employees and calculate their monthly wages automatically.</p>
      </div>
    </Card>
    <Card className="p-5 rounded-0 border-0">
      <CardBody className="p-0">
        <div>
          <h2>Import data</h2>
          <p>Time data can be imported in a predefined CSV format</p>
          <Button className="box-shadow btn btn-info col-md-12 p-3 border-0 rounded-0" onClick={toggleInfoModal}>
            <i className="material-icons">info</i><br />
            View file format specification
          </Button>
        </div>
        <div className="mt-4">
          <FileDrop onDrop={handleUpload}>
            <ReactFileReader handleFiles={handleUpload} fileTypes={'.csv'} multipleFiles={true}>
              <Button color="primary" className="box-shadow col-md-12 data-upload p-3 pt-5 pb-5 text-center rounded-0 border-0">
                <i className="material-icons">cloud_upload</i><br />
                <span>Choose a file or drag it here</span>
              </Button>
            </ReactFileReader>
          </FileDrop>
        </div>
      </CardBody>
    </Card>
  </div>
)

Sidebar.propTypes = {
  toggleInfoModal: PropTypes.func.isRequired
}

export default Sidebar;
