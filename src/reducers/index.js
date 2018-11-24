import { combineReducers } from 'redux'
import posts_reducer from './posts_reducer'
import activePost_reducer from './activePost_reducer'
import hamburguer_reducer from './hamburguer_reducer'

export default combineReducers({
  Hamburguer: hamburguer_reducer,
  ListWebs : posts_reducer,
  activePost: activePost_reducer
})
