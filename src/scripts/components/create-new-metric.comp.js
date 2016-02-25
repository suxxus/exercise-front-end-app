import React from 'react';
export
default React.createClass({

        propTypes: {
            createNewMetric: React.PropTypes.func.isRequired
        },

        clickListener() {
            this.props.createNewMetric();
        },

        render() {
            return (
                <div className="tooltip-item new-metric" onClick={this.clickListener}>new metric
                    <div className="tooltip">
                    <p>Click to create new metric</p>
                </div>
            </div>);
        }
});
