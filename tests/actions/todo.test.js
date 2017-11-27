import { addTodo } from '../../src/actions/index'

describe('addTodo action', () => {
    it('should create an action that creates new todo', () => {
        const todo = {
            title: 'Hello World',
            body: 'Welcome to jackass!!'
        }
        const expectedAction = {
            type: 'ADD_TODO',
            todo: todo,
            id: 0
        }
        expect(addTodo(todo)).toEqual(expectedAction)
    })
})