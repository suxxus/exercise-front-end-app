import R from 'ramda';
import test from 'blue-tape';
import mock from 'mock';
import * as Mocked from '../../mocks/mock';
import ConfigureStore from 'scripts/store/configure-store';

test('ConfigureStore', t => {

    const actual = typeof ConfigureStore(),
        expect = 'object';

    t.deepEqual(actual, expect, 'should be an object');
    t.end();
});

test('end', t => {
    t.pass('//--------------------------------------');
    t.end();
});
