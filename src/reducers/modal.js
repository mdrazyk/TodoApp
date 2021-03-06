export const modal = (state = [], action) => {
    switch (action.type) {
        case 'SHOW_MODAL':
            return [
                ...state,
                {show: action.show}   
            ]
        case 'DONT_SHOW_MODAL':
            return [
                ...state,
                {show: action.show}
            ]
        default:
            return state
    }
}