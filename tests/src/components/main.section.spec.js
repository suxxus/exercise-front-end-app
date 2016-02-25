import test from 'blue-tape';
import React from 'react';
import sd from 'skin-deep';
import R from 'ramda';
import mock from 'mock';

import {ConstantsActions, state} from '../../mocks/mock';


const main = mock('scripts/components/main.section', {
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
    props.updateMetricData = () => false;
    props.createNewMetric = () => false;
    props.editMetrics = () => false;
    props.saveMetricData = () => false;
    props.deleteMetricData = () => false;

    comp = $(main, props);
    tree = sd.shallowRender(comp);
    vdom = tree.getRenderOutput();
    instance = tree.getMountedInstance();
};

before('desc:', t => {
    t.pass('components: main-section');
    t.end();
});

test('should render correctly', t => {

    setup(state);

    let actual, expect;

    actual = vdom.type;
    expect = 'div';
    t.equal(actual, expect, 'should be div');

    actual = vdom.props.className;
    expect = 'main-layout';
    t.equal(actual, expect, 'main-layout');

    actual = typeof tree.dive(['.header-cont']);
    expect = 'object';
    t.equal(actual, expect, '.header-cont should be defined');

    actual = typeof tree.dive(['.body-cont']);
    expect = 'object';
    t.equal(actual, expect, 'body-cont list should be defined');

    t.end()
});

test('should render header container', t => {

    let tree, actual, expect;

    tree = sd.shallowRender(instance.renderHeaderContainer);

    actual = tree.getRenderOutput().type;
    expect = 'div';
    t.equal(actual, expect, 'should be div');

    actual = tree.getRenderOutput().props.className;
    expect = 'header-cont';
    t.equal(actual, expect, 'should be header-cont');

    actual = typeof tree.subTree('.left');
    expect = 'object';
    t.equal(actual, expect, '.left should be defined');

    actual = tree.subTree('h1').text();
    expect = 'Fun Metrics';
    t.equal(actual, expect, 'should be Fun Metrics');

    actual = typeof tree.dive(['user-logged.comp']);
    expect = 'object';
    t.equal(actual, expect, 'user-logged.comp should be defined');

    t.end()
});

test('should render body container', t => {

    const clonedState = R.clone(state);
    clonedState.isFetching = 'fetching all';
    setup (clonedState);


    let tree, actual, expect;

    tree = sd.shallowRender(instance.renderBodyCont);

    actual = tree.getRenderOutput().type;
    expect = 'div';
    t.equal(actual, expect, 'should be div');

    actual = tree.getRenderOutput().props.className;
    expect = 'body-cont';
    t.equal(actual, expect, 'should be body-cont');

    actual = typeof tree.subTree('.edit-cont');
    expect = 'object';
    t.equal(actual, expect, '.edit-cont should be defined');

    actual = typeof tree.subTree('.left');
    expect = 'object';
    t.equal(actual, expect, '.left should be defined');

    actual = typeof tree.dive(['.left', 'span']);
    expect = 'object';
    t.equal(actual, expect, '.div should be defined');

    actual = tree.dive(['.left', 'span']).props.className;
    expect = 'hide';
    t.equal(actual, expect, 'should be hide');

    actual = typeof tree.dive(['create-new-metric.comp']);
    expect = 'object';
    t.equal(actual, expect, 'create-new-metric.comp should be defined');

    actual = typeof tree.subTree('.right');
    expect = 'object';
    t.equal(actual, expect, '.right should be defined');

    actual = typeof tree.dive(['toggle-edit.comp']);
    expect = 'object';
    t.equal(actual, expect, 'toggle-edit.comp should be defined');

    actual = typeof tree.subTree('.loading-metrics');
    expect = 'object';
    t.equal(actual, expect, 'loading-metrics should be defined');

    actual = tree.dive(['.loading-metrics']).props.className;
    expect = 'loading-metrics show';
    t.equal(actual, expect, 'should be loading-metrics show');

    actual = typeof tree.subTree('.grid-items');
    expect = 'object';
    t.equal(actual, expect, '.grid-items should be defined');

    actual = tree.dive(['.grid-items']).props.className;
    expect = 'grid-items metrics-viewer hide';
    t.equal(actual, expect, 'should be grid-items metrics-viewer hide');

    actual = tree.everySubTree('.grid-item').length;
    expect = state.result.charts.length;
    t.equal(actual, expect, 'should be 2');

    actual = typeof tree.dive(['metric.comp']);
    expect = 'object';
    t.equal(actual, expect, 'metric.comp should be defined');

    t.end()
});


after('end', t => {
    t.pass('//------------------------------------------------//');
    t.end()
});
