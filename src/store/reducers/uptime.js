import { List, Map } from 'immutable';
import { NEXT_UPTIME } from '../constants';

const initialState = Map({
    uptimes: List([{ x: 0, y: 0 }])
});

let counter1 = 0;
let counter2 = 0;

export default (state = initialState, action) => {
    switch (action.type) {
    case NEXT_UPTIME:
        counter1++;
        counter2 = Math.random().toFixed(2);
        return state.update('uptimes', list =>
                list.push({ x: parseFloat(counter1), y: parseFloat(counter2) })
            );
    default:
        return state;
    }
};
