import * as React from 'react';
import {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {createMuiTheme, makeStyles} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import {ComponentPropType, defaultTheme, setSidebarVisibility} from 'react-admin';

import {Navbar, NavbarBrand, Nav, NavLink, NavDropdown, FormControl, Button, Form, Container} from 'react-bootstrap';
import logo from "../../logo-black.png";


const theme = createMuiTheme({
    ...defaultTheme,
});

const useStyles = makeStyles(theme => ({}));

const MyLayout = ({
                      children,
                      dashboard,
                      logout,
                      title,
                  }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const open = useSelector(state => state.admin.ui.sidebarOpen);

    useEffect(() => {
        dispatch(setSidebarVisibility(true));
    }, [setSidebarVisibility]);

    return (
        <Navbar bg="light" expand="lg"
                className={"main-header navbar navbar-expand bg-white navbar-light border-bottom"}>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
        </Navbar>
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