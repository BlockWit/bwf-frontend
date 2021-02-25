import * as React from 'react';

export class Navbar extends React.Component {
    render() {
        return (
            <nav className="main-header navbar navbar-expand bg-white navbar-light border-bottom">
                {this.props.children}
            </nav>
        )
    }
};