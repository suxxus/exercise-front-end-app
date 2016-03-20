import React from 'react';
import classnames from 'classnames';

export
default React.createClass({

    propTypes: {
            comfirmDelete: React.PropTypes.func.isRequired,
            show: React.PropTypes.bool.isRequired
          },

    renderMessage() {
      return (
       <div className="card-message">
        <div className="warning">
          <h3>You are about to delete. Do you want to proceed?</h3><i className="fa fa-exclamation-triangle fa-3x" />
          <div className="confirm">
            <div className="wrapper">
              <div className="left" id="yes">
                <button type="button" onClick={this.props.comfirmDelete} value={true}>yes</button>
              </div>
              <div className="right" id="no">
                <button type="button" onClick={this.props.comfirmDelete} value={false}>no</button>
              </div>
            </div>
          </div>
        </div>
      </div>);
    },

    render() {
        return (
          <div className="modal">
            <div className={classnames({'modal-bkg': true, 'opacity-show': this.props.show})} />
            <div className={classnames({'msgs': true, 'modal-dialog': true, 'modal-dialog-transition': this.props.show, 'modal-dialog-transform': this.props.show})} >
            { this.renderMessage() }
            </div>
          </div>);
    }
});
