import R from 'ramda';
import {deepFreeze} from './utils';

export const metrics = {
    // server response
    userId: '1',
    chartTypes: [{
        id: 1,
        name: 'pie',
        img: ''
    }, {
        id: 2,
        name: 'line',
        img: ''
    }, {
        id: 3,
        name: 'area',
        img: ''
    }],
    charts: [{
        'id': 1,
        'chartType': 1,
        'name': 'Susy',
        'metadata': {
            'id': 1,
            'limit': 500,
            'reached': 125
        }
    }]
};

export const normalized = {
    //server response normalized
    entities: {
        chartTypes: {
            1: {
                id: 1,
                img: '',
                name: 'pie'
            },
            2: {
                id: 2,
                img: '',
                name: 'line'
            },
            3: {
                id: 3,
                img: '',
                name: 'area'
            }
        },
        charts: {
            1: {
                chartType: 1,
                id: 1,
                metadata: 1,
                name: 'Susy'
            }
        },
        metadata: {
            1: {
                id: 1,
                limit: 500,
                reached: 125
            }
        }
    },
    result: {
        chartTypes: [1, 2, 3],
        charts: [1],
        userId: '1'
    }
};

export const ConstantsActions = {

    'REQUEST_METRICS': 'request metrics',
    'RECIVE_METRICS': 'recive metrics',
    'EDIT_METRICS': 'edit metrics',
    'NEW_METRIC': 'create new metric',
    'DELETE_METRIC': 'delete metric',
    'UNDO_CHANGES': 'undo changes',
    'SAVE_METRIC': 'save metric',
    'UPDATE_METRIC': 'update metric',
    'UPDATED_METRIC_ID': 'updated metric id',
    'FETCHING_ALL': 'fetching all',
    'FETCHING_NONE': 'fetching none'
};

export const stateShapes = {

    initialState: {
        userId: '',
        user:'',
        editable: false,
        isFetching: 'fetching none',
        updatedMetricId: -1,
        didInvalidate: false,
        lastUpdated: null,
        result: {
            chartTypes: [],
            charts: [],
            userId: '',
        },
        entities: {}
    },
    chartShape: {
        id: '',
        isNew: true,
        chartType: 1,
        name: ''
    }
};

export const state = {
    userId: '1',
    user: 'jhondoe@gmail.com',
    editable: false,
    isFetching: 'fetching none',
    updatedMetricId: -1,
    didInvalidate: false,
    lastUpdated: null,
    entities: {
        chartTypes: {
            1: {
                id: 1,
                img: '',
                name: 'pie'
            },
            2: {
                id: 2,
                img: '',
                name: 'line'
            },
            3: {
                id: 3,
                img: '',
                name: 'area'
            }
        },
        charts: {
            1: {
                chartType: 1,
                id: 1,
                metadata: 1,
                name: 'Susy'
            },
            2: {
                chartType: 3,
                id: 2,
                metadata: 2,
                name: 'Alice'
            }
        },
        metadata: {
            1: {
                id: 1,
                limit: 'limit riched: 800',
                updates: '300 updates',
                message: 'monthly resolution'
            },
            2: {
                id: 2,
                limit: 'limit riched: 400',
                updates: '127 updates',
                message: 'monthly resolution'
            }
        }
    },
    result: {
        chartTypes: [1, 2, 3],
        charts: [1, 2],
        userId: 'mail@mail.com'
    }
};


export const freezedState = () => deepFreeze(R.clone(state));
