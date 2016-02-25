import test from 'blue-tape';
import mock from 'mock';
import * as Mocked from '../../mocks/mock';

const action = mock('scripts/actions/request-metrics', {
            'scripts/constants/actions': Mocked.ConstantsActions
        },
        require),
    before = test,
    after = test;

before('desc:', t => {
    t.pass('actions: request-metrics');
    t.end();
});

test('requestMetrics', t => {
    const actual = action.requestMetrics(1),
        expect = {
            type: Mocked.ConstantsActions.REQUEST_METRICS,
            isFetching: 1
        };
    t.deepEqual(actual, expect);
    t.end();
});

after('end', t => {
    t.pass('//--------------------------------------');
    t.end();
});
