import React from 'react';
import classnames from 'classnames';
import { equals, ifElse, omit, values, assoc, not, and, map, prop } from 'ramda';
import MetricLabel from './label-name.comp';
import MetricName from './metric-name.comp';
import DeleteMetric from './delete-metric.comp';
import SelectChart from './select-chart-type.comp';
import Actionsbtns from './actions-btns.comp';
import MetricCard from './metric-card.comp';
import Info from './metric-info-metadata.comp';

import { SAVE_METRIC, UNDO_CHANGES} from '../constants/actions';

export
default React.createClass({

    getInitialState() {
            const {
                name,
                chartType,
            } = this.utilityStateChart(),

            { editable } = this.props;

            return {
                name,
                chartType,
                editable,
                isFetching: false,
                updatedMetricId: false,
                showWarning: false
            };
        },

        propTypes: {
            updateMetricData: React.PropTypes.func.isRequired,
            saveMetricData: React.PropTypes.func.isRequired,
            deleteMetricData: React.PropTypes.func.isRequired,
            chartIndex: React.PropTypes.number.isRequired
        },

        componentWillReceiveProps(next){

          const { chartIndex, editable, isFetching, updatedMetricId } = next,
              { name, chartType } = prop(chartIndex, next.entities.charts);

          this.setState({
            name: name,
            chartType: chartType,
            editable: editable,
            isFetching: equals(String(chartIndex), isFetching),
            updatedMetricId: equals(chartIndex, updatedMetricId),
            showWarning: false
          });
        },

        shouldComponentUpdate(nextProps, nextState){
            const stateNotEq = not(equals(this.state, nextState));
            return stateNotEq;
        },

        utilityStateChart() {
            return prop(this.props.chartIndex, this.props.entities.charts);
        },

        utilityStateChartTypes() {
            return prop('chartTypes', this.props.entities);
        },

        utilityStateChartMetadata() {
            return this.props.entities.metadata[this.props.chartIndex];
        },

        selectChart(id) {
            this.setState({
                chartType: id
            });
        },

        changeName(name) {
            this.setState({
                name
            });
        },

        deleteMetric(value) {

            const setShowWarning = () => {
                    this.setState({
                        showWarning: false
                    });
                },

                deleteMetricHandler = () => {
                    const metricId = this.utilityStateChart().id;
                    this.props.deleteMetricData({
                        userId: this.props.userId,
                        metricId
                    });
                },

                confirmDeleteMetric = equals(true),

                action = ifElse(
                    confirmDeleteMetric,
                    deleteMetricHandler,
                    setShowWarning
                );

            action(value);
        },

        undoChanges() {
            this.setState({
                name: this.utilityStateChart().name,
                chartType: this.utilityStateChart().chartType,
                showWarning: false
            });
        },

        saveChanges() {
            // save/update metric
            const toOmitFromState = omit(['showWarning', 'editable', 'isFetching', 'updatedMetricId']),
             value = {
                    userId: this.props.userId,
                    data: assoc('id', this.utilityStateChart().id,
                       toOmitFromState(this.state))
                },

                isNewMetric = equals(true),

                action = ifElse(
                    isNewMetric,
                    () => this.props.saveMetricData,
                    () => this.props.updateMetricData
                );

            action(this.utilityStateChart().isNew)(value);

        },

        confirmAction(value) {
            //save & cancel (actions buttons)
            const actions = {
                [UNDO_CHANGES]: this.undoChanges, [SAVE_METRIC]: this.saveChanges
            };
            actions[value]();
        },

        metricWillBeDeleted() {
            this.setState({
                showWarning: true
            });
        },

        /*
        |-------------------------------------------
        | renders
        |------------------------------------------
        */
        renderHeader() {

            const deleteMetric = React.createElement(DeleteMetric, {
                    delteteMetric: this.metricWillBeDeleted
                }),

                metricLabel = React.createElement(MetricLabel, {
                    name: this.state.name
                }),

                metricName = React.createElement(MetricName, {
                    name: this.state.name,
                    nameChangeHandler: this.changeName
                });


            return (
                <div className="mc-header">
                    <div className={'right' + classnames({' hide': this.state.editable} )}>
                        {metricLabel}
                    </div>
                    <div className={classnames({'name-editable-r': true, 'right': true, 'hide': not(this.state.editable)})}>
                        {metricName}
                    </div>
                    <div className={'left' + classnames({' hide': not(this.state.editable)})}>
                        {deleteMetric}
                    </div>
                </div>
            );
        },

        renderChartsActionsBtns() {
            //select chart types, show save cancel buttons

            const selectChart = React.createElement(SelectChart, {
                    itemClickListener: this.selectChart,
                    chartsType: values(this.utilityStateChartTypes())
                }),

                actionsBtns = React.createElement(Actionsbtns, {
                    confirmAction: this.confirmAction
                }),

                hideMetricActionsBtns = () => and(
                    equals(this.utilityStateChart().name, this.state.name),
                    equals(this.utilityStateChart().chartType, this.state.chartType));

            return (
                <div className={'mc-edit' + classnames({' hide': not(this.state.editable)})}>
                    <div className="mobile">
                        {selectChart}
                    </div>
                    <div className={'metric-actions-btns' + classnames({' hide': hideMetricActionsBtns() })}>
                        {actionsBtns}
                    </div>
                </div>
            );
        },

        renderMetricCard() {

            const metricCard = React.createElement(MetricCard, {
                comfirmDelete: this.deleteMetric,
                id: this.props.chartIndex,
                isFetching: this.state.isFetching,
                updatedMetricId: this.state.updatedMetricId,
                showWarning: this.state.showWarning,
                chartSelected: this.utilityStateChartTypes()[String(this.state.chartType)].name,
                'class-names': map(item => item.name, values(this.utilityStateChartTypes()))
            });

            return (<div className="mc-chart">
                        {metricCard}
                    </div>);
        },

        renderMetadata() {

            const info = React.createElement(Info, {
                metadata: this.utilityStateChartMetadata()
            });

            return (<div className={'metadata' + classnames({' hide': this.state.editable})}>
                        {info}
                    </div>);
        },

        render() {
            return (
                <div className={'metric-component' + classnames({' edit-mode': this.state.editable}) }>
                  {this.renderHeader()}
                  {this.renderChartsActionsBtns()}
                  {this.renderMetricCard()}
                  {this.renderMetadata()}
                </div>);
        }
});
