import { combineReducers } from 'redux'
import todos from './todos'
import modal from './modal'

const todoApp = combineReducers({
  todos,
  modal
})

export default todoApp
