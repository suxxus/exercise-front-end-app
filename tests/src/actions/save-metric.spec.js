import test from 'blue-tape';
import mock from 'mock';
import * as Mocked from '../../mocks/mock';

const action = mock('scripts/actions/save-metric', {
            'scripts/constants/actions': Mocked.ConstantsActions,
            'isomorphic-fetch': () => Promise.resolve({
                status: 200
            })
        },
        require),

    before = test,
    after = test;

before('desc:', t => {
    t.pass('actions: save-metric');
    t.end();
});

test('saveMetric', t => {
    const actual = action.saveMetric(1, 'john', 2),
        expect = {
            type: Mocked.ConstantsActions.SAVE_METRIC,
            id: 1,
            name: 'john',
            chartType: 2
        };
    t.deepEqual(actual, expect);
    t.end();
});

test('saveMetricData', t => {
    return action.saveMetricData({
            userId: 1,
            data: {
                id: 6,
                name: 'Atilio',
                chartType: 3

            }
        })(() => undefined)
        .then(val => {
            const actual = val,
                expect = 200;

            t.deepEqual(actual, expect, 'should save new metric');
        });
});

after('end', t => {
    t.pass('//--------------------------------------');
    t.end();
});
