export const SERVER_CREATE_SUCCESS = 'SERVER_CREATE_SUCCESS';
export const SERVER_CREATE_FAILURE = 'SERVER_CREATE_FAILURE';
export const SERVER_UPDATE_SUCCESS = 'SERVER_UPDATE_SUCCESS';
export const SERVER_UPDATE_FAILURE = 'SERVER_UPDATE_FAILURE';
export const SERVER_DELETE_SUCCESS = 'SERVER_DELETE_SUCCESS';
export const SERVER_DELETE_FAILURE = 'SERVER_DELETE_FAILURE';

export const serverCreateSuccess = (servers, basePath) => ({
	type: SERVER_CREATE_SUCCESS,
	payload: { data: servers.data },
	meta: {
		resource: 'servers',
		notification: {
			body: 'servers.create.success',
			level: 'info',
		},
		redirectTo: `/servers/${servers.data.id}`,
		basePath,
	},
});

export const serverCreateFailure = (error) => ({
	type: SERVER_CREATE_FAILURE,
	payload: { message: error },
	meta: {
		resource: 'servers',
		notification: {
			body: 'servers.error',
			level: 'warning',
		},
	}
});

export const serverEditSuccess = (servers, basePath) => ({
	type: SERVER_UPDATE_SUCCESS,
	payload: { data: servers.data },
	meta: {
		resource: 'servers',
		notification: {
			body: 'servers.update.success',
			level: 'info',
		},
		redirectTo: '/servers',
		basePath,
	},
});

export const serverEditFailure = (error) => ({
	type: SERVER_UPDATE_FAILURE,
	payload: { message: error },
	meta: {
		resource: 'servers',
		notification: {
			body: 'servers.error',
			level: 'warning',
		},
	}
});

export const serverDeleteSuccess = (servers, basePath) => ({
	type: SERVER_DELETE_SUCCESS,
	payload: {},
	meta: {
		resource: 'servers',
		notification: {
			body: 'servers.delete.success',
			level: 'info',
		},
		redirectTo: '/servers',
		basePath,
	},
});

export const serverDeleteFailure = (error) => ({
	type: SERVER_DELETE_FAILURE,
	payload: { message: error },
	meta: {
		resource: 'servers',
		notification: {
			body: 'servers.error',
			level: 'warning',
		},
	}
});