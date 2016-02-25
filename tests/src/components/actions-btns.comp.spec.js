 import test from 'blue-tape';
 import React from 'react';
 import sd from 'skin-deep';
 import main from 'scripts/components/actions-btns.comp';

 let before = test,
     after = test,
     comp,
     tree,
     vdom,
     instance,
     $ = React.createElement;

 before('desc:', t => {
     t.pass('save cancel actions');

     comp = $(main, {
         confirmAction: () => undefined
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

     t.end();
 });

 test('should render cancel btn', t => {

     const tree = sd.shallowRender(instance.renderCancelBtn());

     let actual, expect;

     actual = tree.getRenderOutput().type;
     expect = 'div';
     t.equal(actual, expect, 'should be div');

     actual = tree.subTree('button').text();
     expect = 'cancel';
     t.equal(actual, expect, 'should be save');

     actual = typeof tree.subTree('button').props.onClick;
     expect = 'function';
     t.equal(actual, expect, 'should be function');

     t.end();
 });

 test('should render save btn', t => {

     const tree = sd.shallowRender(instance.renderSaveBtn());

     let actual, expect;

     actual = tree.getRenderOutput().type;
     expect = 'div';
     t.equal(actual, expect, 'should be div');

     actual = tree.subTree('button').text();
     expect = 'save';
     t.equal(actual, expect, 'should be save');

     actual = typeof tree.subTree('button').props.onClick;
     expect = 'function';
     t.equal(actual, expect, 'should be function');

     t.end();
 });

 after('end', t => {
     t.pass('//------------------------------------------------//');
     t.end()
 });
