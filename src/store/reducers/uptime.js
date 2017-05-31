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
        counter2 = (Math.random() * 2.5).toFixed(2);
        return state.update('uptimes', list =>
                list.push({ x: counter1, y: counter2 })
            );
    default:
        return state;
    }
};
