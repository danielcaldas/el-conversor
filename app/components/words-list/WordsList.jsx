import React from 'react';

import './words-list.scss';

export default class WordsList extends React.Component {
    _buildWord(word) {
        return (
            <div key={word} className="words-list__word">{word}</div>
        );
    }

    render() {
        const content = (this.props.words && this.props.words.length)
            ? this.props.words.map(word => this._buildWord(word))
            : 'No results';

        return (
            <div className="words-list">
                {content}
            </div>
        );
    }
}
