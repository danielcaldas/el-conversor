import React from 'react';
import { connect } from 'react-redux';

import Spinner from '../components/spinner/Spinner';
import FooterInfo from '../components/footer-info/FooterInfo';
import { convertNumberToWord } from './converter.actions';

@connect((store) => {
    return {
        app: store
    }
})
export default class Converter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        };
    }

    /**
     * Handle keypress to react to "ENTER" key stroke.
     */
    onHandleKeyPress = (e) => {
        if (e.key === 'Enter' && this.state.input !== '') {
            this.props.dispatch(convertNumberToWord(this.state.input, { sort: true, dict: false }));
        }
    }

    /**
     * Updates state input data given user input.
     */
    onChangeInput = (e) => {
        // @TODO: Allow 0 as well
        // empty or digits from 1 to 9 only
        if (e.target.value === '' || e.target.value.match(/^[1-9]*$/)) {
            this.setState({ input: e.target.value });
        }
    }

    render() {
        const words = this.props.app.converter.words;
        const loading = this.props.app.converter.fetching;

        return (
            <div>
                <header>
                    <input
                        type="text"
                        value={this.state.input}
                        placeholder="Insert number..."
                        onChange={this.onChangeInput}
                        onKeyPress={this.onHandleKeyPress}>
                    </input>
                </header>
                <main>
                    <h3>Results</h3>
                    <pre className="results_area">{words ? JSON.stringify(words, null, 2) : 'No results'}</pre>
                </main>
                <footer>
                    <FooterInfo/>
                </footer>
                <Spinner visible={loading} />
            </div>
        );
    }
}