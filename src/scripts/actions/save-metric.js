import fetch from 'isomorphic-fetch';
import * as Types from '../constants/actions';
import { resetUpdatedMetricId } from './set-updated-metric-id';
import { requestMetrics } from './request-metrics';

export const saveMetric = (id, name, chartType) => ({
    type: Types.SAVE_METRIC,
    id,
    name,
    chartType
});

export const saveMetricData = value => dispatch => {
    const {
        id,
        name,
        chartType
    } = value.data;

    requestMetrics(id);

    return fetch(`/api/${value.userId}/metrics`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: `id=${id}&name=${name}&chartType=${chartType}`
        })
        .then(response => {
            dispatch(saveMetric(id, name, chartType));
            resetUpdatedMetricId(dispatch);
            return response.status;
        })
        .catch(e => console.log('error: ', e.message));
};
