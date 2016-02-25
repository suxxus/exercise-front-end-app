 import test from 'tape';
 import React from 'react';
 import sd from 'skin-deep';
 import main from 'scripts/components/user-logged.comp';


 let before = test,
     after = test,
     tree,
     vdom,
     instance,
     $ = React.createElement;

 before('desc:', t => {
     t.pass('user-logged comp');
     t.end();
 });

 test('should render correctly', t => {

     var comp = $(main, {
             user: 'mail@mail.com'
         }),
         actual, expect;

     tree = sd.shallowRender(comp);
     vdom = tree.getRenderOutput();
     instance = tree.getMountedInstance();

     actual = vdom.type;
     expect = 'div';
     t.equal(actual, expect, 'should be div');

     actual = vdom.props.className;
     expect = 'user-logged';
     t.equal(actual, expect, 'should be user-logged');

     actual = tree.subTree('p').text();
     expect = 'mail@mail.com';
     t.equal(actual, expect, 'should be mail@mail.com');

     t.end();
 });

 test('end', function(t) {
     t.pass('//------------------------------------------------//');
     t.end()
 });
