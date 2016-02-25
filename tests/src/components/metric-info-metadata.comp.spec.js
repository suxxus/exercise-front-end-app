 import test from 'blue-tape';
 import React from 'react';
 import sd from 'skin-deep';
 import main from 'scripts/components/metric-info-metadata.comp';

 let before = test,
     after = test,
     comp,
     tree,
     vdom,
     instance,
     $ = React.createElement;

 before('desc:', t => {
     t.pass('metric-info-metadata');

     comp = $(main, {
         metadata: {
             id: 1,
             limit:'limit riched: 500' ,
             updates: '125 updates',
             message: 'monthly resolution'
         }
     });

     tree = sd.shallowRender(comp);
     vdom = tree.getRenderOutput();
     instance = tree.getMountedInstance();

     t.end();
 });

 test('should render correctly', t => {

     let actual, expect;

     actual = vdom.type;
     expect = 'ul';
     t.equal(actual, expect, 'should be ul');

     actual = vdom.props.className;
     expect = 'info-metadata';
     t.equal(actual, expect, 'should be info-metadata');

     actual = tree.everySubTree('li').length;
     expect = Object.keys(instance.props.metadata).filter(item => item !== 'id').length;
     t.equal(actual, expect, 'should be 3');
     t.end();
 });

 after('end', t => {
     t.pass('//------------------------------------------------//');
     t.end()
 });
