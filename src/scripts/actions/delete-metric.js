import * as Types from '../constants/actions';
import deleteMetricDataSrv from 'isomorphic-fetch';

export const deleteMetric = id => ({
    type: Types.DELETE_METRIC,
    id
});

export const deleteMetricData = value => dispatch => {

    const {
        userId, metricId
    } = value;

    return deleteMetricDataSrv(`/api/${userId}/metrics`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: `id=${metricId}`
        })
        .then(response => {
            dispatch(deleteMetric(metricId));
            return response.status;
        })
        .catch(e => console.log('error: ', e.message));
};
