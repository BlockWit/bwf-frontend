import * as React from 'react';

import logo from '../../../logo-white.png';

export class SidebarHeader extends React.Component {
    render() {
        return (
            <a href="/#/panel" className="brand-link">
                <img src={logo} alt="logo" className="brand-image bwf-brand-image"/>
                <span className="brand-text font-weight-light">{this.props.children}</span>
            </a>
        )
    }
};