import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './ControlPanel.css';

export default class ControlPanel extends Component {

    getControlList() {
        return Object.keys(this.props.actions).map(controlName => {
            return <button key={controlName}
                           type="button"
                           className={classNames('format-action', {selected: this.props.actions[controlName].selected})}
                            onMouseDown={(e) => {
                                e.preventDefault();
                            }}
                            onClick={(e) => {
                                e.preventDefault();
                                this.props.onControlClick(controlName);
                            }}>
                <b>{controlName[0].toUpperCase()}</b>
            </button>;
        })
    }

    render() {
        return (
            <div id="control-panel">
                <div id="format-actions">
                    {this.getControlList()}
                </div>
            </div>
        );
    }

    static propTypes = {
        actions: PropTypes.object,
        onControlClick: PropTypes.func.isRequired,
    };
}
