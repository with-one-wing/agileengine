import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FileZone.css';

class FileZone extends Component {

    render() {
        return (
            <div id="file-zone">
                <div id="file"
                     contentEditable="true"
                     dangerouslySetInnerHTML={{__html: this.props.children}}
                     onKeyUp={this.props.onTextChange}
                     onSelect={this.props.onTextSelect}
                >
                </div>
            </div>
        );
    }
}

FileZone.propTypes = {
    children: PropTypes.string,
    onTextChange: PropTypes.func.isRequired,
    onTextSelect: PropTypes.func.isRequired,
};

export default FileZone;
