import * as React from 'react';
import classNames from "classnames";
import {PropsWithChildren} from "../helpers";

export interface NavProps extends PropsWithChildren {
}

export class Nav extends React.Component<NavProps> {
    render() {
        return (
            <ul className={classNames('navbar-nav', this.props.className)}>
                {this.props.children}
            </ul>
        )
    }
};