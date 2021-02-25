import React from 'react';
import {AppBar} from 'react-admin';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {makeStyles} from '@material-ui/core/styles';
import { defaultTheme } from "react-admin";
import { createMuiTheme } from '@material-ui/core/styles';

import logo from '../../../logo-white.png';

const theme = createMuiTheme({
    ...defaultTheme,
});

const useStyles = makeStyles({
    title: {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        marginLeft: -10
    },
    spacer: {
        flex: 1,
    },
    logo: {
        maxWidth: "70px",
        marginLeft: -35
    },
});

const CustomAppBar = props => {
    const classes = useStyles();
    return (
        <AppBar theme={theme} {...props} style={{ backgroundColor: '#002b4e' }} elevation={0}>
            <Toolbar>
                <img src={logo} alt="logo" className={classes.logo}/>
            </Toolbar>
            <Typography
                variant="h6"
                color="inherit"
                className={classes.title}
            ></Typography>
            <Typography
                variant="h6"
                color="inherit"
                className={classes.title}
                id="react-admin-title"
            />
        </AppBar>
    );
};

export default CustomAppBar;