import R from 'ramda';
import test from 'blue-tape';
import mock from 'mock';
import {
    stateShapes
}
from '../../mocks/mock';

const action = mock('scripts/utils/state-shape', {
        'scripts/constants/actions': {
            FETCHING_NONE: 'none'
        }
    },
    require);


const before = test,
    after = test;

before('desc:', t => {
    t.pass('utils: state-shape');
    t.end();
});

test('initial State', t => {

    let actual, expect;

    actual = typeof action.initialState(),
    expect = 'object';
    t.equal(actual, expect, 'should be an object');

    t.end();
});

test('metric shape', t => {

    let actual, expect;

    actual = typeof action.metricShape(),
    expect = 'object';
    t.equal(actual, expect, 'should be an object');

    t.end();
});

after('end', t => {
    t.pass('//--------------------------------------');
    t.end();
});
