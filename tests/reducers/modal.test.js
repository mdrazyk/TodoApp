import { modal } from '../../src/reducers/modal'

describe('modal reducer', () => {
    it('should return the initial state', () => {
        expect(modal(undefined, {})).toEqual([])
    })

    it('should handle DONT_SHOW_MODAL', () => {
        expect(modal([], {
            type: 'DONT_SHOW_MODAL',
            show: false
        }))
        .toEqual([{show: false}])
    })

    it('should handle SHOW_MODAL', () => {
        expect(modal([], {
            type: 'SHOW_MODAL',
            show: true
        }))
        .toEqual([{show: true}])
    })
})