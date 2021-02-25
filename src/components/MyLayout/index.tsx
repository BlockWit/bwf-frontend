import * as React from 'react';
import {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import {ComponentPropType, defaultTheme, Menu, setSidebarVisibility} from 'react-admin';

import {Navbar} from "../panel/navbar/Navbar";
import {Nav} from "../panel/navbar/Nav";
import {NavItem} from "../panel/navbar/NavItem";
import {NavLink} from "../panel/navbar/NavLink";
import {Sidebar} from "../panel/sidebar/Sidebar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faSignOutAlt} from "@fortawesome/fontawesome-free-solid";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

const theme = createMuiTheme({
    ...defaultTheme,
});

const drawerWidth = 240;

const MyLayout = ({
                      children,
                      dashboard,
                      logout,
                      title,
                  }) => {
    const dispatch = useDispatch();
    const open = useSelector(state => state.admin.ui.sidebarOpen);

    useEffect(() => {
        dispatch(setSidebarVisibility(true));
    }, [setSidebarVisibility]);

    return (
        <ThemeProvider theme={theme}>
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
                <Menu logout={logout} hasDashboard={!!dashboard}/>
            </Sidebar>
            <div>
                {children}
            </div>
        </ThemeProvider>
    );
};

MyLayout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
    dashboard: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string,
    ]),
    logout: ComponentPropType,
    title: PropTypes.string.isRequired,
};

export default MyLayout;