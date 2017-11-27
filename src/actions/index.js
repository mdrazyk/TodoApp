export const addTodo = (addTodo) => ({
    type: 'ADD_TODO',
    addTodo: addTodo
  })

export const showModal = () => ({
  type: 'SHOW_MODAL',
  show: true
})

export const dontShowModal = () => ({
  type: 'DONT_SHOW_MODAL',
  show: false
})
