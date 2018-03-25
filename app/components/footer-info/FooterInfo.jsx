import React from 'react';

import './footer-info.scss';
import githubLogo from '../../assets/github-logo.png';

export default class FooterInfo extends React.Component {
    render() {
        return (
            <div className="footer-info">
                <div className="footer-info__refs">
                    <a className="footer-info__github" href="https://github.com/danielcaldas/el-conversor">
                        <img src={githubLogo}></img>
                    </a>
                </div>
                <span className="footer-info__title">El Conversor</span>
            </div>
        );
    }
}
