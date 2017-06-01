export const selectCurrentTimerCount = state =>
    state.getIn(['timer', 'currentTimerCount']);

export const selectCurrentInterval = state =>
    state.getIn(['timer', 'currentInterval']);
