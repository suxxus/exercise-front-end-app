import test from 'blue-tape';
import mock from 'mock';
import * as Mocked from '../../mocks/mock';

const action = mock('scripts/actions/edit-metrics', {
            'scripts/constants/actions': Mocked.ConstantsActions
        },
        require),
    before = test,
    after = test;

before('desc:', t => {
    t.pass('actions: edit-metric');
    t.end();
});

test('editMetrics', t => {
    const actual = action.editMetrics(),
        expect = {
            type: 'edit metrics'
        };
    t.deepEqual(actual, expect);
    t.end();
});

after('end', t => {
    t.pass('//--------------------------------------');
    t.end();
});
