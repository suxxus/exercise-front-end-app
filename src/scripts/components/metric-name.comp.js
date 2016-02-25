import React from 'react';
import { F, equals, ifElse, not } from 'ramda';
import 'babel-polyfill';
import classnames from 'classnames';

export
default React.createClass({
    getInitialState() {
            return {
                isEditable: true,
                name: this.props.name
            };
        },

        propTypes: {
            name: React.PropTypes.string.isRequired,
            nameChangeHandler: React.PropTypes.func.isRequired
        },

        componentDidMount() {

            const isNewMetric = equals(''),
                showInputName = ifElse(
                    isNewMetric,
                    this.editClickListener,
                    F
                );

            showInputName(this.props.name);
        },

        componentWillReceiveProps(next){
          this.setState({name: next.name});
        },

        onChangeHandler(e) {
            this.setState({name: e.target.value.trim()});
        },

        onBlurHandler(){
           this.isEditable();
           this.props.nameChangeHandler(this.state.name);
         },

        editClickListener() {

            const toggleEditable = not(this.state.isEditable),
              p = new Promise(resolve => {
                this.isEditable(toggleEditable);
                resolve();
            });

            p.then(() => {
                this.refs.editMetricName.focus();
            });
        },

        onKeyDownHandler(e) {

            const enterKey = equals(13),
                keyDown = ifElse(
                    enterKey,
                    () => this.onBlurHandler(),
                    F);

            keyDown(e.which);
        },

        isEditable(value = true) {
            this.setState({
                isEditable: value
            });
        },

        // ------------------------------------------
        renderLabel() {
            return (
                <div className={'name editable' + classnames({' show': this.state.isEditable})}
                     onClick={this.editClickListener}>
                    <span className="label">
                        {this.state.name}
                    </span>
                    <div>
                        <i className="fa fa-pencil-square-o fa-lg" />
                    </div>
                </div>);
        },

        renderEdit() {
            return (
                <div className={'edit' + classnames({' show': not(this.state.isEditable)})}>
                <input
                    type="text"
                    ref="editMetricName"
                    placeholder="metric name"
                    value={this.state.name}
                    autoFocus="true"
                    onKeyDown={this.onKeyDownHandler}
                    onChange={this.onChangeHandler}
                    onBlur={this.onBlurHandler}
                    />
                <div className="tooltip" onClick={this.editClickListener}>
                    <i className="fa fa-check-square fa-lg" />
                </div>
            </div>);
        },

        render() {
            return (
                <div className="metric-name">
                    {this.renderLabel()}
                    {this.renderEdit()}
                </div>);
        }
});
