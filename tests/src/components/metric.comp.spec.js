import test from 'blue-tape';
import React from 'react';
import sd from 'skin-deep';
import R from 'ramda';
import main from 'scripts/components/metric.comp';
import {
    state, stateShapes, ConstantsActions
}
from '../../mocks/mock';

let before = test,
    after = test,
    props,
    comp,
    tree,
    vdom,
    instance,
    $ = React.createElement;

const mockUpdateMetricData = (value) => {
    const chart = R.merge(state.entities.charts[String(value.id)], value.data);
    state.entities.charts[String(value.data.id)] = chart;
};

const mockSaveMericData = (value) => {
    const chart = R.merge(state.entities.charts[String(value.id)], value.data);
    state.entities.charts[String(value.data.id)] = chart;
};

const setup = (state, chartIndex) => {

    props = state;
    props.updateMetricData = mockUpdateMetricData;
    props.saveMetricData = mockSaveMericData;
    props.deleteMetricData = R.F;
    props.chartIndex = chartIndex;

    comp = $(main, props);
    tree = sd.shallowRender(comp);
    vdom = tree.getRenderOutput();
    instance = tree.getMountedInstance();
};

before('desc:', t => {
    t.pass('componets: metric.component');
    setup(state, 1);
    t.end();
});

test('should render correctly', t => {

    let actual, expect;

    actual = vdom.type;
    expect = 'div';
    t.equal(actual, expect, 'should be div');

    actual = vdom.props.className;
    expect = 'metric-component';
    t.equal(actual, expect, 'should be metric-component');

    setup(R.assoc('editable', true, state), 1);

    actual = vdom.props.className;
    expect = 'metric-component edit-mode';
    t.equal(actual, expect, 'should be metric-component edit-mode');

    actual = typeof tree.dive(['.mc-header']);
    expect = 'object';
    t.equal(actual, expect, 'header sould be defined');

    actual = typeof tree.dive(['.mc-edit']);
    expect = 'object';
    t.equal(actual, expect, ' sould be defined');

    actual = typeof tree.dive(['.mc-chart']);
    expect = 'object';
    t.equal(actual, expect, 'mc-chart sould be defined');

    actual = typeof tree.dive(['.metadata']);
    expect = 'object';
    t.equal(actual, expect, 'metadata sould be defined');

    t.end();
});

test('should render metric header', t => {

    setup(state, 1);

    let tree = sd.shallowRender(instance.renderHeader),
        actual, expect;

    actual = tree.getRenderOutput().type;
    expect = 'div';
    t.equal(actual, expect, 'should be div');

    actual = tree.getRenderOutput().props.className;
    expect = 'mc-header';
    t.equal(actual, expect, 'should be mc-header');

    //------------------------------------------------
    actual = typeof tree.subTree('.right');
    expect = 'object';
    t.equal(actual, expect, 'label element should be defined');

    actual = tree.subTree('.right').props.className;
    expect = 'right';
    t.equal(actual, expect, 'should be right');

    actual = typeof tree.dive(['label-name.comp']);
    expect = 'object';
    t.equal(actual, expect, 'label element should be defined');

    actual = tree.dive(['label-name.comp', '.label']).text();
    expect = 'Susy';
    t.equal(actual, expect, 'should be Susy');

    setup(R.assoc('editable', true, state), 1);
    tree = sd.shallowRender(instance.renderHeader);

    //-------------------------------------------------
    actual = typeof tree.subTree('.name-editable-r');
    expect = 'object';
    t.equal(actual, expect, 'element editable name should be defined');

    actual = tree.subTree('.name-editable-r').props.className;
    expect = 'name-editable-r right';
    t.equal(actual, expect, 'prop.editable = true, should be name-editable-r right');

    actual = typeof tree.dive(['metric-name.comp']);
    expect = 'object';
    t.equal(actual, expect, 'editable metric name should be defined');

    actual = tree.dive(['metric-name.comp', '.label']).text();
    expect = 'Susy'
    t.equal(actual, expect, 'should be Susy');

    //-------------------------------------------------
    actual = typeof tree.subTree('.left');
    expect = 'object';
    t.equal(actual, expect, 'delete metric button element should be defined');

    actual = tree.subTree('.left').props.className;
    expect = 'left';
    t.equal(actual, expect, 'prop.editable = true, should be name-editable-r left');

    actual = typeof tree.dive(['delete-metric.comp']);
    expect = 'object';
    t.equal(actual, expect, 'deletemetric element should be defined');

    t.end();
});

