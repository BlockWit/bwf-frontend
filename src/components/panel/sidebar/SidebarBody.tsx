import * as React from 'react';

export class SidebarBody extends React.Component {
    render() {
        return (
            <div className="sidebar">
                {this.props.children}
            </div>
        )
    }
};