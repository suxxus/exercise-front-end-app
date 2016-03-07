import R from 'ramda';
import test from 'blue-tape';
import mock from 'mock';
import * as Mocked from '../../mocks/mock';


const ConfigureStore = mock('scripts/store/configure-store', {
            'scripts/reducers': () => ({metrics:''})
        },
        require).default,

    before = test,
    after = test;

before('desc:', t => {
    t.pass('store: configure store');
    t.end();
});

test('ConfigureStore', t => {

    let actual, expect;
    const store = ConfigureStore();

    actual = typeof store.getState();
    expect = 'object';
    t.equal(actual, expect, 'configured with the correct reducer');

    t.deepEqual(actual, expect);

    t.end();
});

after('end', t => {
    t.pass('//--------------------------------------');
    t.end();
});
