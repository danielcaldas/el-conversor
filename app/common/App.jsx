import React from 'react';

import { ConverterClient } from './clients/converter-client';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.converterClient = new ConverterClient(ENV.API, 10000);

        this.state = {
            input: '',
            results: ''
        };
    }

    /**
     * Handle keypress to react to "ENTER" key stroke.
     */
    onHandleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.converterClient.convert(this.state.input)
                .then((data) => {
                    const results = JSON.stringify(data, null, 2);

                    this.setState({ results });
                });
        }
    }

    /**
     * Updates state input data given user input.
     */
    onChangeInput = (e) => {
        // empty or digits from 1 to 9 only
        if (e.target.value === '' || e.target.value.match(/^[1-9]*$/)) {
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
                    <pre>{this.state.results}</pre>
                </section>
            </div>
        );
    }
}
