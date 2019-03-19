export const SUBSCRIBTION_CREATE_SUCCESS = 'SUBSCRIBTION_CREATE_SUCCESS';
export const SUBSCRIBTION_CREATE_FAILURE = 'SUBSCRIBTION_CREATE_FAILURE';
export const SUBSCRIBTION_UPDATE_SUCCESS = 'SUBSCRIBTION_UPDATE_SUCCESS';
export const SUBSCRIBTION_UPDATE_FAILURE = 'SUBSCRIBTION_UPDATE_FAILURE';
export const SUBSCRIBTION_DELETE_SUCCESS = 'SUBSCRIBTION_DELETE_SUCCESS';
export const SUBSCRIBTION_DELETE_FAILURE = 'SUBSCRIBTION_DELETE_FAILURE';
export const SUBSCRIBTION_PAUSE_SUCCESS = 'SUBSCRIBTION_PAUSE_SUCCESS';
export const SUBSCRIBTION_PAUSE_FAILURE = 'SUBSCRIBTION_PAUSE_FAILURE';
export const SUBSCRIBTION_CANCEL_SUCCESS = 'SUBSCRIBTION_CANCEL_SUCCESS';
export const SUBSCRIBTION_CANCEL_FAILURE = 'SUBSCRIBTION_CANCEL_FAILURE';
export const SUBSCRIBTION_ADD_CYCLE_SUCCESS = 'SUBSCRIBTION_ADD_CYCLE_SUCCESS';
export const SUBSCRIBTION_ADD_CYCLE_FAILURE = 'SUBSCRIBTION_ADD_CYCLE_FAILURE';

export const subscribtionCreateSuccess = (subscribtions, basePath) => ({
	type: SUBSCRIBTION_CREATE_SUCCESS,
	payload: { data: subscribtions.data },
	meta: {
		resource: 'subscribtions',
		notification: {
			body: 'subscribtions.create.success',
			level: 'info',
		},
		redirectTo: `/subscribtions/${subscribtions.data.id}`,
		basePath,
	},
});

export const subscribtionCreateFailure = (error) => ({
	type: SUBSCRIBTION_CREATE_FAILURE,
	payload: { message: error },
	meta: {
		resource: 'subscribtions',
		notification: {
			body: error,//'subscribtions.error',
			level: 'warning',
		},
	}
});

export const subscribtionEditSuccess = (subscribtions, basePath) => ({
	type: SUBSCRIBTION_UPDATE_SUCCESS,
	payload: { data: subscribtions.data },
	meta: {
		resource: 'subscribtions',
		notification: {
			body: 'subscribtions.update.success',
			level: 'info',
		},
		redirectTo: '/subscribtions',
		basePath,
	},
});

export const subscribtionEditFailure = (error) => ({
	type: SUBSCRIBTION_UPDATE_FAILURE,
	payload: { message: error },
	meta: {
		resource: 'subscribtions',
		notification: {
			body: error,//'subscribtions.error',
			level: 'warning',
		},
	}
});

export const subscribtionDeleteSuccess = (subscribtions, basePath) => ({
	type: SUBSCRIBTION_DELETE_SUCCESS,
	payload: {},
	meta: {
		resource: 'subscribtions',
		notification: {
			body: 'subscribtions.delete.success',
			level: 'info',
		},
		redirectTo: '/subscribtions',
		basePath,
	},
});

export const subscribtionDeleteFailure = (error) => ({
	type: SUBSCRIBTION_DELETE_FAILURE,
	payload: { message: error },
	meta: {
		resource: 'subscribtions',
		notification: {
			body: error,//'subscribtions.error',
			level: 'warning',
		},
	}
});

export const subscribtionPauseSuccess = (subscribtion, basePath) => ({
	type: SUBSCRIBTION_PAUSE_SUCCESS,
	payload: { data: subscribtion.data },
	meta: {
		resource: 'subscribtions',
		notification: {
			body: (Boolean(subscribtion.data.is_paused) ? 'subscribtions.paused.success' : 'subscribtions.resumed.success'),
			level: 'info',
		},
		redirectTo: '/subscribtions',
		basePath,
	},
});

export const subscribtionPauseFailure = (error) => ({
	type: SUBSCRIBTION_PAUSE_FAILURE,
	payload: { message: error },
	meta: {
		resource: 'subscribtions',
		notification: {
			body: error,
			level: 'warning',
		},
	}
});

export const subscribtionCancelSuccess = (subscribtion, basePath) => ({
	type: SUBSCRIBTION_CANCEL_SUCCESS,
	payload: { data: subscribtion.data },
	meta: {
		resource: 'subscribtions',
		notification: {
			body: (Boolean(subscribtion.data.is_cancelled) ? 'subscribtions.cancelled.success' : 'subscribtions.restored.success'),
			level: 'info',
		},
		redirectTo: '/subscribtions',
		basePath,
	},
});

export const subscribtionCancelFailure = (error) => ({
	type: SUBSCRIBTION_CANCEL_FAILURE,
	payload: { message: error },
	meta: {
		resource: 'subscribtions',
		notification: {
			body: error,
			level: 'warning',
		},
	}
});

export const subscribtionAddCycleSuccess = (subscribtion, basePath) => ({
	type: SUBSCRIBTION_ADD_CYCLE_SUCCESS,
	payload: { data: subscribtion.data },
	meta: {
		resource: 'subscribtions',
		notification: {
			body: 'subscribtions.cycles.create.success',
			level: 'info',
		},
		//redirectTo: `/subscribtions/${subscribtion.data.id}`,
		basePath,
	},
});

export const subscribtionAddCycleFailure = (error) => ({
	type: SUBSCRIBTION_ADD_CYCLE_FAILURE,
	payload: { message: error },
	meta: {
		resource: 'subscribtions',
		notification: {
			body: error,
			level: 'warning',
		},
	}
});








