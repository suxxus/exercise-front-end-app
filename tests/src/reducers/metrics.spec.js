import test from 'blue-tape';
import R from 'ramda';
import mock from 'mock';
import deepFreeze from 'deep-freeze';
import * as Mocked from '../../mocks/mock';

const metrics = mock('scripts/reducers/metrics', {
            'scripts/constants/actions': Mocked.ConstantsActions
        },
        require).default,

    before = test,
    after = test;

before('desc:', t => {
    t.pass('reducers: metrics (all reducers)');
    t.end();
});

test('defaultTo', t => {
    const actual = metrics(Mocked.stateShapes.initialState),
        expect = Mocked.stateShapes.initialState;

    t.deepEqual(actual, expect, 'should return the default status');
    t.end();
});

test('end', t => {
    t.pass('//--------------------------------------');
    t.end();
});
