import * as React from "react";
import {Datagrid, List, TextField} from 'react-admin';

export function PermissionList(props: any) {
    return (
        <List {...props}>
            <Datagrid rowClick="edit">
                <TextField source="id"/>
                <TextField source="name"/>
            </Datagrid>
        </List>
    );
}