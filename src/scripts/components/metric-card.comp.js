import React from 'react';
import {equals, not, addIndex, map, whereEq} from 'ramda';
import classnames from 'classnames';
export
default React.createClass({


        propTypes: {
            id: React.PropTypes.number.isRequired,
            isFetching: React.PropTypes.bool.isRequired,
            updatedMetricId: React.PropTypes.bool.isRequired,
            chartSelected: React.PropTypes.string.isRequired,
            'class-names': React.PropTypes.array.isRequired
        },

        renderSuccessMsg() {
            return (
                <div className={'msgs' + classnames({' hide': not(this.props.updatedMetricId)})}>
                  <div className="card-message">
                    <div className="success">
                      <h3>Updated</h3>
                      <i className="fa fa-check-circle fa-3x" /></div>
                  </div>
                </div>
            );
        },

        renderAjaxLoader() {
            return (
                <div className={'msgs' + classnames({' hide': not(this.props.isFetching)})}>
                  <div className="card-message">
                    <div className="ajax-loader" />
                  </div>
                </div>
            );
        },

        renderCharts() {

                const pred = whereEq({
                  isFetching: false,
                  updatedMetricId: false
                }),

                hideCharts = not(pred(this.props));

            return (<ul id="charts-cont" className={'img-cont show-' + this.props.chartSelected + classnames({' hide': hideCharts})}>
                  {addIndex(map)((item, idx) => <li className={item} key={'chart_' + idx} />, this.props['class-names'])}
                </ul>);
        },
        render() {
            return (<div className="mc-chart">
                      <div className="metric-card">
                        <div className="cards">
                            <div className="card">
                             <div className="card-image">
                                {this.renderAjaxLoader()}
                                {this.renderSuccessMsg()}
                                {this.renderCharts()}
                             </div>
                            </div>
                        </div>
                      </div>
                    </div>);
        }
});
