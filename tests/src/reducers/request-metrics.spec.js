import test from 'blue-tape';
import R from 'ramda';
import mock from 'mock';
import deepFreeze from 'deep-freeze';
import {
    ConstantsActions,
    stateShapes
}
from '../../mocks/mock';

const action = mock('scripts/reducers/request-metrics', {
        'scripts/constants/actions': ConstantsActions,
    },
    require);

const before = test,
    after = test;

let state, nextState;

const setup = () => {
    state = deepFreeze({
        isFetching: ConstantsActions.FETCHING_NONE,
        didInvalidate: true
    });
    nextState = {
        isFetching: ConstantsActions.FETCHING_ALL,
        didInvalidate: false
    };
};

before('desc:', t => {
    t.pass('reducers: request-metrics-data');
    setup();
    t.end();
});

test('requestMetrics', t => {
    const actual = action.requestMetrics(state, {
            isFetching: ConstantsActions.FETCHING_ALL
        }),
        expect = nextState;

    t.deepEqual(actual, expect);
    t.end();
});

after('end', t => {
    t.pass('//--------------------------------------');
    t.end();
});
