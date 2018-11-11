import React from 'react';
import { monthNames } from '../strings';

const DateSelector = ({ date, changeMonth, changeYear, fetchAllData }) => {
  return (
    <div className="input-group">
      <select className="btn btn-outline-primary form-control font-weight-bold" id="month" style={{ 'MozAppearance': 'none' }} value={date.getMonth()} onChange={event => changeMonth(event.target.value)}>
        {monthNames.map((value, index) => {
          return <option value={index} key={index}>{value}</option>
        })}
      </select>
      <input type="number" className="btn btn-outline-primary form-control font-weight-bold text-center" min="1900" max="2100" step="1" value={date.getFullYear()} onChange={event => changeYear(event.target.value)}></input>
      <button className="btn btn-success form-control font-weight-bold" onClick={event => fetchAllData(date)}>Fetch</button>
    </div>
  );
}

export default DateSelector;
