import test from 'blue-tape';
import * as Helpers from 'scripts/utils/helpers';

const before = test;

before('desc:', t => {
    t.pass('utils: helpers');
    t.end();
});

test('actionType', t => {

    let actual, expect;

    actual = Helpers.actionType();
    expect = '';
    t.equal(actual, expect, 'should be undefined');

    actual = Helpers.actionType({
        type: 'action-type'
    });
    expect = 'action-type';
    t.equal(actual, expect, 'should be "action-type"');

    t.end();
});

test('doAction. If the action is set , it returns the corresponding action method. Otherwise, the default method', t => {

    let actual, expect;

    actual = Helpers.doAction()();
    expect = '';
    t.equal(actual, expect, 'should be undefined');

    actual = Helpers.doAction({
        defaultVal: 'default'
    })();
    expect = 'default'
    t.equal(actual, expect, 'should return the default value');

    actual = Helpers.doAction({
        actions: {
            action1: () => true
        },
        action: {
            type: 'action1'
        }
    })();
    expect = true;
    t.equal(actual, expect, 'should return action value');

    t.end();
});

test('getGTFromList', t => {
    const actual = Helpers.getGTFromList([1, 5]),
        expect = 5;
    t.equal(actual, expect, 'should return the greater number from the list');
    t.end();
});

test('insertIncrementedValAtHead', t => {
    const actual = Helpers.insertIncrementedValAtHead([1, 5])(3),
        expect = [4, 1, 5];
    t.deepEqual(actual, expect, 'should return the list with a new element incremented by one');
    t.end();
});

test('insertHighestListValuePlusOneAtHead', t => {
    const actual = Helpers.insertHighestListValuePlusOneAtHead([1, 5]),
        expect = [6, 1, 5];
    t.deepEqual(actual, expect, 'should return the list with a the highest number of the list incremented by one');
    t.end();
});


test('end', t => {
    t.pass('//--------------------------------------');
    t.end();
});
