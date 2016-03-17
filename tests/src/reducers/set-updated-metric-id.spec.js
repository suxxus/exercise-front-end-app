import test from 'blue-tape';
import R from 'ramda';
import { setUpdatedMetricId } from 'scripts/reducers/set-updated-metric-id';
import deepFreeze from 'deep-freeze';

const before = test,
    after = test;

let state, nextState;

const setup = () => {
    state = deepFreeze({
        updatedMetricId: -1
    });

    nextState = {
        updatedMetricId: 4
    };
};

before('desc:', t => {
    t.pass('reducers: set-updated-metric-id');
    setup();
    t.end();
});

test('showUpdatedMessage', t => {

    const actual = setUpdatedMetricId(state, { id: 4 }),
        expect = nextState;

    t.deepEqual(actual, expect, 'state.setUpdatedMetricId should be 4');
    t.end();
});

after('end', t => {
    t.pass('//--------------------------------------');
    t.end();
});
