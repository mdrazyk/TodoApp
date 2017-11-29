import { addTodo, setTodoState } from '../../src/actions/index'

describe('addTodo action', () => {
    it('should create an action that creates new todo', () => {
        const todo = {
            title: 'Hello World',
            body: 'Welcome to jackass!!'
        }
        const expectedAction = {
            id: 0,
            type: 'ADD_TODO',
            title: todo.title,
            body: todo.body
        }
        expect(addTodo(todo)).toEqual(expectedAction)
    })

    it('should create an action that set state to `Done`', () => {
        const id = 0
        const state = 'DONE'
        const expectedAction = {
            type: 'TODO_STATE',
            id: 0,
            state: 'DONE'
        }
        expect(setTodoState(id, state)).toEqual(expectedAction)
    })
})