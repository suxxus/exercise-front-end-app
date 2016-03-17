import test from 'blue-tape';
import R from 'ramda';
import mock from 'mock';
import deepFreeze from 'deep-freeze';
import { ConstantsActions } from '../../mocks/mock';

const action = mock('scripts/reducers/recive-metrics', {
        'scripts/constants/actions': ConstantsActions,
    },
    require);

const before = test,
    after = test;

let state, nextState;

const setup = () => {

    state = deepFreeze({
        isFetching: 'all',
        didInvalidate: false,
        entities: {},
        result: {}
    });

    nextState = {
        isFetching: ConstantsActions.FETCHING_NONE,
        didInvalidate: true,
        entities: {
            charts: { 1: { id: 1 } }
        },
        result: { charts: [1] }
    };
};

before('desc:', t => {
    t.pass('reducers: recive-metrics');
    setup();
    t.end();
});

test('reciveMetrics', t => {

    const actual = action.reciveMetrics(state, {
            type: ConstantsActions.RECIVE_METRICS,
            data: {
                entities: {
                    charts: { 1: { id: 1 } }
                },
                result: { charts: [1] }
            }
        }),
        expect = nextState;

    t.deepEqual(actual, expect);
    t.end();
});


after('end', t => {
    t.pass('//--------------------------------------');
    t.end();
});
