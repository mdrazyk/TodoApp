let _id = 0
export const addTodo = (todo) => ({
  type: 'ADD_TODO',
  id: _id++,
  title: todo.title,
  body: todo.body
})

export const showModal = () => ({
  type: 'SHOW_MODAL',
  show: true
})

export const dontShowModal = () => ({
  type: 'DONT_SHOW_MODAL',
  show: false
})

export const setTodoState = (id, state) => ({
  type: 'TODO_STATE',
  id: id,
  state: state
})