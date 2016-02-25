import React from 'react';
export
default React.createClass({

    propTypes: {
        user: React.PropTypes.string
    },

    render () {
        return (<div className='user-logged'>
                  <div className='pic-user'>
                      <i className='fa fa-user fa-2x' />
                      <div className='user'>
                          <p>{this.props.user}</p>
                        </div>
                  </div>
                </div>);
    }
});
