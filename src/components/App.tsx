import * as React from "react";
import {Admin, Resource} from 'react-admin';
import {AccountList} from './Accounts/index';
import {PermissionList} from './Permissions/index';
import {RoleList} from './Roles/index';
import {PropertyList} from './Properties/index';
import jsonServerProvider from './DataProvider/index';
import AccountsIcon from '@material-ui/icons/Group';
//import AccountsIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import authProvider from './Security/authProvider';

import { Layout } from 'react-admin';
import CustomAppBar from './AppBar/index';

class CustomLayout extends React.Component {
    render() {
        return <Layout {...this.props} appBar={CustomAppBar}/>;
    }
}

const dataProvider = jsonServerProvider('http://localhost:8081/api/v1');
const App = () => (
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
