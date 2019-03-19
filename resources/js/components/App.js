import React from 'react';
import ReactDOM from 'react-dom';
import { Admin, Resource } from 'react-admin';
import { LoginPage, DashboardPage } from '../pages';
import { CustomersList, AgentsList, SubscribtionsList, ServersList, ApplicationsList } from '../lists';
import { i18nProvider, authProvider, dataProvider } from '../providers';
import {
	CustomerEdit,
	CustomerCreate,
	AgentEdit,
	AgentCreate,
	SubscribtionEdit,
	SubscribtionCreate,
	ServerEdit,
	ServerCreate,
	ApplicationEdit,
	ApplicationCreate
} from '../forms';

const App = () => (
	<Admin
		locale="en"
		
		i18nProvider={i18nProvider}
		authProvider={authProvider}
		dataProvider={dataProvider()}
		loginPage={LoginPage}
		dashboard={DashboardPage}
	>
		<Resource name="customers" list={CustomersList} edit={CustomerEdit} create={CustomerCreate} />
		<Resource name="agents" list={AgentsList} edit={AgentEdit} create={AgentCreate} />
		<Resource name="subscribtions" list={SubscribtionsList} edit={SubscribtionEdit} create={SubscribtionCreate} />
		<Resource name="servers" list={ServersList} edit={ServerEdit} create={ServerCreate} />
		<Resource name="applications" list={ApplicationsList} edit={ApplicationEdit} create={ApplicationCreate} />
		<Resource name="subscribtions.cycles" />
	</Admin>
);

ReactDOM.render(<App />, document.getElementById('app'));