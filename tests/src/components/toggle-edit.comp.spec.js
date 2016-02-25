 import test from 'blue-tape';
 import React from 'react';
 import sd from 'skin-deep';
 import R from 'ramda';
 import main from 'scripts/components/toggle-edit.comp';

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

     comp = $(main, props);
     tree = sd.shallowRender(comp);
     vdom = tree.getRenderOutput();
     instance = tree.getMountedInstance();
 };

 before('desc:', t => {
     t.pass('toggle edit metrics');

     setup({
         editMetrics: () => false
     });
     t.end();
 });

 test('should render correctly', t => {

     let actual, expect;

     actual = vdom.type;
     expect = 'div';
     t.equal(actual, expect, 'should be div');

     actual = vdom.props.className;
     expect = 'edit-toggle';
     t.equal(actual, expect, 'should be edit-toggle');

     actual = tree.subTree('label').props.className;
     expect = 'label-switch';
     t.equal(actual, expect, 'should be label-switch');

     t.end();
 });

 test('renederLabel should render correctly', t => {

     const tree = sd.shallowRender(instance.renderLabel());
     let actual, expect;

     actual = tree.getRenderOutput().type;
     expect = 'label';
     t.equal(actual, expect, 'should be label');

     actual = typeof tree.subTree('input').props.onChange;
     expect = 'function';
     t.equal(actual, expect, 'should be a function');

     t.end();
 });

 after('end', function(t) {
     t.pass('//------------------------------------------------//');
     t.end()
 });
