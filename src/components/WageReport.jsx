import React from 'react';
import PropTypes from 'prop-types'
import { Card, CardBody, Table } from 'reactstrap';

import { monthNames } from '../strings'

const WageReport = ({ wageData }) => {
  const dataRows = wageData.rows.map(function (row, index) {
    return (
      <tr key={index}>
        <td>{row.personId}</td>
        <td>{row.personName}</td>
        <td>{row.wages}</td>
      </tr>
    );
  });

  return (
    <Card className="col-sm-12 rounded-0 border-0">
      <CardBody className="px-1">
        {wageData.date &&
          <h2 className="text-center">Monthly wages for {monthNames[wageData.date.getMonth()]} {wageData.date.getFullYear()}</h2>
        }
        <div className="report-container">
          <Table className='mt-4 table-striped'>
            <thead>
              <tr>
                <th>Employee Id</th>
                <th>Name</th>
                <th>Earned wages (USD)</th>
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

WageReport.propTypes = {
  wageData: PropTypes.arrayOf(
    PropTypes.shape({
      personId: PropTypes.number.isRequired,
      personName: PropTypes.string.isRequired,
      wages: PropTypes.number.isRequired,
      yearAndMonth: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
}

export default WageReport;
