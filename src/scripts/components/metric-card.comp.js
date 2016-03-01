import React from 'react';
import {equals, not, addIndex, map, whereEq} from 'ramda';
import classnames from 'classnames';
export
default React.createClass({

    getInitialState() {
            return {
                hideCharts: false
            };
        },

        propTypes: {
            comfirmDelete: React.PropTypes.func.isRequired,
            id: React.PropTypes.number.isRequired,
            isFetching: React.PropTypes.bool.isRequired,
            updatedMetricId: React.PropTypes.bool.isRequired,
            showWarning: React.PropTypes.bool.isRequired,
            chartSelected: React.PropTypes.string.isRequired,
            'class-names': React.PropTypes.array.isRequired
        },

        confirmListener(e) {
            const deleteMetric = equals('yes');
            this.props.comfirmDelete(deleteMetric(e.target.value));
            return deleteMetric(e.target.value);
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

        renderWarningConfirm() {

            const hideWarningMessage = value => not(value);

            return (<div className={'msgs' + classnames({' hide': hideWarningMessage(this.props.showWarning)})}>
                  <div className="card-message">
                    <div className="warning">
                      <h3>You are about to delete. Do you want to proceed?</h3><i className="fa fa-exclamation-triangle fa-3x" />
                      <div className="confirm">
                        <div className="wrapper">
                          <div className="left">
                            <button value="yes" type="button" onClick={this.confirmListener}>yes</button>
                          </div>
                          <div className="right">
                            <button value="no" type="button" onClick={this.confirmListener}>no</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>);
        },

        renderCharts() {

                const pred = whereEq({
                  showWarning: false,
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
                                {this.renderWarningConfirm()}
                                {this.renderCharts()}
                             </div>
                            </div>
                        </div>
                      </div>
                    </div>);
        }
});