test('should render metric select charts actions buttons', t => {

    let tree, actual, expect;

    setup(state, 1);
    tree = sd.shallowRender(instance.renderChartsActionsBtns);

    actual = tree.getRenderOutput().type;
    expect = 'div';
    t.equal(actual, expect, 'should be div');

    actual = tree.getRenderOutput().props.className;
    expect = 'mc-edit hide';
    t.equal(actual, expect, 'should be mc-edit hide');

    setup(R.assoc('editable', true, state), 1);
    tree = sd.shallowRender(instance.renderChartsActionsBtns);

    actual = tree.getRenderOutput().props.className;
    expect = 'mc-edit';
    t.equal(actual, expect, 'should be mc-edit');

    actual = typeof tree.subTree('.mobile');
    expect = 'object';
    t.equal(actual, expect, 'select chart container must be defined');

    actual = typeof tree.dive(['select-chart-type.comp']);
    expect = 'object';
    t.equal(actual, expect, 'selectChart element should be defined');

    //---------------------------------------------------
    setup(state, 1);
    tree = sd.shallowRender(instance.renderChartsActionsBtns);

    actual = tree.getRenderOutput().props.className;
    actual = typeof tree.subTree('.metric-actions-btns');
    expect = 'object';
    t.equal(actual, expect, 'actions btns container must be defined');

    actual = tree.subTree('.metric-actions-btns').props.className;
    expect = 'metric-actions-btns hide';
    t.equal(actual, expect, 'className should be metric-actions-btns hide');

    instance.setState({
      'name': ''
    });

    tree = sd.shallowRender(instance.renderChartsActionsBtns);
    actual = tree.subTree('.metric-actions-btns').props.className;
    expect = 'metric-actions-btns';
    t.equal(actual, expect, 'className should be metric-actions-btns');

    actual = typeof tree.dive(['actions-btns.comp']);
    expect = 'object';
    t.equal(actual, expect, 'actions-btns element should be defined');

    t.end();
});

test('should render metric card', t => {

    let tree, actual, expect;

    tree = sd.shallowRender(instance.renderMetricCard);

    actual = tree.getRenderOutput().type;
    expect = 'div';
    t.equal(actual, expect, 'should be div');

    actual = typeof tree.dive(['metric-card.comp']);
    expect = 'object';
    t.equal(actual, expect, 'selectChart element should be defined');

    actual = tree.dive(['metric-card.comp', '#charts-cont']).props.className;
    expect = 'img-cont show-pie';
    t.equal(actual, expect, 'should be img-cont show-pie');

    instance.setState({
        chartType: 2
    });
    tree = sd.shallowRender(instance.renderMetricCard);

    actual = tree.dive(['metric-card.comp', '#charts-cont']).props.className;
    expect = 'img-cont show-line';
    t.equal(actual, expect, 'should be img-cont show-line');

    t.end();
});

test('should render meta data', t => {

    setup(state, 1);

    let tree, actual, expect;

    tree = sd.shallowRender(instance.renderMetadata);

    actual = tree.getRenderOutput().type;
    expect = 'div';
    t.equal(actual, expect, 'should be div');

    actual = tree.getRenderOutput().props.className;
    expect = 'metadata';
    t.equal(actual, expect, 'should be metadata');

    actual = typeof tree.dive(['metric-info-metadata.comp']);
    expect = 'object';
    t.equal(actual, expect, 'info should be defined');

    t.end();
});

test('utilities should return chart props', t => {

    let actual, expect;

    actual = instance.utilityStateChart(),
        expect = state.entities.charts[1];
    t.deepEqual(actual, expect, 'should return chart object');

    actual = instance.utilityStateChartTypes(),
        expect = state.entities.chartTypes;
    t.deepEqual(actual, expect, 'should return chartTypes object');

    actual = instance.utilityStateChartMetadata(),
        expect = state.entities.metadata[1];
    t.deepEqual(actual, expect, 'should return metadata object');

    t.end();
});


test('selectChart', t => {
    instance.selectChart(2);
    const actual = instance.state.chartType,
        expect = 2;
    t.deepEqual(actual, expect, 'should return 2');

    t.end();
});

test('changeName', t => {

    instance.changeName('Augusto');
    const actual = instance.state.name,
        expect = 'Augusto';
    t.deepEqual(actual, expect, 'should be Augusto');

    t.end();
});

test('undoChanges', t => {

    let actual, expect;

    instance.setState({
        name: 'pedro',
        chartType: 2,
        showWarning: true
    });

    instance.undoChanges();

    actual = instance.state;
    expect = {
        name: state.entities.charts['1'].name,
        chartType: state.entities.charts['1'].chartType,
        showWarning: false
    };
    t.deepEqual(actual, expect, 'should undoChanges');

    t.end();
});

test('saveChanges', t => {

    let actual, expect;

    setup(state, 2);

    instance.setState({
        name: 'peter',
        chartType: 2,
        showWarning: false
    });

    instance.saveChanges();

    actual = state.entities.charts[2];
    expect = {
        id: 2,
        name: 'peter',
        chartType: 2
    };

    t.deepEqual(actual, expect, 'should update changes');

    const newMetric = stateShapes.chartShape;
    newMetric.id = 3;
    newMetric.chartType = 2;
    newMetric.name = 'Ilaron';
    state.entities.charts[3] = newMetric;
    setup(state, 3);

    instance.saveChanges();
    actual = state.entities.charts[3];
    expect = {
        id: 3,
        name: 'Ilaron',
        chartType: 2
    };

    t.deepEqual(actual, expect, 'should save changes');

    t.end();
});

test('metricWillBeDeleted', t => {

    setup(state, 1);
    let actual, expect;

    instance.metricWillBeDeleted();

    actual = instance.state.showWarning;
    expect = true;
    t.equal(actual, expect, 'showWarning should be true');

    t.end();
});

after('end', t => {
    t.pass('//------------------------------------------------//');
    t.end()
});
