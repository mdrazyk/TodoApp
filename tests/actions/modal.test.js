import {
    showModal,
    dontShowModal
} from '../../src/actions/index'

describe('dontShowModal action', () => {
    it('should create an action that sets modal to false', () => {
        const show = false
        const expectedAction = {
            type: 'DONT_SHOW_MODAL',
            show
        }
        expect(dontShowModal(show)).toEqual(expectedAction)
    })
})

describe('showModal action', () => {
    it('should create an action that sets modal to true', () => {
        const show = true
        const expectedAction = {
            type: 'SHOW_MODAL',
            show
        }
        expect(showModal(show)).toEqual(expectedAction)
    })
})