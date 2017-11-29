import { combineReducers } from 'redux'
import { todos } from './todos'
import { modal } from './modal'
import { todoState } from './todoState'

const todoApp = combineReducers({
  todos,
  todoState,
  modal
})

export default todoApp
