 import test from 'blue-tape';
 import React from 'react';
 import sd from 'skin-deep';
 import main from 'scripts/components/create-new-metric.comp';

 let before = test,
     after = test,
     comp,
     tree,
     vdom,
     instance,
     $ = React.createElement;

 before('desc:', t => {
     t.pass('create new metric');

     comp = $(main, {
         createNewMetric: () => false
     });

     tree = sd.shallowRender(comp);
     vdom = tree.getRenderOutput();
     instance = tree.getMountedInstance();

     t.end();
 });

 test('should render correctly', t => {

     let actual, expect;

     actual = vdom.type;
     expect = 'div';
     t.equal(actual, expect, 'should be div');

     actual = typeof vdom.props.onClick;
     expect = 'function';
     t.equal(actual, expect, 'should be function');

     actual = tree.subTree('p').text();
     expect = 'Click to create new metric';
     t.equal(actual, expect, 'should be create new metric');


     t.end();
 });

 after('end', t => {
     t.pass('//------------------------------------------------//');
     t.end()
 });
