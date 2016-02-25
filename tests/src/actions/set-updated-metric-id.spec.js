import test from 'blue-tape';
import mock from 'mock';
import * as Mocked from '../../mocks/mock';

const action = mock('scripts/actions/set-updated-metric-id', {
            'scripts/constants/actions': Mocked.ConstantsActions
        },
        require),
    before = test,
    after = test;

before('desc:', t => {
    t.pass('actions: set-updated-metric-id');
    t.end();
});

test('metricUpdatedId', t => {
    const actual = action.setUpdatedMetricId(2),
        expect = {
            type: Mocked.ConstantsActions.UPDATED_METRIC_ID,
            id: 2
        };
    t.deepEqual(actual, expect, 'should be 2');
    t.end();
});

after('end', t => {
    t.pass('//--------------------------------------');
    t.end();
});
