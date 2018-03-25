import React from 'react';

import './input-area.scss';

export default class InputArea extends React.Component {
    _buildOption = (option) => {
        const { id, checked, desc } = option;

        return (
            <div key={id} className="input-area__option">
                <input
                    className="input-area__option__check"
                    type="checkbox"
                    checked={checked}
                    onClick={(event) => this.props.onToggleOption(id)}/>
                <span className="input-area__option__label">{desc}</span>
            </div>
        );
    }

    render() {
        return (
            <div className="input-area">
                <input
                    className="input-area__input"
                    type="text"
                    value={this.props.value}
                    placeholder={this.props.inputPlaceHolder}
                    onChange={this.props.onChangeInput}
                    onKeyPress={this.props.onHandleKeyPress}/>
                <div className="input-area__options">
                    {this.props.options.map(opt => this._buildOption(opt))}
                </div>
                <span className="input-area__convert" onClick={this.props.onClickConvert}>Convert!</span>
            </div>
        );
    }
}
