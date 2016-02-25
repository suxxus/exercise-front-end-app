import R from 'ramda';
import test from 'blue-tape';
import mock from 'mock';
import * as Mock from '../../mocks/mock';
import main from 'scripts/reducers/index';


const before = test;

before('desc:', t => {
    t.pass('reducers: index (combine reducers)');
    t.end();
});

test('combineReducers', t => {

    const actual = typeof main(),
        expect = 'object';

    t.equal(actual, expect, 'should be an object');
    t.end();
});

test('end', t => {
    t.pass('//--------------------------------------');
    t.end();
});
