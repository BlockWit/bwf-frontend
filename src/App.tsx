import * as React from "react";
import {Admin, Layout, Resource} from 'react-admin';
import {AccountList} from './components/old/Accounts';
import {PermissionList} from './components/old/Permissions';
import {RoleList} from './components/old/Roles';
import {PropertyList} from './components/old/Properties';
import jsonServerProvider from './components/old/DataProvider';
import AccountsIcon from '@material-ui/icons/Group';
import Dashboard from './components/old/Dashboard';
import authProvider from './components/old/Security/authProvider';
import CustomAppBar from './components/old/AppBar';

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
