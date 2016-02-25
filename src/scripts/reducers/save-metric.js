import { assoc, assocPath, set, lensProp, pipe } from 'ramda';
import * as Types from '../constants/actions';

export const saveMetric = (state, action) => {

    const {
        id,
        name,
        chartType
    } = action,

    metric = pipe(
        set(lensProp('name'), name),
        set(lensProp('chartType'), chartType),
        set(lensProp('isNew'), false)
    )(state.entities.charts[id]);

    return pipe(
        assoc('isFetching', Types.FETCHING_NONE),
        assoc('updatedMetricId', id),
        assocPath(['entities', 'charts', id], metric)
    )(state);
};
