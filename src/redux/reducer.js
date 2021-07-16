import * as ActionType from './actionTypes';
const intitalState = {
    toggled: false
}

export const reducer = (state = intitalState, action) => {
    switch (action.type) {
        case ActionType.TOGGLE:
            {
                return {
                    ...state, toggled: !state.toggled
                }
            }

        default:
            {
                return {
                    ...state
                }
            }
    }
}