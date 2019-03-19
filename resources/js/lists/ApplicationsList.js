import React from 'react';
import { List, Filter, Responsive, SimpleList, Datagrid, TextInput, TextField } from 'react-admin';


const ApplicationsFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const ApplicationsList = (props) => (
	<List {...props} filters={<ApplicationsFilter />}>
		<Responsive
            small={
            	<SimpleList
                    primaryText={record => record.name}
                />
            }
            medium={
				<Datagrid rowClick="edit">
					<TextField source="name" label="Application name" />
				</Datagrid>
			}
		/>
	</List>
);

export default ApplicationsList;