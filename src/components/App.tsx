import * as React from "react";
import {Admin, Resource} from 'react-admin';
import {AccountList} from './Accounts/index';
import {PropertyList} from './Properties/index';
import jsonServerProvider from './DataProvider/index';
import AccountsIcon from '@material-ui/icons/Group';
//import AccountsIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import authProvider from './Security/authProvider';


const dataProvider = jsonServerProvider('http://localhost:8081/api/v1');
const App = () => (
    <Admin dataProvider={dataProvider} dashboard={Dashboard} authProvider={authProvider}>
        <Resource name="accounts" list={AccountList} icon={AccountsIcon}/>
        <Resource name="properties" list={PropertyList}/>
    </Admin>
);

export default App;
