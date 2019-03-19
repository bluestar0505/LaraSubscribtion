import React from 'react';
import { List, Filter, Responsive, SimpleList, Datagrid, TextInput, TextField, BooleanField } from 'react-admin';
import BooleanColoredField from './fields/BooleanColoredField';

const ServersFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const ServersList = (props) => (
	<List {...props} filters={<ServersFilter />}>
		<Responsive
            small={
            	<SimpleList
                    primaryText={record => record.application}
                    secondaryText={record => `location: ${record.location}, size: ${record.size}, domain: ${record.domain}, ip: ${record.ip}`}
                />
            }
            medium={
				<Datagrid rowClick="edit">
					<TextField source="application" label="Application" />
					<TextField source="location" />
					<TextField source="size" />
					<TextField source="image" />
					<TextField source="snapshot" />
					<TextField source="domain" />
					<TextField source="ip" />
					<BooleanColoredField source="is_active" />
				</Datagrid>
			}
		/>
	</List>
);

export default ServersList;