import { assoc, pipe } from 'ramda';
import * as Types from '../constants/actions';

export const reciveMetrics = (state, action) => {
    return pipe(
        assoc('didInvalidate', true),
        assoc('isFetching', Types.FETCHING_NONE),
        assoc('entities', action.data.entities),
        assoc('result', action.data.result)
    )(state);
};
