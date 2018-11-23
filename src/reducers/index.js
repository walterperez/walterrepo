import { combineReducers } from 'redux'
import posts_reducer from './posts_reducer'
import activePost_reducer from './activePost_reducer'

export default combineReducers({
  ListWebs : posts_reducer,
  activePost: activePost_reducer
})
