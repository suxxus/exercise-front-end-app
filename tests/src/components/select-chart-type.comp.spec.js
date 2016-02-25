 import test from 'blue-tape';
 import React from 'react';
 import sd from 'skin-deep';
 import main from 'scripts/components/select-chart-type.comp';

 let before = test,
     after = test,
     comp,
     tree,
     vdom,
     instance,
     $ = React.createElement;

 before('desc:', t => {
     t.pass('select chart type');

     comp = $(main, {
         itemClickListener: () => undefined,
         chartsType: [{
             id: 1,
             name: 'pie'
         }, {
             id: 2,
             name: 'line'
         }, {
             id: 3,
             name: 'area'
         }]
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
     expect = 'accordion select-mobile';
     t.equal(actual, expect, 'accordion select-mobile');

     actual = tree.subTree('a').text();
     expect = 'Select Chart type';
     t.equal(actual, expect, 'text should be Select Chart type');

     actual = typeof tree.subTree('a').props.onClick;
     expect = 'function';
     t.equal(actual, expect, 'onClick should be bound to function');

     t.end();
 });

 test('should render charts list', t => {

     const tree = sd.shallowRender(instance.renderChartsList);

     let actual, expect;

     actual = tree.getRenderOutput().type;
     expect = 'ul';
     t.equal(actual, expect, 'should be ul');

     actual = instance.renderChartsList().props.className;
     expect = 'submenu';
     t.equal(actual, expect, 'should be submenu');

     instance.toggleList({
         preventDefault: () => undefined
     });

     actual = instance.renderChartsList().props.className;
     expect = 'submenu show';
     t.equal(actual, expect, 'should be submenu show');

     actual = tree.everySubTree('li').length;
     expect = instance.props.chartsType.length;
     t.equal(actual, expect, 'should be 3 items');

     t.end();
 });

 test('should render list items', t => {

     const tree = sd.shallowRender(instance.renderListItems(instance.props.chartsType[0]));

     let actual, expect;

     actual = tree.getRenderOutput().type;
     expect = 'li';
     t.equal(actual, expect, 'should be li');

     actual = tree.subTree('i').props.className;
     expect = 'fa fa-pie-chart';
     t.equal(actual, expect, 'should be fa fa-pie-chart');

     actual = tree.subTree('span').text();
     expect = 'pie';
     t.equal(actual, expect, 'should be pie');

     actual = tree.subTree('a').props.id;
     expect = 1;
     t.equal(actual, expect, 'should be 1');

     actual = typeof tree.subTree('a').props.onClick;
     expect = 'function';
     t.equal(actual, expect, 'should be a function');

     t.end();
 });

 test('toggleList, should toggle show list', t => {

     instance.setState({
         'show-items': false
     });

     let actual, expect;
     actual = instance.state['show-items'];
     expect = false;
     t.equal(actual, expect, 'should be false');

     instance.toggleList({
         preventDefault: () => undefined
     });
     actual = instance.state['show-items'];
     expect = true;
     t.equal(actual, expect, 'should be true');

     t.end();
 });

 after('end', t => {
     t.pass('//------------------------------------------------//');
     t.end()
 });
