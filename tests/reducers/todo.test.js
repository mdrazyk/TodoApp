import { todos } from '../../src/reducers/todos'
import { todoState } from '../../src/reducers/todoState'

describe('todo reducer', () => {
    it('should return the initial state', () => {
        expect(todos(undefined, {})).toEqual([])
    })

    it('should handle ADD_TODO', () => {
        expect(todos([], {
                type: 'ADD_TODO',
                id: 0,
                title: 'Hello World',
                body: 'Welcome to jackass!'
            }))
            .toEqual([[{
                id: 0,
                title: 'Hello World',
                body: 'Welcome to jackass!'
            }]])
    })

    it('should handle TODO_STATE for DONE state', () => {
        expect(todoState([], {
                type: 'TODO_STATE',
                id: 0,
                state: 'DONE'
            }))
            .toEqual([
                {
                    id: 0,
                    state: 'DONE'
                }
            ])
    })
    it('should handle TODO_STATE for REJECT state', () => {
        expect(todoState([], {
                type: 'TODO_STATE',
                id: 0,
                state: 'REJECT'
            }))
            .toEqual([
                {
                    id: 0,
                    state: 'REJECT'
                }
            ])
    })
    it('should handle TODO_STATE for EXPAND state', () => {
        expect(todoState([], {
                type: 'TODO_STATE',
                id: 0,
                state: 'EXPAND'
            }))
            .toEqual([
                {
                    id: 0,
                    state: 'EXPAND'
                }
            ])
    })
})