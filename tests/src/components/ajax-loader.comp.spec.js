import test from 'blue-tape';
import React from 'react';
import sd from 'skin-deep';
import R from 'ramda';
import mock from 'mock';
import {
    state, ConstantsActions
}
from '../../mocks/mock';

const main = mock('scripts/components/ajax-loader.comp', {
        'scripts/constants/actions': ConstantsActions
    },
    require).default;

let before = test,
    after = test,
    props,
    comp,
    tree,
    vdom,
    instance,
    $ = React.createElement;

const setup = state => {
        props = state;
    },

    doComp = () => {
        comp = $(main, props);
        tree = sd.shallowRender(comp);
        vdom = tree.getRenderOutput();
        instance = tree.getMountedInstance();
    };

before('desc:', t => {
    t.pass('componets: ajax-loader');
    setup(state);
    doComp();
    t.end();
});

test('should render correctly', t => {

    let actual, expect;

    actual = vdom.type;
    expect = 'div';
    t.equal(actual, expect, 'should be div');

    actual = vdom.props.className;
    expect = 'ajax-loader hide'
    t.equal(actual, expect, 'should be ajax-loader');

    const _state = R.clone(state);
    _state.isFetching = '1';
    setup(_state);
    doComp();
    actual = vdom.props.className;
    expect = 'ajax-loader'
    t.equal(actual, expect, 'should be ajax-loader hide');

    t.end();
});

after('end', t => {
    t.pass('//------------------------------------------------//');
    t.end()
});
