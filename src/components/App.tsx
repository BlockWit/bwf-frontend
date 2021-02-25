import * as React from "react";
import {Admin, Layout, Resource} from 'react-admin';
import MyLayout from './MyLayout/index';
//import MyLayout2 from './panel/navbar/index';
import {Panel} from './panel/index';
import {AccountList} from './Accounts/index';
import {PermissionList} from './Permissions/index';
import {RoleList} from './Roles/index';
import {PropertyList} from './Properties/index';
import jsonServerProvider from './DataProvider/index';
import AccountsIcon from '@material-ui/icons/Group';
//import AccountsIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import authProvider from './Security/authProvider';
import CustomAppBar from './AppBar/index';
import {createMuiTheme} from '@material-ui/core/styles';

import './App.scss';

import {makeStyles} from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        type: 'dark', // Switching the dark mode on is a single property value change.
    },
});

/*
const useStyles = makeStyles({
    root: {
        backgroundColor: '#f4f6f9',
    }
});
*/
function CustomLayout(props: any) {
    //const classes = useStyles();
    //return <Layout {...props} appBar={CustomAppBar}/>;
    return <MyLayout {...props}/>;
    //return <Panel {...props}/>
}

const dataProvider = jsonServerProvider('http://localhost:8081/api/v1');
const App = (props) => (
    //<Panel {...props}/>
    <Admin dataProvider={dataProvider}
           dashboard={Dashboard}
           authProvider={authProvider}
           layout={CustomLayout}>
        <Resource name="accounts" list={AccountList} icon={AccountsIcon}/>
        <Resource name="permissions" list={PermissionList}/>
        <Resource name="roles" list={RoleList}/>
        <Resource name="properties" list={PropertyList}/>
    </Admin>
);

export default App;
