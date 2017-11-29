import { treeObjectStructure } from '../utils/treeObjectStructure'
const initialState = []

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        treeObjectStructure([state,
          {
            id: action.id,
            title: action.title,
            body: action.body
          }
        ])
      ]
    default:
      return state
  }
}