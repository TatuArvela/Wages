import React from 'react';
import PropTypes from 'prop-types'
import { Card, CardBody, Table } from 'reactstrap';

import { monthNames } from '../strings'

const WageReport = ({ wageData }) => {
  const date = new Date();

  const dataRows = wageData.map(function(row, index) {
    return (
      <tr key={index}>
        <td>{row.personId}</td>
        <td>{row.personName}</td>
        <td>{row.wages}</td>
      </tr>
    );
  });

  return (
    <Card className='col-sm-12 rounded-0 border-0'>
      <CardBody>
        <div>
          <h2>Monthly wages for {monthNames[date.getMonth()]} {date.getFullYear()}</h2>
          <p className="text-danger">Nothing is calculated yet - this is just test data</p>
          <p>Calculated wages for all the hours reported</p>
        </div>
        <Table className='mt-4 table-striped table-bordered'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Earned wages (USD)</th>
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

WageReport.propTypes = {
  wageData: PropTypes.arrayOf(
    PropTypes.shape({
      personId: PropTypes.number.isRequired,
      personName: PropTypes.string.isRequired,
      wages: PropTypes.number.isRequired,
      monthAndYear: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
}

export default WageReport;
