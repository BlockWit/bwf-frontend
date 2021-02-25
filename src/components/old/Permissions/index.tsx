import * as React from "react";
import {Datagrid, List, TextField} from 'react-admin';

export class PermissionList extends React.Component<any> {
    render() {
        return (
            <List {...this.props}>
                <Datagrid rowClick="edit">
                    <TextField source="id"/>
                    <TextField source="name"/>
                </Datagrid>
            </List>
        );
    }
}