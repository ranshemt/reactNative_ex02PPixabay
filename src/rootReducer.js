import { combineReducers } from 'redux'
import ToggleViewReducer from './Components/ToggleView/ToggleView.red'
import SearchBarReducer from './Components/SearchBar/SearchBar.red'

export default combineReducers({
  ToggleReducer: ToggleViewReducer,
  SearchReducer: SearchBarReducer
})
