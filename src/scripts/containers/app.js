import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MainSection from '../components/main.section';
import {editMetrics} from '../actions/edit-metrics';
import {deleteMetricData} from '../actions/delete-metric';
import {createNewMetric} from '../actions/create-metric';
import {updateMetricData} from '../actions/update-metric';
import {saveMetricData} from '../actions/save-metric';
import {fetchMetricsIfNeeded} from '../actions/recive-metrics';

export const App = React.createClass({

    propTypes: {
        dispatch: React.PropTypes.func.isRequired
    },

    componentDidMount() {
        const {
            dispatch, userId
        } = this.props;


        dispatch(fetchMetricsIfNeeded(userId));
    },

    render() {
        return (<div>
                  <MainSection {...this.props} />
                </div>);
    }
});

const mapStateToProps = state => state.metrics,
    mapDispatchToProps = dispatch => (bindActionCreators({
        editMetrics,
        deleteMetricData,
        createNewMetric,
        updateMetricData,
        saveMetricData
    }, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(App);
