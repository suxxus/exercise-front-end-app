import React from 'react';
import { SAVE_METRIC, UNDO_CHANGES} from '../constants/actions';

export
default React.createClass({

        propTypes: {
            confirmAction: React.PropTypes.func.isRequired
        },

        cancelClickListener() {
            this.props.confirmAction(UNDO_CHANGES);
        },

        saveClickListener() {
            this.props.confirmAction(SAVE_METRIC);
        },

        renderSaveBtn() {
            return (<div id = "save" className = "right" >
                <button type="button"
                    onClick={this.saveClickListener}>save</button>
              </div>);
        },

        renderCancelBtn() {
            return (<div id="cancel" className="left">
                      <button type="button"
                        onClick={this.cancelClickListener}>cancel</button>
                    </div>);
        },

        render() {
            return (
                <div className="metric-actions-btns">
                  <div className="wrapper">
                    {this.renderCancelBtn()}
                    {this.renderSaveBtn()}
                  </div>
              </div>
            );
        }
});
