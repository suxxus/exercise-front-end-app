import test from 'blue-tape';
import React from 'react';
import sd from 'skin-deep';

import main from 'scripts/components/metric-name.comp';

let before = test,
    after = test,
    props,
    comp,
    tree,
    vdom,
    instance,
    $ = React.createElement;

const setup = name => {
    props = {
        name,
        nameChangeHandler: value => {
            props.name = value;
        }
    };
};

const doComp = () => {
    comp = $(main, props);
    tree = sd.shallowRender(comp);
    vdom = tree.getRenderOutput();
    instance = tree.getMountedInstance();
};

before('desc:', t => {
    t.pass('componets: metric-name');

    setup('my metric');
    doComp();

    t.end();
});

test('should render correctly', t => {

    let actual, expect;

    actual = vdom.type;
    expect = 'div';
    t.equal(actual, expect, 'should be div');

    actual = vdom.props.className;
    expect = 'metric-name';
    t.equal(actual, expect, 'should be metric name');

    t.end();
});

test('should render metric name', t => {

    const tree = sd.shallowRender(instance.renderLabel());

    let actual, expect;

    actual = tree.getRenderOutput().type;
    expect = 'div';
    t.equal(actual, expect, 'should be my metric');

    actual = typeof tree.getRenderOutput().props.onClick;
    expect = 'function';
    t.equal(actual, expect, 'onClick event should be bound to function');

    actual = tree.getRenderOutput().props.className;
    expect = 'name editable show';
    t.equal(actual, expect, 'should be name editable show');

    actual = tree.subTree('.label').text();
    expect = 'my metric';
    t.equal(actual, expect, 'should be my metric');

    t.end();
});

test('should render edit name input', t => {

    const tree = sd.shallowRender(instance.renderEdit());


    let actual, expect;

    actual = tree.getRenderOutput().type;
    expect = 'div';
    t.equal(actual, expect, 'should be my div');

    actual = tree.getRenderOutput().props.className;
    expect = 'edit';
    t.equal(actual, expect, 'should be edit');

    actual = tree.subTree('input').props.placeholder;
    expect = 'metric name';
    t.equal(actual, expect, 'should be metric name');

    actual = tree.subTree('input').props.value;
    expect = 'my metric';
    t.equal(actual, expect, 'should be my metric');

    actual = typeof tree.subTree('.tooltip').props.onClick;
    expect = 'function';
    t.equal(actual, expect, 'onClick event should be bound to function');

    t.end();
});

test('onChangeHandler', t => {

    let actual, expect;
    instance.onChangeHandler({
        target: {
            value: 'Marina'
        }
    });


    actual = instance.state.name;
    expect = 'Marina';
    t.equal(actual, expect, 'should be Marina');

    t.end();

});

test('onBlurHandler', t => {

    let actual, expect;
    instance.setState({
        name: 'Luis'
    });
    instance.onBlurHandler();
    doComp();

    actual = instance.props.name;
    expect = 'Luis';
    t.equal(actual, expect, 'should be Luis');

    t.end();

});

test('onKeyDownHandler', t => {

    let actual, expect;
    instance.setState({
        name: 'Luis'
    });
    instance.onKeyDownHandler({
        which: 13
    });
    doComp();

    actual = instance.props.name;
    expect = 'Luis';
    t.equal(actual, expect, 'should be Luis');

    t.end();

});

test('end', function(t) {
    t.pass('//------------------------------------------------//');
    t.end()
});
