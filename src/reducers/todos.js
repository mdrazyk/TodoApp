const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          allTodos: action.addTodo
        }
      ]
    default:
      return state
  }
}

export default todos