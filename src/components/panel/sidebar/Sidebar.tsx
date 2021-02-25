import * as React from 'react';
import {SidebarHeader} from "./SidebarHeader";
import {SidebarBody} from "./SidebarBody";

export class Sidebar extends React.Component {
    render() {
        return (
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <SidebarHeader>BWF</SidebarHeader>
                <SidebarBody>{this.props.children}</SidebarBody>
            </aside>
        )
    }
};