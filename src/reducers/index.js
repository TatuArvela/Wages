import { combineReducers } from 'redux'
import wageData from './wageData'
import timeData from './timeData'
import infoModal from './infoModal'
import tabs from './tabs'

export default combineReducers({
  wageData,
  timeData,
  infoModal,
  tabs
})