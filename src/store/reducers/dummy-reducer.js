import * as Constants from '../constants/constants.js';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
    case Constants.DUMMY:
        return {
            ...state
        };
    default:
        return state;
    }
};
