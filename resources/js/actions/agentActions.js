export const AGENT_CREATE_SUCCESS = 'AGENT_CREATE_SUCCESS';
export const AGENT_CREATE_FAILURE = 'AGENT_CREATE_FAILURE';
export const AGENT_UPDATE_SUCCESS = 'AGENT_UPDATE_SUCCESS';
export const AGENT_UPDATE_FAILURE = 'AGENT_UPDATE_FAILURE';
export const AGENT_DELETE_SUCCESS = 'AGENT_DELETE_SUCCESS';
export const AGENT_DELETE_FAILURE = 'AGENT_DELETE_FAILURE';

export const agentCreateSuccess = (agent, basePath) => ({
	type: AGENT_CREATE_SUCCESS,
	payload: { data: agents.data },
	meta: {
		resource: 'agents',
		notification: {
			body: 'agents.create.success',
			level: 'info',
		},
		redirectTo: `/agents/${agents.data.id}`,
		basePath,
	},
});

export const agentCreateFailure = (error) => ({
	type: AGENT_CREATE_FAILURE,
	payload: { message: error },
	meta: {
		resource: 'agents',
		notification: {
			body: 'agents.error',
			level: 'warning',
		},
	}
});

export const agentEditSuccess = (agent, basePath) => ({
	type: AGENT_UPDATE_SUCCESS,
	payload: { data: agents.data },
	meta: {
		resource: 'agents',
		notification: {
			body: 'agents.update.success',
			level: 'info',
		},
		redirectTo: '/agents',
		basePath,
	},
});

export const agentEditFailure = (error) => ({
	type: AGENT_UPDATE_FAILURE,
	payload: { message: error },
	meta: {
		resource: 'agents',
		notification: {
			body: 'agents.error',
			level: 'warning',
		},
	}
});

export const agentDeleteSuccess = (agent, basePath) => ({
	type: AGENT_DELETE_SUCCESS,
	payload: {},
	meta: {
		resource: 'agents',
		notification: {
			body: 'agents.delete.success',
			level: 'info',
		},
		redirectTo: '/agents',
		basePath,
	},
});

export const agentDeleteFailure = (error) => ({
	type: AGENT_DELETE_FAILURE,
	payload: { message: error },
	meta: {
		resource: 'agents',
		notification: {
			body: 'agents.error',
			level: 'warning',
		},
	}
});