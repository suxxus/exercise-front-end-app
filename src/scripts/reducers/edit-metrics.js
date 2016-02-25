import { assocPath, not } from 'ramda';

export const editMetrics = state => assocPath(['editable'], not(state.editable), state);
