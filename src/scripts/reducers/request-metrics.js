import { assoc, pipe } from 'ramda';
export const requestMetrics = (state, action) => pipe(
    assoc('isFetching', String(action.isFetching)),
    assoc('didInvalidate', false)
)(state);
