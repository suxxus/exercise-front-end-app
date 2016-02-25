import test from 'blue-tape';
import mock from 'mock';
import * as Mocked from '../../mocks/mock';

const action = mock('scripts/actions/update-metric', {
            'scripts/constants/actions': Mocked.ConstantsActions,
            'isomorphic-fetch': () => Promise.resolve({
                status: 200
            })
        },
        require),
    before = test,
    after = test;

before('desc:', t => {
    t.pass('actions: update-metric');
    t.end();
});

test('updateMetric', t => {
    const actual = action.updateMetric(2, 'Alba', 3),
        expect = {
            type: Mocked.ConstantsActions.UPDATE_METRIC,
            id: 2,
            name: 'Alba',
            chartType: 3
        };
    t.deepEqual(actual, expect, 'updateMetric action');
    t.end();
});

test('updateMetricData', t => {
    return action.updateMetricData({
            userId: 1,
            data: {
                id: 1,
                name: 'paul',
                chartType: 2
            }
        })(() => undefined)
        .then(val => {
            const actual = val,
                expect = 200;

            t.deepEqual(actual, expect, 'should update metric data');
        });
});

after('end', t => {
    t.pass('//--------------------------------------');
    t.end();
});
