import React from 'react';
import {AppBar, defaultTheme} from 'react-admin';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {createMuiTheme, makeStyles} from '@material-ui/core/styles';

import logo from '../../logo-black.png';

const theme = createMuiTheme({
    ...defaultTheme,
});

const drawerWidth = 240;


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
        maxWidth: "60px",
        marginLeft: -35,
        width: '240px'
    },
    root: {
        borderBottom: '1px',
        borderBottomStyle: 'solid',
        borderBlockColor: '#dee2e6',
        backgroundColor: '#FFFFFF',
        color: '#1f2d3d'
    }
});

function CustomAppBar(props: any) {
    const classes = useStyles();
    return (
        <AppBar theme={theme} {...props} className={classes.root} elevation={0}>
            <Toolbar>
                <img src={logo} alt="logo" className={classes.logo}/>
            </Toolbar>
            <Typography
                variant="h6"
                color="inherit"
                className={classes.title}
            />
            <Typography
                variant="h6"
                color="inherit"
                className={classes.title}
                id="react-admin-title"
            />
        </AppBar>
    );
}

export default CustomAppBar;