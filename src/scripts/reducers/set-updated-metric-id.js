import { assoc } from 'ramda';

export const setUpdatedMetricId = (state, action) =>
    assoc('updatedMetricId', action.id, state);
