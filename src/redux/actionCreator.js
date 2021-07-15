import * as ActionType from './actionTypes';

export const testAction = () => {
    return{
        type: ActionType.TEST_ACTION,
        payload:{
            test:'Test'
        }
    }
}