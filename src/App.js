import React, {Component} from 'react';
import './App.css';
import ErrorBoundary from "./ErrorBoundary";
import Editor from "./editor/Editor";
import getMockText from './text.service';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            html: ''
        };
    }
    componentDidMount() {
        this.setText()
    }

    setText() {
        getMockText().then((result) => {
            this.setState(prevState => {return {html: result}});
        });
    }

    onTextChange() {
        console.log('onTextChange Callback Fired');
    }

    render() {
        return (
            <ErrorBoundary>
                <div className="App">
                    <header>
                        <span>Simple Text Editor</span>
                    </header>
                    <main>
                        <h3>Default Editor</h3>
                        <Editor />
                        <h3>Customize options</h3>
                        <Editor availableActions={['bold', 'italic', 'underline', 'strikeThrough']}
                                onTextChange={this.onTextChange}>
                            {this.state.html}
                        </Editor>
                    </main>
                </div>
            </ErrorBoundary>
        );
    }
}

export default App;
