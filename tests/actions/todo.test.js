import { addTodo, setTodoState } from '../../src/actions/index'

describe('addTodo action', () => {
    it('should create an action that creates new todo', () => {
        const todo = {
            title: 'Hello World',
            body: 'Welcome to jackass!!'
        }
        const expectedAction = {
            type: 'ADD_TODO',
            todo: todo,
            state: 'DEFAULT',
            id: 0
        }
        expect(addTodo(todo)).toEqual(expectedAction)
    })

    it('should create an action that set state to `Done`', () => {
        const state = 'DONE'
        const expectedAction = {
            type: 'TODO_STATE',
            state: 'DONE'
        }
        expect(setTodoState(state)).toEqual(expectedAction)
    })
})