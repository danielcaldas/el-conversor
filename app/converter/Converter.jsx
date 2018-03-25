import React from 'react';
import { connect } from 'react-redux';

import Spinner from '../components/spinner/Spinner';
import InputArea from '../components/input-area/InputArea';
import WordsList from '../components/words-list/WordsList';
import FooterInfo from '../components/footer-info/FooterInfo';
import { convertNumberToWord, toggleConverterOption, updateInput } from './converter.actions';
import { OPTIONS } from './converter.const';
@connect((store) => {
    return {
        app: store
    }
})
export default class Converter extends React.Component {
    /**
     * Dispatch the convert number to word action.
     */
    convert = () => {
        if (this.props.app.converter.input !== '') {
            this.props.dispatch(convertNumberToWord(this.props.app.converter.input, this.props.app.converter.options));
        }
    }

    /**
     * Handle keypress to react to "ENTER" key stroke.
     */
    onHandleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.convert();
        }
    }

    /**
     * Updates state input data given user input.
     */
    onChangeInput = (e) => {
        // @TODO: Allow 0 as well
        // empty or digits from 1 to 9 only
        if (e.target.value === '' || e.target.value.match(/^[1-9]*$/)) {
            this.props.dispatch(updateInput(e.target.value));
        }
    }

    /**
     * This function toggles a given option.
     * @param {string} option ID of the option to toggle.
     */
    onToggleOption = (option) => {
        this.props.dispatch(toggleConverterOption(this.props.app.converter.options, option));
    }

    render() {
        const words = this.props.app.converter.words;
        const loading = this.props.app.converter.fetching;
        const options = OPTIONS.map((opt) => ({
            ...opt,
            checked: this.props.app.converter.options[opt.id]
        }), []);

        return (
            <div>
                <Spinner visible={loading} />
                <header>
                    <InputArea
                        inputPlaceHolder={'Convert number... ↵'}
                        value={this.props.app.converter.input}
                        options={options}
                        onChangeInput={this.onChangeInput}
                        onHandleKeyPress={this.onHandleKeyPress}
                        onToggleOption={this.onToggleOption}
                        onClickConvert={this.convert}/>
                </header>
                <main>
                    <WordsList words={words}/>
                </main>
                <footer>
                    <FooterInfo />
                </footer>
            </div>
        );
    }
}
