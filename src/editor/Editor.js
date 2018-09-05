import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Editor.css';
import ControlPanel from "./control-panel/ControlPanel";
import TextZone from "./file-zone/FileZone";

export default class Editor extends Component {

    constructor(props) {
        super(props);
        const actions = this.props.availableActions.reduce(
                (acc, curr) => {
                    acc[curr.trim()] = {selected: false};
                    return acc;
                }, {}
            );
        this.state = {actions};
    }

    execCommand(control) {
        document.execCommand(control, false, null);
    }

    onControlClick = controlName => {
        const actions = {...this.state.actions};
        actions[controlName].selected = !actions[controlName].selected;
        this.setState({actions});
        this.execCommand(controlName);
    };

    onTextSelect = e => {
        const actions = {...this.state.actions};
        Object.keys(actions).forEach(action => {
            actions[action].selected = document.queryCommandState(action);
        });
        this.setState({
            actions
        });
    };

    render() {
        return (
            <div className="Editor">
                <ControlPanel actions={this.state.actions} onControlClick={this.onControlClick}/>
                <TextZone onTextChange={this.props.onTextChange}
                          onTextSelect={this.onTextSelect}>
                    {this.props.children}
                </TextZone>
            </div>
        );
    }

    static defaultProps = {
        availableActions: ['bold', 'italic', 'underline'],
        onTextChange: () => {console.log('Change Event fired')},
        name: 'Stranger'
    }

    static propTypes = {
        onTextChange: PropTypes.func,
        availableActions: PropTypes.arrayOf(PropTypes.string),
        children: PropTypes.string,
    }
}
