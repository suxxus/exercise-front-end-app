import test from 'blue-tape';
import mock from 'mock';
import * as Mocked from '../../mocks/mock';


const action = mock('scripts/actions/delete-metric', {
            'scripts/constants/actions': Mocked.ConstantsActions,
            'isomorphic-fetch': () => Promise.resolve({
                status: 200
            })
        },
        require),
    before = test,
    after = test;

before('desc:', t => {
    t.pass('actions: delete-metric');
    t.end();
});

test('deleteMetric', t => {
    const actual = action.deleteMetric(6),
        expect = {
            type: 'delete metric',
            id: 6
        };
    t.deepEqual(actual, expect);
    t.end();
});

test('deleteMetricData', t => {
    return action.deleteMetricData({
            userId: 1,
            metricId: 2
        })(() => undefined)
        .then(val => {
            const actual = val,
                expect = 200;

            t.deepEqual(actual, expect, 'should delete metric data');
        });
});


after('end', t => {
    t.pass('//--------------------------------------');
    t.end();
});
