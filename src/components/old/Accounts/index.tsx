import * as React from "react";
import {Datagrid, EmailField, List, TextField} from 'react-admin';

export class AccountList extends React.Component<any> {
    render() {
        return (
            <List {...this.props}>
                <Datagrid rowClick="edit">
                    <TextField source="id"/>
                    <TextField source="login"/>
                    <EmailField source="email"/>
                    <TextField source="status"/>
                </Datagrid>
            </List>
        );
    }
}