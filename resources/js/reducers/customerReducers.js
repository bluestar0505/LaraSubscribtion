import {
	CUSTOMER_CREATE_SUCCESS,
	CUSTOMER_CREATE_FAILURE
} from '../actions/customerActions';

export default (previousState = 0, { type, payload }) => {
	switch (type) {
		case CUSTOMER_CREATE_SUCCESS: {
			return payload.customer;
		}
		case CUSTOMER_CREATE_FAILURE: {
			return payload.message;
		}
		default:
			return previousState;
	}
}