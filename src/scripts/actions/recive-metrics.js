import 'babel-polyfill';
import { prop, equals, isEmpty, cond, T, F} from 'ramda';
import { normalize, Schema, arrayOf } from 'normalizr';
import fetch from 'isomorphic-fetch';
import * as Types from '../constants/actions';
import { requestMetrics } from './request-metrics';

export const reciveMetrics = data => ({
    type: Types.RECIVE_METRICS,
    data
});

const normalizr = response => {

    const charts = new Schema('charts'),
        metadata = new Schema('metadata'),
        chartTypes = new Schema('chartTypes');

    charts.define({
        'metadata': metadata
    });

    return normalize(response, {
        charts: arrayOf(charts),
        chartTypes: arrayOf(chartTypes)
    });
};

const shouldFetchMetrics = state => cond([
    [() => isEmpty(state.metrics.entities), T],
    [() => equals(prop('isFetching'), Types.FETCHING_ALL), F],
    [T, () => state.metrics.didInvalidate]
])(state);

export const fetchMetrics = id => dispatch => {

    dispatch(requestMetrics(Types.FETCHING_ALL));

    return fetch(`/api/${id}/metrics`, {
            method: 'GET',
        })
        .then(response => response.json())
        .then(response => normalizr(response))
        .then(response => {
            dispatch(reciveMetrics(response));
            return response;
        })
        .catch(e => console.log('error: ', e.message));
};

export const fetchMetricsIfNeeded = id => (dispatch, getState) => shouldFetchMetrics(getState()) ?
    fetchMetrics(id)(dispatch) : Promise.resolve();
