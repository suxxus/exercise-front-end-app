import React from 'react';
import { map, merge, not, equals } from 'ramda';
import classnames from 'classnames';
import {FETCHING_ALL} from '../constants/actions';

import UserLogged from './user-logged.comp';
import EditToggle from './toggle-edit.comp';
import CreateNewMetric from './create-new-metric.comp';
import Metric from './metric.comp';

export
default React.createClass({

    propTypes: {
        editMetrics: React.PropTypes.func.isRequired,
        createNewMetric: React.PropTypes.func.isRequired,
        updateMetricData: React.PropTypes.func.isRequired,
        saveMetricData: React.PropTypes.func.isRequired,
        deleteMetricData: React.PropTypes.func.isRequired
    },

    /*
    |-------------------------------------------
    | renders
    |-------------------------------------------
    */
    renderHeaderContainer() {

        return (<div className="header-cont">
                        <div className="left">
                            <h1 className="logo">Fun Metrics</h1>
                        </div>
                        <div className="right">
                            <UserLogged user={this.props.user} />
                        </div>
                    </div>);
    },

    renderBodyCont() {

        const {
            editable,
            isFetching,
            editMetrics,
            createNewMetric,
            result
        } = this.props,

            listMetrics = () => {
                const metric = chartIndex => React.createElement(Metric,
                    merge({
                        chartIndex
                    }, this.props));

                return map(idx => <div className="grid-item" key={'metric_' + idx}>{metric(idx)}</div>, result.charts);
            };
        return (
            <div className="body-cont">
                    <div className="edit-cont">
                      <div className="left">
                          <span className={classnames({'hide': not(editable)})}>
                              <CreateNewMetric createNewMetric={createNewMetric}/>
                          </span>
                      </div>
                      <div className="right">
                        <EditToggle editMetrics={editMetrics} editable={editable}/>
                      </div>
                    </div>
                    <div className={'loading-metrics' + classnames({' show': equals(isFetching, FETCHING_ALL) })}>
                      <p></p>
                      <div className="ajax-loader"></div>
                    </div>
                    <div className={'grid-items metrics-viewer' + classnames({' hide': equals(isFetching, FETCHING_ALL) }) }>
                      {listMetrics()}
                    </div>
                </div>
        );
    },

    render() {
        return (
            <div className="main-layout">
                  {this.renderHeaderContainer()}
                  {this.renderBodyCont()}
                </div>);
    }
});
