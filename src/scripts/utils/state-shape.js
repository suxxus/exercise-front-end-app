import {
    FETCHING_NONE
}
from '../constants/actions';

export const initialState = () => ({
    userId: '',
    user: '',
    editable: false,
    isFetching: FETCHING_NONE,
    updatedMetricId: -1,
    didInvalidate: false,
    lastUpdated: null,
    result: {
        chartTypes: [],
        charts: []
    },
    entities: {}
});

export const metricShape = () => ({
    id: '',
    isNew: true,
    chartType: 1, //default chart type
    name: ''
});
