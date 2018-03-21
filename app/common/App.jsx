import React from 'react';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>El Converser</h1>
                <div>
                    <input placeHolder="Insert number..."></input>
                </div>
                <section>
                    <h3>Results</h3>
                    <pre></pre>
                </section>
            </div>
        );
    }
}
