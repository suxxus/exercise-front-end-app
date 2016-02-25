import * as Types from '../constants/actions';
import { metricShape } from '../utils/state-shape';

export const createNewMetric = () => ({
    type: Types.NEW_METRIC,
    shape: metricShape()
});
