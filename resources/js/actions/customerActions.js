export const CUSTOMER_CREATE_SUCCESS = 'CUSTOMER_CREATE_SUCCESS';
export const CUSTOMER_CREATE_FAILURE = 'CUSTOMER_CREATE_FAILURE';
export const CUSTOMER_UPDATE_SUCCESS = 'CUSTOMER_UPDATE_SUCCESS';
export const CUSTOMER_UPDATE_FAILURE = 'CUSTOMER_UPDATE_FAILURE';
export const CUSTOMER_DELETE_SUCCESS = 'CUSTOMER_DELETE_SUCCESS';
export const CUSTOMER_DELETE_FAILURE = 'CUSTOMER_DELETE_FAILURE';

export const customerCreateSuccess = (customer, basePath) => ({
	type: CUSTOMER_CREATE_SUCCESS,
	payload: { data: customer.data },
	meta: {
		resource: 'customers',
		notification: {
			body: 'customers.create.success',
			level: 'info',
		},
		redirectTo: `/customers/${customer.data.id}`,
		basePath,
	},
});

export const customerCreateFailure = (error) => ({
	type: CUSTOMER_CREATE_FAILURE,
	payload: { message: error },
	meta: {
		resource: 'customers',
		notification: {
			body: error,
			level: 'warning',
		},
	}
});

export const customerEditSuccess = (customer, basePath) => ({
	type: CUSTOMER_UPDATE_SUCCESS,
	payload: { data: customer.data },
	meta: {
		resource: 'customers',
		notification: {
			body: 'customers.edit.success',
			level: 'info',
		},
		redirectTo: `/customers`,
		basePath,
	},
});

export const customerEditFailure = (error) => ({
	type: CUSTOMER_UPDATE_FAILURE,
	payload: { message: error },
	meta: {
		resource: 'customers',
		notification: {
			body: error,
			level: 'warning',
		},
	}
});

export const customerDeleteSuccess = (customer, basePath) => ({
	type: CUSTOMER_DELETE_SUCCESS,
	payload: { data: customer.data },
	meta: {
		resource: 'customers',
		notification: {
			body: 'customers.delete.success',
			level: 'info',
		},
		redirectTo: `/customers`,
		basePath,
	},
});

export const customerDeleteFailure = (error) => ({
	type: CUSTOMER_DELETE_FAILURE,
	payload: { message: error },
	meta: {
		resource: 'customers',
		notification: {
			body: error,
			level: 'warning',
		},
	}
});