import * as React from "react";
import {Datagrid, List, TextField} from 'react-admin';

export function PropertyList(props: any) {
    return (
        <List {...props}>
            <Datagrid rowClick="edit">
                <TextField source="id"/>
                <TextField source="name"/>
                <TextField source="description"/>
                <TextField source="propertyType"/>
                <TextField source="value"/>
            </Datagrid>
        </List>
    );
}