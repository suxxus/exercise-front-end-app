import test from 'blue-tape';
import R from 'ramda';
import mock from 'mock';
import { deepFreeze } from '../../mocks/utils';
import * as Mocked from '../../mocks/mock';

const action = mock('scripts/reducers/save-metric', {
        'scripts/constants/actions': Mocked.ConstantsActions
    },
    require);

const before = test,
    after = test;

let state, nextState;

const setup = () => {

    state = deepFreeze({
            isFetching: '1',
            updatedMetricId: '',
            entities: {
                charts: {
                    1: {
                        id: 1,
                        name: '',
                        isNew: true,
                        chartType: 1
                    }
                }
            }
        }),

        nextState = {
            isFetching: Mocked.ConstantsActions.FETCHING_NONE,
            updatedMetricId: 1,
            entities: {
                charts: {
                    1: {
                        id: 1,
                        name: 'John',
                        isNew: false,
                        chartType: 2
                    }
                }
            }
        };
};

before('desc:', t => {
    t.pass('reducers: save-metric');
    setup();
    t.end();
});

test('saveMetric', t => {

    const actual = action.saveMetric(state, {
            type: Mocked.ConstantsActions.SAVE_METRIC,
            id: 1,
            name: 'John',
            chartType: 2
        }),
        expect = nextState;

    t.deepEqual(actual, expect);
    t.end();
});

after('end', t => {
    t.pass('//--------------------------------------');
    t.end();
});
