import React from 'react';
export
default React.createClass({

    propTypes: {
        editMetrics: React.PropTypes.func.isRequired
    },

    checkListener() {
        this.props.editMetrics();
    },

    renderLabel() {
        return (
            <label className="label-switch">
                      <input type="checkbox"
                        ref="editCheckBox"
                        onChange={this.checkListener}
                         />
                      <div className="checkbox" />
                    </label>
        );
    },

    render() {
        return (
            <div className="edit-toggle">
                    <span>edit</span>
                    {this.renderLabel()}
        </div>);
    }
});
