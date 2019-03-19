import React from 'react';
import { List, Filter, TextInput, Responsive, SimpleList, Datagrid, TextField, EmailField, DateField, ReferenceField, BooleanField } from 'react-admin';
import BooleanColoredField from './fields/BooleanColoredField';

const SubscribtionsFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const SubscribtionsList = (props) => (
    <List {...props} filters={<SubscribtionsFilter />}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.name}
                    secondaryText={record => record.company}
                />
            }
            medium={
                <Datagrid rowClick="edit">
                    <TextField source="remote_id" label="Remote ID" />
                    <TextField source="subscribtion_type.name" label="Type" />
                    <TextField source="customer.name" label="Customer" />
                    <TextField source="agent.name" label="Agent" />

                    <BooleanColoredField label="Paused" source="is_paused" />
                    <BooleanColoredField label="Cancelled" source="is_cancelled" />
                    <DateField source="created_at" label="Created"/>
                </Datagrid>
            }
        />
    </List>
);

export default SubscribtionsList;