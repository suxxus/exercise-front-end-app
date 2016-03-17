 import test from 'blue-tape';
 import React from 'react';
 import sd from 'skin-deep';
 import main from 'scripts/components/metric-card.comp';
 import deepFreeze from 'deep-freeze';

 let before = test,
     after = test,
     props,
     comp,
     tree,
     vdom,
     instance,
     $ = React.createElement;

 const setup = (showWarning = false,
     isFetching = false,
     updatedMetricId = false) => {

     props = {
         comfirmDelete: () => false,
         id: 1,
         isFetching,
         updatedMetricId,
         chartSelected: 'pie',
         showWarning,
         'class-names': ['pie', 'line', 'area']
     };
 };

 const doComp = () => {

     comp = $(main, deepFreeze(props));
     tree = sd.shallowRender(comp);
     vdom = tree.getRenderOutput();
     instance = tree.getMountedInstance();
 };

 before('desc:', t => {
     t.pass('metric-card');

     setup();
     doComp();

     t.end();
 });

 test('should render correctly', t => {

     let actual, expect;

     actual = vdom.type;
     expect = 'div';
     t.equal(actual, expect, 'should be div');

     t.end();
 });

 test('should render messageSuccess', t => {

     let tree, actual, expect;

     tree = sd.shallowRender(instance.renderSuccessMsg())

     actual = tree.getRenderOutput().type;
     expect = 'div';
     t.equal(actual, expect, 'should be div');

     actual = tree.getRenderOutput().props.className;
     expect = 'msgs hide';
     t.equal(actual, expect, 'by default should be msg hide');

     setup(false, false, true);
     doComp();
     tree = sd.shallowRender(instance.renderSuccessMsg())

     actual = tree.getRenderOutput().props.className;
     expect = 'msgs';
     t.equal(actual, expect, 'should be msg');

     t.end();
 });

 test('should renderAjaxLoader', t => {

     let tree, actual, expect;

     setup(false, true, false);
     doComp();

     tree = sd.shallowRender(instance.renderAjaxLoader())

     actual = tree.getRenderOutput().type;
     expect = 'div';
     t.equal(actual, expect, 'should be div');

     actual = tree.getRenderOutput().props.className;
     expect = 'msgs';
     t.equal(actual, expect, 'by default should be msg hide');

     t.end();
 });


 test('should render warning - confirm message', t => {

     let tree, actual, expect;

     tree = sd.shallowRender(instance.renderWarningConfirm())

     actual = tree.getRenderOutput().type;
     expect = 'div';
     t.equal(actual, expect, 'should be div');

     actual = tree.getRenderOutput().props.className;
     expect = 'msgs hide';
     t.equal(actual, expect, 'by default should be msg hide');

     setup(true, false, false);
     doComp();
     tree = sd.shallowRender(instance.renderWarningConfirm())

     actual = tree.getRenderOutput().props.className;
     expect = 'msgs';
     t.equal(actual, expect, 'should be msgs');

     t.end();
 });

 test('should render charts', t => {

     setup();
     doComp();

     let tree, actual, expect;
     tree = sd.shallowRender(instance.renderCharts())

     actual = tree.getRenderOutput().type;
     expect = 'ul';
     t.equal(actual, expect, 'should be ul');

     actual = tree.everySubTree('li').length;
     expect = instance.props['class-names'].length;
     t.equal(actual, expect, 'should be 3');

     actual = tree.getRenderOutput().props.className;
     expect = 'img-cont show-pie';
     t.equal(actual, expect, 'img-cont show-pie');

     setup(true);
     doComp();
     tree = sd.shallowRender(instance.renderCharts())

     actual = tree.getRenderOutput().props.className;
     expect = 'img-cont show-pie hide';
     t.equal(actual, expect, 'showWarning is true, className should be img-cont show-pie hide');

     t.end()
 });

 test('confirmListener', t => {

     let actual, expect;

     actual = instance.confirmListener({
         target: {
             value: 'yes'
         }
     });
     expect = true;
     t.equal(actual, expect, 'should be true');

     t.end();
 });

 after('end', t => {
     t.pass('//------------------------------------------------//');
     t.end()
 });
