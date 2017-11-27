import todos from '../../src/reducers/todos'

describe('todo reducer', () => {
    it('should return the initial state', () => {
        expect(todos(undefined, {})).toEqual([])
    })

    it('should handle ADD_TODO', () => {
        expect(todos([], {
                type: 'ADD_TODO',
                id: 0,
                todo: {
                    title: 'Hello World',
                    body: 'Welcome to jackass!'
                }
            }))
            .toEqual([{
                id: 0,
                todo: {
                    title: 'Hello World',
                    body: 'Welcome to jackass!'
                }
            }])
    })
})