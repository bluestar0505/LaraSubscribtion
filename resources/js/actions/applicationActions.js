export const APPLICATION_CREATE_SUCCESS = 'APPLICATION_CREATE_SUCCESS';
export const APPLICATION_CREATE_FAILURE = 'APPLICATION_CREATE_FAILURE';
export const APPLICATION_UPDATE_SUCCESS = 'APPLICATION_UPDATE_SUCCESS';
export const APPLICATION_UPDATE_FAILURE = 'APPLICATION_UPDATE_FAILURE';
export const APPLICATION_DELETE_SUCCESS = 'APPLICATION_DELETE_SUCCESS';
export const APPLICATION_DELETE_FAILURE = 'APPLICATION_DELETE_FAILURE';

export const applicationCreateSuccess = (applications, basePath) => ({
	type: APPLICATION_CREATE_SUCCESS,
	payload: { data: applications.data },
	meta: {
		resource: 'applications',
		notification: {
			body: 'applications.create.success',
			level: 'info',
		},
		redirectTo: `/applications/${applications.data.id}`,
		basePath,
	},
});

export const applicationCreateFailure = (error) => ({
	type: APPLICATION_CREATE_FAILURE,
	payload: { message: error },
	meta: {
		resource: 'applications',
		notification: {
			body: 'applications.error',
			level: 'warning',
		},
	}
});

export const applicationEditSuccess = (applications, basePath) => ({
	type: APPLICATION_UPDATE_SUCCESS,
	payload: { data: applications.data },
	meta: {
		resource: 'applications',
		notification: {
			body: 'applications.update.success',
			level: 'info',
		},
		redirectTo: '/applications',
		basePath,
	},
});

export const applicationEditFailure = (error) => ({
	type: APPLICATION_UPDATE_FAILURE,
	payload: { message: error },
	meta: {
		resource: 'applications',
		notification: {
			body: 'applications.error',
			level: 'warning',
		},
	}
});

export const applicationDeleteSuccess = (applications, basePath) => ({
	type: APPLICATION_DELETE_SUCCESS,
	payload: { data: applications.data.data },
	meta: {
		resource: 'applications',
		notification: {
			body: 'applications.delete.success',
			level: 'info',
		},
		redirectTo: '/applications',
		basePath,
	},
});

export const applicationDeleteFailure = (error) => ({
	type: APPLICATION_DELETE_FAILURE,
	payload: { message: error },
	meta: {
		resource: 'applications',
		notification: {
			body: 'applications.error',
			level: 'warning',
		},
	}
});