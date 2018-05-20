import csvtojson from 'csvtojson';
import moment from 'moment';
import { timesRef, wagesRef } from '../config/firebase';

import { FETCH_WAGE_DATA, FETCH_TIME_DATA, TOGGLE_INFO_MODAL, TOGGLE_ACTIVE_TAB } from './types';
import { csvHeaders } from '../strings'

export const toggleInfoModal = () => {
  return function (dispatch) {
    dispatch({
      type: TOGGLE_INFO_MODAL
    })
  }
}

export const toggleActiveTab = (tab) => {
  return function (dispatch) {
    dispatch({
      type: TOGGLE_ACTIVE_TAB,
      payload: tab
    })
  }
}

export const addWageData = newWageData => async dispatch => {
  wagesRef.push().set(newWageData);
};

export const fetchWageData = () => async dispatch => {
  wagesRef.on('value', snapshot => {
    if (snapshot.val() != null) {
      var result = Object.keys(snapshot.val()).map(function(key) {
        return snapshot.val()[key];
      });
      dispatch({
        type: FETCH_WAGE_DATA,
        payload: result
      });
    }
  });
};

export const fetchTimeData = () => async dispatch => {
  var startDate = moment().startOf('month').valueOf();
  var endDate = moment().endOf('month').valueOf();

  timesRef.orderByChild("date").startAt(startDate).endAt(endDate).on('value', snapshot => {
    if (snapshot.val() != null) {
      var result = Object.keys(snapshot.val()).map(function(key) {
        return snapshot.val()[key];
      });
      dispatch({
        type: FETCH_TIME_DATA,
        payload: result
      });
    }
  });
};

export const handleUpload = files => dispatch => {
  Array.from(files).forEach(file => {
    parseFileAndSaveData(file);
  })
}

const parseFileAndSaveData = file => {
  const reader = new FileReader();

  reader.onload = function(e) {
    csvtojson({
      noheader: true,
      headers: csvHeaders,
      colParser: {
        'personId': 'number',
        'date': (date) => { return moment(date, 'D.M.YYYY').toDate().valueOf() },
      }
    })
    .fromString(reader.result)
    .on('end_parsed',(jsonArrObj) => {
      jsonArrObj.forEach(row => {
        timesRef.push(row);
      });
    })
  }
  reader.readAsText(file);
}