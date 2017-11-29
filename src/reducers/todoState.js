const initialState = []

export const todoState = (state = initialState, action) => {
    switch (action.type) {
        case 'TODO_STATE':
            return [
                ...state, {
                    id: action.id,
                    state: action.state
                }
            ]
        default:
            return state
    }
}