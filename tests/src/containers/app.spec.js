 import test from 'blue-tape';
 import React from 'react';
 import mock from 'mock';
 import sd from 'skin-deep';
 import {App} from 'scripts/containers/app';
 import {
     state
 }
 from '../../mocks/mock';


 let before = test,
     after = test,
     comp,
     props,
     tree,
     vdom,
     instance,
     $ = React.createElement;


 const setup = props => {
     props = props;
     props.updateMetricData = () => false;
     props.deleteMetricData = () => false;
     props.createNewMetric = () => false;
     props.editMetrics = () => false;
     props.dispatch = () => false;
     props.saveMetricData = () => false;

     comp = $(App, props);
     tree = sd.shallowRender(comp);
     vdom = tree.getRenderOutput();
     instance = tree.getMountedInstance();
 };

 before('desc:', t => {
     t.pass('containers: app');
     t.end();
 });

 test('should render correctly', t => {

     setup(state);

     let actual, expect;

     actual = vdom.type;
     expect = 'div';
     t.equal(actual, expect, 'should be div');
     t.end();
 });

 test('MainSection should render correctly', t => {

     let actual, expect;

     actual = typeof tree.dive(['main.section']);
     expect = 'object';
     t.equal(actual, expect, 'should be defined');

     t.end();
 });

