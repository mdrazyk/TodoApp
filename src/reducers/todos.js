import _ from 'lodash'
import { treeObjectStructure } from '../utils/treeObjectStructure'
const initialState = []

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        treeObjectStructure([state,
          {
            id: action.id,
            title: action.todo.title,
            body: action.todo.body
          }
        ])
      ]
    case 'TODO_STATE':
      return [
        ...state, [{
          state: action.state
        }]
      ]
    default:
      return state
  }
}

export default todos