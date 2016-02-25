import { assoc, assocPath, pipe } from 'ramda';
import * as Types from '../constants/actions';

export const updateMetricData = (state, action) => pipe(
    assoc('isFetching', Types.FETCHING_NONE),
    assoc('updatedMetricId', action.id),
    assocPath(['entities', 'charts', action.id, 'name'], action.name),
    assocPath(['entities', 'charts', action.id, 'chartType'], action.chartType)
)(state);
