import React from 'react';
import { connect } from 'react-redux';

import Spinner from '../components/spinner/Spinner';
import InputArea from '../components/input-area/InputArea';
import WordsList from '../components/words-list/WordsList';
import FooterInfo from '../components/footer-info/FooterInfo';
import { convertNumberToWord } from './converter.actions';
import { OPTIONS } from './converter.const';
@connect((store) => {
    return {
        app: store
    }
})
export default class Converter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
            options: {
                sort: false,
                dict: false
            }
        };
    }

    /**
     * Handle keypress to react to "ENTER" key stroke.
     */
    onHandleKeyPress = (e) => {
        if (e.key === 'Enter' && this.state.input !== '') {
            this.props.dispatch(convertNumberToWord(this.state.input, this.state.options));
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

    /**
     * This function toggles a given option.
     * @param {string} option ID of the option to toggle.
     */
    onToggleOption = (option) => {
        const newOptionValue = !this.state.options[option];

        this.setState({
            options: { ...this.state.options, [option]: newOptionValue }
        });
    }

    render() {
        const words = this.props.app.converter.words;
        const loading = this.props.app.converter.fetching;
        const options = OPTIONS.map((opt) => ({
            ...opt,
            checked: this.state.options[opt.id]
        }), []);

        return (
            <div>
                <header>
                    <InputArea
                        inputPlaceHolder={'Convert number... ↵'}
                        value={this.state.input}
                        options={options}
                        onChangeInput={this.onChangeInput}
                        onHandleKeyPress={this.onHandleKeyPress}
                        onToggleOption={this.onToggleOption}/>
                </header>
                <main>
                    <WordsList words={words}/>
                </main>
                <footer>
                    <FooterInfo />
                </footer>
                <Spinner visible={loading} />
            </div>
        );
    }
}
