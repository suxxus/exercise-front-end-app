 import test from 'blue-tape';
 import React from 'react';
 import sd from 'skin-deep';
 import main from 'scripts/components/delete-metric.comp';

 let before = test,
     after = test,
     comp,
     tree,
     vdom,
     instance,
     $ = React.createElement;

 before('desc:', t => {
     t.pass('delete metric');

     comp = $(main, {
         delteteMetric: () => undefined
     });

     tree = sd.shallowRender(comp);
     vdom = tree.getRenderOutput();
     instance = tree.getMountedInstance();

     t.end();
 });

 test('should render correctly', t => {

     let actual, expect;

     actual = vdom.type;
     expect = 'button';
     t.equal(actual, expect, 'should be button');

     actual = typeof vdom.props.onClick;
     expect = 'function';
     t.equal(actual, expect, 'should be function');

     t.end();
 });


 after('end', t => {
     t.pass('//------------------------------------------------//');
     t.end()
 });
