import * as React from 'react';
import classNames from 'classnames';
import {PropsWithChildren} from "../helpers";

export interface NavLinkProps extends PropsWithChildren {
    active?: boolean;
    disabled?: boolean;
    role?: string;
    href?: string;
    eventKey?: unknown;
}

export class NavLink extends React.Component<NavLinkProps> {
    render() {
        return (
            <a className={classNames('nav-link', this.props.disabled && 'disabled')}
               data-widget="pushmenu"
               href={this.props.href}>{this.props.children}</a>
        )
    }
};