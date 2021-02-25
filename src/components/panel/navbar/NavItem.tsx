import * as React from 'react';

export class NavItem extends React.Component {
    render() {
        return (
            <li className="nav-item">
                {this.props.children}
            </li>
        )
    }
};