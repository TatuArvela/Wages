import React from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'
import classNames from 'classnames'

import WageReport from './WageReport';
import TimeReport from './TimeReport';
import DateSelector from './DateSelector';

const Reports = ({ date, wageData, timeData, tabs, toggleActiveTab, changeMonth, changeYear, fetchAllData }) => {
  return (
    <div className="report col-lg-9 col-md-12 p-2 p-md-5">
      <div className="d-md-none pt-2 pb-3">
        <div className="w-100">
          <DateSelector date={date} changeMonth={changeMonth} changeYear={changeYear} fetchAllData={fetchAllData}/>
        </div>
      </div>
      <div className="d-flex">
        <Nav tabs className="w-100 d-flex d-sm-inline-block">
          <NavItem className="w-50 d-sm-inline-block pr-md-1">
            <NavLink
              className={"font-weight-bold text-center py-3 border-bottom-0 " + classNames({ active: tabs.activeTab === '1' })}
              onClick={() => { toggleActiveTab('1') }}
            >
              Monthly wages
            </NavLink>
          </NavItem>
          <NavItem className="w-50 d-sm-inline-block pr-md-1">
            <NavLink
              className={"font-weight-bold text-center py-3 border-bottom-0 " + classNames({ active: tabs.activeTab === '2' })}
              onClick={() => { toggleActiveTab('2') }}
            >
              Reported hours
            </NavLink>
          </NavItem>
        </Nav>
        <div className="d-none d-lg-block w-25 border-bottom"></div>
        <div className="w-100 border-bottom d-none d-md-block p-2">
          <DateSelector date={date} changeMonth={changeMonth} changeYear={changeYear} fetchAllData={fetchAllData}/>
        </div>
      </div>
      <TabContent activeTab={tabs.activeTab} className="border-left border-right border-bottom">
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

