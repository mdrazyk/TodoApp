import { treeObjectStructure } from '../src/utils/treeObjectStructure'

describe('treeObjectStructure should', () => {
    it('return one element', () => {
        const obj = {hello: 'world'}
        const expected = [{hello: 'world'}]
        
        expect(treeObjectStructure([obj])).toEqual(expected)
    })

    it('add new state to previous state', () => {
        const firstObject = {hello: 'world'}
        const secondObject = {hello: 'from the otter site'}
        const expected = [
            {hello: 'world'},
            [{hello: 'world'}, {hello: 'from the otter site'}]
        ]
        const state = treeObjectStructure([firstObject])
        const result = [...state, treeObjectStructure([state, secondObject])]

        expect(result).toEqual(expected)
    })

    it('return valid state without duplications', () => {
        const firstObject = {hello: 'world'}
        const secondObject = {hello: 'from the otter site'}
        const thirdObject = {hello: 'it`s me you looking for?'}
        const expected = [
            {hello: 'world'},
            [{hello: 'world'}, {hello: 'from the otter site'}],
            [{hello: 'world'}, {hello: 'from the otter site'}, {hello: 'it`s me you looking for?'}]
        ]
        const firstState = treeObjectStructure([firstObject])
        const secondState = [...firstState, treeObjectStructure([firstState, secondObject])]
        const result = [...secondState, treeObjectStructure([secondState, thirdObject])]

        expect(result).toEqual(expected)
    })
})