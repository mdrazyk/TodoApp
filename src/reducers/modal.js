const modal = (state = [], action) => {
    switch (action.type) {
        case 'SHOW_MODAL':
            return [
                ...state,
                action.show   
            ]
        case 'DONT_SHOW_MODAL':
            return [
                ...state,
                action.show
            ]
        default:
            return state
    }
}

export default modal