import 'babel-polyfill';
import test from 'blue-tape';
import mock from 'mock';
import * as Mocked from '../../mocks/mock';

const action = mock('scripts/actions/recive-metrics', {
            'scripts/constants/actions': Mocked.ConstantsActions,
            'isomorphic-fetch': () => Promise.resolve(Mocked.metrics)
        },
        require),
    before = test,
    after = test;

before('desc:', t => {
    t.pass('actions: recive-metric');
    t.end();
});

test('reciveMetrics', t => {
    const actual = action.reciveMetrics([]),
        expect = {
            type: Mocked.ConstantsActions.RECIVE_METRICS,
            data: []
        };
    t.deepEqual(actual, expect);
    t.end();
});

test('fetchMetricsIfNeeded', t => {

    const dispatch = () => undefined,
        getState = () => ({
            metrics: Mocked.stateShapes.initialState
        });

    return action.fetchMetricsIfNeeded()
        (dispatch, getState)
        .then(val => {
            const actual = val,
                expect = Mocked.normalized;
            t.deepEqual(actual, expect, 'should return metrics data');
        });
});

after('end', t => {
    t.pass('//--------------------------------------');
    t.end();
});
