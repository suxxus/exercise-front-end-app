import * as Types from '../constants/actions';
import { timeout } from '../utils/helpers';

export const setUpdatedMetricId = id => ({
    type: Types.UPDATED_METRIC_ID,
    id
});

export const resetUpdatedMetricId = dispatch =>
  timeout(800)
    .then(() => dispatch(setUpdatedMetricId(-1)))
    .catch(error => console.log(error));
