import test from 'blue-tape';
import React from 'react';
import sd from 'skin-deep';
import main from 'scripts/components/metric-modal.comp';


let before = test,
    after = test,
    props,
    comp,
    tree,
    vdom,
    instance,
    $ = React.createElement;

const setup = () => {
    comp = $(main, props);
    tree = sd.shallowRender(comp);
    vdom = tree.getRenderOutput();
    instance = tree.getMountedInstance();
};

before('desc:', t => {

    t.pass('componets: metric-modal');

    props = {
        comfirmDelete: () => false,
        show: false
    };

    setup();

    t.end();
});

test('renderMessage', t => {

    const renderMsg = sd.shallowRender(instance.renderMessage);

    let actual, expect;
    actual = renderMsg.getRenderOutput().type;
    expect = 'div';
    t.equal(actual, expect, 'should be div');

    actual = typeof renderMsg.subTree('.left').props.children.props.onClick;
    expect = 'function';
    t.equal(actual, expect, 'yes btn, should bind a function');

    actual = renderMsg.subTree('.left').props.children.props.value;
    expect = true;
    t.equal(actual, expect, 'yes btn value, should be true');

    actual = typeof renderMsg.subTree('.right').props.children.props.onClick;
    expect = 'function';
    t.equal(actual, expect, 'no btn, should bind a function');

    actual = renderMsg.subTree('.right').props.children.props.value;
    expect = false;
    t.equal(actual, expect, 'no btn value, should be false');

    t.end();
});


test('should render correctly', t => {

    let actual, expect;

    actual = vdom.type;
    expect = 'div';
    t.equal(actual, expect, 'should be div');

    actual = tree.subTree('.card-message').getRenderOutput().type;
    expect = 'div';
    t.equal(actual, expect, 'card-message should be a child');

    actual = tree.subTree('.modal-bkg').props.className;
    expect = 'modal-bkg';
    t.equal(actual, expect, 'should be modal-bkg');

    actual = tree.subTree('.msgs').props.className;
    expect = 'msgs modal-dialog';
    t.equal(actual, expect, 'should be msgs modal-dialog');

    props = {
        show: true,
        comfirmDelete: () => false
    };
    setup();

    actual = tree.subTree('.modal-bkg').props.className;
    expect = 'modal-bkg opacity-show';
    t.equal(actual, expect, 'should be modal-bkg opacity-show');

    actual = tree.subTree('.msgs').props.className;
    expect = 'msgs modal-dialog modal-dialog-transition modal-dialog-transform';
    t.equal(actual, expect, 'should be msgs modal-dialog msgs modal-dialog modal-dialog-transition modal-dialog-transform');

    t.end();
});

after('end', t => {
    t.pass('//------------------------------------------------//');
    t.end()
});
