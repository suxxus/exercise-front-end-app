import * as Types from '../constants/actions';

export const requestMetrics = isFetching => ({
    type: Types.REQUEST_METRICS,
    isFetching
});
