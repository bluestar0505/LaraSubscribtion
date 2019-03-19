import React from 'react';
import { List, Filter, TextInput, Responsive, SimpleList, Datagrid, TextField, EmailField, DateField } from 'react-admin';

const CustomersFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const CustomersList = (props) => (
	<List {...props} filters={<CustomersFilter />}>
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
					<TextField source="name" />
					<EmailField source="email" />
					<TextField source="phone" />
					<TextField source="company" />
					<TextField source="industry" />
					<DateField source="created_at" label="Created"/>
					<DateField source="updated_at" label="Updated"/>
				</Datagrid>
			}
		/>
	</List>
);

export default CustomersList;