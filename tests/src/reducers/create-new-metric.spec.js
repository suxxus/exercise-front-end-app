import R from 'ramda';
import test from 'blue-tape';
import mock from 'mock';
import { deepFreeze } from '../../mocks/utils';

const before = test,
    after = test;

const action = mock('scripts/reducers/create-new-metric', {
            'scripts/utils/helpers': {
                insertHighestListValuePlusOneAtHead: () => [2, 1]
            }
        },
        require);

    before('desc:', t => {
        t.pass('reducers: create-new-metric');
        t.end();
    });

test('doCreateNewMetric', t => {

    const initialState = deepFreeze({

            entities: {
                charts: {
                    1: {
                        id: 1,
                        name: 'chart 1'
                    }
                },
                chartTypes: { 1: { id: 1 } }
            },
            result: {
                charts: [1]
            }
        }),

        nextState = {
            entities: {
                charts: {
                    1: {
                        id: 1,
                        name: 'chart 1'
                    },
                    2: {
                        id: 2,
                        name: ''
                    }
                },
                chartTypes: { 1: { id: 1 } }
            },
            result: {
                charts: [2, 1]
            }
        },

        actual = action.createNewMetric(initialState, {
            type: 'new metric',
            shape: { id: '', name: '' }
        }),
        expect = nextState;

    t.deepEqual(actual, expect, 'should add new metric to the charts');
    t.end();
});


after('end', t => {
    t.pass('//--------------------------------------');
    t.end();
});
