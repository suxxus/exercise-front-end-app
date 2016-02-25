import React from 'react';

export
default React.createClass({

        propTypes: {
            delteteMetric: React.PropTypes.func.isRequired
        },

        clickListener() {
            this.props.delteteMetric();
        },

        render() {
            return (<button type="button"
                        className="deletemetric"
                        onClick={this.clickListener}>
                      <i className="fa fa-times" /></button>);
        }
});
