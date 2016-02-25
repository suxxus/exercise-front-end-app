import * as Types from '../constants/actions';
import { doAction } from '../utils/helpers';
import { editMetrics } from './edit-metrics';
import { createNewMetric } from './create-new-metric';
import { reciveMetrics } from './recive-metrics';
import { requestMetrics } from './request-metrics';
import { deleteMetric } from './delete-metric';
import { saveMetric } from './save-metric';
import { updateMetricData } from './update-metric';
import { setUpdatedMetricId } from './set-updated-metric-id';

const actions = {
    [Types.REQUEST_METRICS]: requestMetrics,
    [Types.RECIVE_METRICS]: reciveMetrics,
    [Types.EDIT_METRICS]: editMetrics,
    [Types.NEW_METRIC]: createNewMetric,
    [Types.DELETE_METRIC]: deleteMetric,
    [Types.SAVE_METRIC]: saveMetric,
    [Types.UPDATE_METRIC]: updateMetricData,
    [Types.UPDATED_METRIC_ID]: setUpdatedMetricId
};

export default (state, action) => doAction({
    defaultVal: state,
    actions,
    action
})(state, action);
