import React from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'
import classNames from 'classnames'

import WageReport from '../components/WageReport';
import TimeReport from '../components/TimeReport';

const Reports = ({ wageData, timeData, tabs, toggleActiveTab }) => {
  return (
    <div className='col-lg-9 col-md-12 p-3'>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classNames({ active: tabs.activeTab === '1' })}
            onClick={() => { toggleActiveTab('1') }}
          >
            Wage Data
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classNames({ active: tabs.activeTab === '2' })}
            onClick={() => { toggleActiveTab('2') }}
          >
            Time Data
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={tabs.activeTab} className='border-left border-right border-bottom'>
        <TabPane tabId='1'>
          <WageReport wageData={wageData} />
        </TabPane>
        <TabPane tabId='2'>
          <TimeReport timeData={timeData} />
        </TabPane>
      </TabContent>
    </div>
  )
}

export default Reports;

