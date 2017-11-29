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

    it('should handle TODO_STATE for DONE state', () => {
        expect(todos([], {
            type: 'TODO_STATE',
            state: 'DONE'
        }))
        .toEqual([[{
            state: 'DONE'
        }]])
    })
    it('should handle TODO_STATE for REJECT state', () => {
        expect(todos([], {
            type: 'TODO_STATE',
            state: 'REJECT'
        }))
        .toEqual([[{
            state: 'REJECT'
        }]])
    })
    it('should handle TODO_STATE for EXPAND state', () => {
        expect(todos([], {
            type: 'TODO_STATE',
            state: 'EXPAND'
        }))
        .toEqual([[{
            state: 'EXPAND'
        }]])
    })
})