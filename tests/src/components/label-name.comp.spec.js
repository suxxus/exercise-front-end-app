 import test from 'blue-tape';
 import React from 'react';
 import sd from 'skin-deep';
 import main from 'scripts/components/label-name.comp';

 let before = test,
     after = test,
     comp,
     tree,
     vdom,
     instance,
     $ = React.createElement;

 before('desc:', t => {
     t.pass('label-name');

     comp = $(main, {
         name: 'Julia'
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

     actual = tree.subTree('.label').text();
     expect = 'Julia';
     t.equal(actual, expect, 'should be Julia');

     t.end();
 });


 after('end', t => {
     t.pass('//------------------------------------------------//');
     t.end()
 });
