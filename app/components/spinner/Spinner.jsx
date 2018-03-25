import React from 'react';

import './spinner.scss';

export default class Spinner extends React.Component {
    render() {
        const spinnerClass = this.props.visible ? 'spinner__loader' : '';

        return (
            <div className="spinner">
                <div className={spinnerClass}></div>
            </div>
        );
    }
}
