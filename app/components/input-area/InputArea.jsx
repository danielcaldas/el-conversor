import React from 'react';

import './input-area.scss';

export default class InputArea extends React.Component {
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
                    <div className="input-area__option">
                        <input className="input-area__option__check" type="checkbox"/>
                        <span className="input-area__option__label">Dictionary words only</span>
                    </div>
                    <div className="input-area__option">
                        <input className="input-area__option__check" type="checkbox"/>
                        <span className="input-area__option__label">Sort words alpha</span>
                    </div>
                </div>
            </div>
        );
    }
}
