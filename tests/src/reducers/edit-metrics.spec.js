import R from 'ramda';
import test from 'blue-tape';
import mock from 'mock';
import deepFreeze from 'deep-freeze';
import * as Mocked from '../../mocks/mock';
import { editMetrics } from 'scripts/reducers/edit-metrics';


const before = test;

before('desc:', t => {
    t.pass('reducers: edit-metrics');
    t.end();
});


test('editMetrics', t => {

    const state = deepFreeze({
            editable: true
        }),
        nextState = {
            editable: false
        };


    const actual = editMetrics(state, {
            type: 'edit metrics'
        }),
        expect = nextState;

    t.deepEqual(actual, expect, 'should toogle status editable');
    t.end();
});

test('end', t => {
    t.pass('//--------------------------------------');
    t.end();
});
