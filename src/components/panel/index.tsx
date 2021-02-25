import * as React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faSignOutAlt} from '@fortawesome/fontawesome-free-solid'
import {Navbar} from "./navbar/Navbar";
import {Nav} from "./navbar/Nav";
import {NavItem} from "./navbar/NavItem";
import {NavLink} from "./navbar/NavLink";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {Sidebar} from "./sidebar/Sidebar";

export class Panel extends React.Component {
    render() {
        return (
            <>
                <Navbar>
                    <Nav>
                        <NavItem>
                            <NavLink>
                                <FontAwesomeIcon icon={faBars as IconProp}/>
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className={'ml-auto'}>
                        <NavItem>
                            <NavLink>
                                <FontAwesomeIcon icon={faSignOutAlt as IconProp}/>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
                <Sidebar>

                </Sidebar>
            </>
        )
    }
};
