import React from 'react';
import classnames from 'classnames';

export
default React.createClass({

    propTypes: {
            confirmDelete: React.PropTypes.func.isRequired,
            show: React.PropTypes.bool.isRequired
          },

    renderMessage() {
      return (
       <div className="card-message">
        <div className="warning">
          <h3>You are about to delete. Do you want to proceed?</h3><i className="fa fa-exclamation-triangle fa-3x" />
          <div className="confirm">
            <div className="wrapper">
              <div className="left">
                <button type="button" onClick={this.props.confirmDelete} value="yes">yes</button>
              </div>
              <div className="right">
                <button type="button" onClick={this.props.confirmDelete} value="no">no</button>
              </div>
            </div>
          </div>
        </div>
      </div>);
    },

    render() {
        return (
          <div className={classnames({'modal': true, 'display-modal': this.props.show})}>
            <div className="modal-bkg" />
            <div className={classnames({'msgs': true, 'modal-dialog': true, 'modal-dialog-transition': this.props.show, 'modal-dialog-transform': this.props.show})} >
            { this.renderMessage() }
            </div>
          </div>);
    }
});
