import React from 'react';

import { ConverterClient } from ''

export default class App extends React.Component {
    constructor (props) {
        super(props);

        this.ENVIRONMENT = ENV;
        this.converterClient = new
    }

    render() {
        return (
            <div>
                <h1 className="main-title">El Conversor</h1>
                <div>
                    <input placeholder="Insert number..."></input>
                </div>
                <section>
                    <h3>Results</h3>
                    <pre></pre>
                </section>
            </div>
        );
    }
}
