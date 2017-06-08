export const selectCurrentTimerCount = state =>
    state.getIn(['timer', 'currentTimerCount']);

export const selectAverageInterval = state =>
    state.getIn(['timer', 'currentAverageInterval']);
