import React from 'react';
import PropTypes from 'prop-types'
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

const InfoModal = ({ visible, toggleInfoModal }) => (
  <Modal isOpen={visible} toggle={toggleInfoModal}>
    <ModalHeader toggle={toggleInfoModal}>CSV file format specification</ModalHeader>
    <ModalBody>
      <h3>Data File Format</h3>
      <p>The file format is CSV (Comma Separated Values). Every data row specifies one work shift and split shifts are allowed. All timestamps are given in 15-minute increments.</p>
      <p>The first row is expected to be a header description row, and is omitted from processing.</p>
      <pre className="bg-light"><code>Person Name, Person ID, Date, Start, End</code></pre>

      <h3>Data Elements</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Field</th>
            <th>Expected data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Person Name</td>
            <td>Textual Name of the Employee</td>
          </tr>
          <tr>
            <td>Person ID</td>
            <td>Unique ID of the Employee</td>
          </tr>
          <tr>
            <td>Date</td>
            <td>DD.MM.YYYY, Work Shift Date</td>
          </tr>
          <tr>
            <td>Start</td>
            <td>HH:MM, Shift Start Time (24h)</td>
          </tr>
          <tr>
            <td>End</td>
            <td>HH:MM, Shift End Time (24h)</td>
          </tr>
        </tbody>
      </table>

      <p>Example Data Row:</p>
      <pre className="bg-light"><code>John Smith, 8, 26.3.2014, 13:15, 2:00</code></pre>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={toggleInfoModal}>Good to know</Button>{' '}
    </ModalFooter>
  </Modal>
)

InfoModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  toggleInfoModal: PropTypes.func.isRequired
}

export default InfoModal;
