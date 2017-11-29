import _ from 'lodash'
export const treeObjectStructure = list => list.reduce(
    (a, b) => {
        const result = a.concat(Array.isArray(b) ? treeObjectStructure(b) : b)
        return _.uniq(result)
    }, []
)