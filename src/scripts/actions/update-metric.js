import fetch from 'isomorphic-fetch';
import * as Types from '../constants/actions';
import { resetUpdatedMetricId } from './set-updated-metric-id';
import {
    requestMetrics
}
from './request-metrics';

export const updateMetric = (id, name, chartType) => ({
    type: Types.UPDATE_METRIC,
    id,
    name,
    chartType
});

export const updateMetricData = value => dispatch => {

    const {
        id,
        name,
        chartType
    } = value.data;

    dispatch(requestMetrics(id));

    return fetch(`/api/${value.userId}/metrics`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: `id=${id}&name=${name}&chartType=${chartType}`
        })
        .then(response => {
            dispatch(updateMetric(id, name, chartType));
            resetUpdatedMetricId(dispatch);
            return response.status;
        })
        .catch(e => console.log('error: ', e.message));
};
