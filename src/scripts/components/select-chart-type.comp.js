import React from 'react';
import {not, map} from 'ramda';
import classnames from 'classnames';

export
default React.createClass({

    getInitialState() {
            return {
                'show-items': false
            };
        },

        propTypes: {
            itemClickListener: React.PropTypes.func.isRequired,
            chartsType: React.PropTypes.array.isRequired
        },

        clickItemListener(e) {
            const id = Number(e.target.id);
            this.props.itemClickListener(id);
            e.preventDefault();
        },

        toggleList(e) {
            this.setState({
                'show-items': not(this.state['show-items'])
            });
            e.preventDefault();
        },

        renderListItems(value) {
            return (<li key={'ct_' + value.id}>
                      <a id={value.id} href="javascript:void(0)" onClick={this.clickItemListener}>
                        <i className={'fa fa-' + value.name + '-chart'}></i>
                        <span>{value.name}</span>
                      </a>
              </li>);
        },

        renderChartsList() {
            return (<ul className={'submenu' + classnames({' show': this.state['show-items'] }) }>
               {map(item => this.renderListItems(item), this.props.chartsType)}
              </ul>);
        },

        render() {
            return (<ul className="accordion select-mobile">
                        <li>
                          <a href="javascript:void(0)" onClick={this.toggleList}>Select Chart type</a>
                          {this.renderChartsList()}
                        </li>
                      </ul>);
        }
});
