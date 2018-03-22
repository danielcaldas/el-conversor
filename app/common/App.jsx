import React from 'react';

import { ConverterClient } from './clients/converter-client';

export default class App extends React.Component {
    constructor (props) {
        super(props);

        this.converterClient = new ConverterClient(ENV.API, 10000);

        this.state = {
            input: ''  
        };
    }

    onHandleKeyPress = (e) => {
        if (e.key === 'Enter') {
            alert(this.state.input);
        }
    }

    onChangeInput = (e) => {
        // numeric values only
        if (e.target.value.match(/\d/)) {
            this.setState({ input: e.target.value });
        }
    }

    render() {
        return (
            <div>
                <h1 className="main-title">El Conversor</h1>
                <div>
                    <input
                        type="text"
                        value={this.state.input}
                        placeholder="Insert number..."
                        onChange={this.onChangeInput}
                        onKeyPress={this.onHandleKeyPress}>
                    </input>
                </div>
                <section>
                    <h3>Results</h3>
                    <pre></pre>
                </section>
            </div>
        );
    }
}
