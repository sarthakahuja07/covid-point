import * as ActionType from './actionTypes';
const intitalState = {
    test: 'test'
}

export const reducer = (state = intitalState, action) => {
    switch (action.type) {
        case ActionType.TEST_ACTION:
            {
                return state
            }

        default:
            {
                return state
            }
    }
}