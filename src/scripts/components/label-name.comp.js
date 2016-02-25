import React from 'react';

export
default React.createClass({

        propTypes: {
            name: React.PropTypes.string.isRequired
        },

        render() {
            return (
                <div className="metric-name">
                  <div className="name show">
                    <span className="label">{this.props.name}</span>
                  </div>
                </div>);
        }
});

