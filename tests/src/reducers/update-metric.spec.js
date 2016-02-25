import test from 'blue-tape';
import R from 'ramda';
import mock from 'mock';
import * as Mocked from '../../mocks/mock';
import { deepFreeze } from '../../mocks/utils';


const action = mock('scripts/reducers/update-metric', {
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
                    name: 'alice',
                    chartType: 2
                }
            }
        }
    });

    nextState = {
        isFetching: Mocked.ConstantsActions.FETCHING_NONE,
        updatedMetricId: 1,
        entities: {
            charts: {
                1: {
                    id: 1,
                    name: 'marie',
                    chartType: 3
                }
            }
        }
    };
};

before('desc:', t => {
    t.pass('reducers: update-metric');
    setup();
    t.end();
});

test('updateMetricData', t => {

    const actual = action.updateMetricData(state, {
            id: 1,
            name: 'marie',
            chartType: 3
        }),
        expect = nextState;

    t.deepEqual(actual, expect, 'metric should be updated');
    t.end();
});

after('end', t => {
    t.pass('//--------------------------------------');
    t.end();
});
