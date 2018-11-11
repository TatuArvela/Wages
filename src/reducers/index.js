import { combineReducers } from 'redux'
import date from './date'
import infoModal from './infoModal'
import tabs from './tabs'
import timeData from './timeData'
import wageData from './wageData'

export default combineReducers({
  date,
  infoModal,
  tabs,
  timeData,
  wageData
})