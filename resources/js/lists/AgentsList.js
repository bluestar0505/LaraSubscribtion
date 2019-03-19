import React from 'react';
import { List, Filter, TextInput, Responsive, SimpleList, Datagrid, TextField, EmailField, DateField } from 'react-admin';
import BankField from './fields/BankField';

const isActiveRowStyle = (record, index) => ({
	backgroundColor: record.is_active ? 'white' : 'rgb(240, 240, 240)',
});

const AgentsFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const AgentsList = (props) => (
	<List {...props} filters={<AgentsFilter />}>
		<Responsive
            small={
            	<SimpleList
                    primaryText={record => record.name}
                    secondaryText={record => `email: ${record.email}, phone: ${record.phone}`}
                />
            }
            medium={
				<Datagrid rowClick="edit" rowStyle={isActiveRowStyle}>
					<TextField source="remote_id" label="Remote ID" />
					<TextField source="name" />
					<EmailField source="email" />
					<TextField source="phone" />
					<TextField source="address" />
					<BankField label="Bank"/>
					<TextField source="location" />
					<TextField source="commission_agreed" />
					<TextField source="commission_count" />
					<DateField source="active" />
					<DateField source="created_at" label="Created"/>
					<DateField source="updated_at" label="Updated"/>
				</Datagrid>
			}
		/>
	</List>
);

export default AgentsList;