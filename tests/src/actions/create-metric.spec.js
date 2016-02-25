import test from 'blue-tape';
import mock from 'mock';
import {
    stateShapes,
    ConstantsActions
}
from '../../mocks/mock';

const action = mock('scripts/actions/create-metric', {
            'scripts/constants/actions': ConstantsActions,
            'scripts/utils/state-shape': { metricShape: () => stateShapes.chartShape }
        },
        require),

    before = test,
    after = test;

before('desc:', t => {
    t.pass('actions: create-metric');
    t.end();
});

test('createNewMetric', t => {

    const {
        chartShape
    } = stateShapes, {
        NEW_METRIC
    } = ConstantsActions,

    actual = action.createNewMetric(),
        expect = {
            type: NEW_METRIC,
            shape: chartShape
        };
    t.deepEqual(actual, expect);
    t.end();
});


after('end', t => {
    t.pass('//--------------------------------------');
    t.end();
});
