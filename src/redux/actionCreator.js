import * as ActionType from './actionTypes';

export const sidebarToggle = () => {
    return {
        type: ActionType.TOGGLE,
        payload: {
            mytoggle: true
        }
    }
}