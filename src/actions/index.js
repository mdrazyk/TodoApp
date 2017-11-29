let _id = 0
export const addTodo = (todo) => ({
  type: 'ADD_TODO',
  id: _id++,
  todo: todo,
  state: 'DEFAULT'
})

export const showModal = () => ({
  type: 'SHOW_MODAL',
  show: true
})

export const dontShowModal = () => ({
  type: 'DONT_SHOW_MODAL',
  show: false
})

export const setTodoState = (state) => ({
  type: 'TODO_STATE',
  state: state
})