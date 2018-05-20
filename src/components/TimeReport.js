import React from 'react';
import PropTypes from 'prop-types'
import { Card, CardBody, Table } from 'reactstrap';
import moment from 'moment';

import { monthNames } from '../strings';

const TimeReport = ({ timeData }) => {
  const date = new Date();

  var dataRows = timeData.map(function (row, i) {
    return (
      <tr key={i}>
        <td>{row.personId}</td>
        <td>{row.personName}</td>
        <td>{moment(row.date).format('D.M.YYYY')}</td>
        <td>{row.start}</td>
        <td>{row.end}</td>
      </tr>
    );
  });

  return (
    <Card className='col-sm-12 rounded-0 border-0'>
      <CardBody>
        <div>
          <h2>Reported hours for {monthNames[date.getMonth()]} {date.getFullYear()}</h2>
          <p>Table of all reported hours</p>
        </div>
        <Table className='mt-4 table-striped table-bordered'>
          <thead>
            <tr>
              <th>Person id</th>
              <th>Person name</th>
              <th>Date</th>
              <th>Start time</th>
              <th>End time</th>
            </tr>
          </thead>
          <tbody>
            {dataRows}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
}

TimeReport.propTypes = {
  timeData: PropTypes.arrayOf(
    PropTypes.shape({
      personId: PropTypes.number.isRequired,
      personName: PropTypes.string.isRequired,
      date: PropTypes.number.isRequired,
      start: PropTypes.string.isRequired,
      end: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
}

export default TimeReport;
