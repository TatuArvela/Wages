import csvtojson from 'csvtojson';
import moment from 'moment';
import {
  timesRef,
  wagesRef
} from '../config/firebase';

import {
  SET_WAGE_DATA,
  SET_TIME_DATA,
  TOGGLE_INFO_MODAL,
  TOGGLE_ACTIVE_TAB,
  CHANGE_MONTH,
  CHANGE_YEAR
} from './types';
import {
  csvHeaders
} from '../strings'

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

export const changeMonth = (month) => {
  return function (dispatch) {
    dispatch({
      type: CHANGE_MONTH,
      payload: month
    })
  }
}

export const changeYear = (year) => {
  return function (dispatch) {
    dispatch({
      type: CHANGE_YEAR,
      payload: year
    })
  }
}

export const addWageData = newWageData => async dispatch => {
  wagesRef.push().set(newWageData);
};

export const fetchAllData = (date) => {
  return function (dispatch) {
    dispatch(fetchTimeData(date));
    dispatch(fetchWageData(date));
  }
}

export const fetchWageData = (date) => async dispatch => {
  const momentDate = moment(date).format('YYYY-M');

  wagesRef.orderByChild('yearAndMonth').equalTo(momentDate).on('value', snapshot => {
    if (snapshot.val() != null) {
      var result = Object.keys(snapshot.val()).map(function (key) {
        return snapshot.val()[key];
      });
      dispatch({
        type: SET_WAGE_DATA,
        payload: {
          date: date,
          rows: result
        }
      });
    }
    else {
      dispatch({
        type: SET_WAGE_DATA,
        payload: {
          date: date
        }
      });
    }
  });
};

export const fetchTimeData = (date) => async dispatch => {
  const momentDate = moment(date);
  const startDate = momentDate.startOf('month').valueOf();
  const endDate = momentDate.endOf('month').valueOf();

  timesRef.orderByChild('date').startAt(startDate).endAt(endDate).on('value', snapshot => {
    if (snapshot.val() != null) {
      var result = Object.keys(snapshot.val()).map(function (key) {
        return snapshot.val()[key];
      });
      dispatch({
        type: SET_TIME_DATA,
        payload: {
          date: date,
          rows: result
        }
      });
    }
    else {
      dispatch({
        type: SET_TIME_DATA,
        payload: {
          date: date
        }
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

  reader.onload = function (e) {
    csvtojson({
        checkColumn: true,
        noheader: false,
        headers: csvHeaders,
        colParser: {
          'personId': 'number',
          'date': (date) => {
            if (moment(date, 'D.M.YYYY').isValid()) {
              var parsedDate = moment(date, 'D.M.YYYY');
              return parsedDate.toDate().valueOf();
            }
            return undefined;
          }
        }
      })
      .fromString(reader.result)
      .on('error', (err) => {
        console.log(err)
      })
      .on('end_parsed', (jsonArrObj) => {
        jsonArrObj.forEach(row => {
          timesRef.push(row);
        });
      })
  }
  reader.readAsText(file);
}