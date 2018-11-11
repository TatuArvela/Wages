import React from 'react';
import PropTypes from 'prop-types'
import { Card, CardBody, Table } from 'reactstrap';
import moment from 'moment';

import { monthNames } from '../strings';

const TimeReport = ({ timeData }) => {
  var dataRows = timeData.rows.map(function (row, i) {
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
    <Card className="col-sm-12 rounded-0 border-0">
      <CardBody className="px-1">
        {timeData.date &&
          <h2 className="text-center">Reported hours for {monthNames[timeData.date.getMonth()]} {timeData.date.getFullYear()}</h2>
        }
        <div className="report-container">
          <Table className='mt-4 table-striped'>
            <thead>
              <tr>
                <th>Employee Id</th>
                <th>Name</th>
                <th>Date</th>
                <th>Start time</th>
                <th>End time</th>
              </tr>
            </thead>
            <tbody>
              {dataRows}
            </tbody>
          </Table>
        </div>
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
